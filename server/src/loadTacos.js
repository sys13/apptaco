import https from 'https'
import fs from 'fs'
import request from 'request'
import extract from 'extract-zip'
import path from 'path'

var download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body) {
    console.log('downloading file')

    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback)
  })
}

export default () => {
  console.log('1. loading tacos')

  const options = {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    hostname: 'api.github.com',
    port: 443,
    path: '/repos/erikwennerberg/apptacos',
    method: 'GET',
  }

  return new Promise((resolve, reject) => {
    try {
      https.get(options, res => {
        let body = ''
        res.on('data', d => {
          body += d
        })
        res.on('end', () => {
          // Data reception is done, do whatever with it!
          const parsed = JSON.parse(body)

          const updated_date = new Date(parsed.updated_at)

          console.log('2. latest update:' + updated_date)

          let mtime
          if (fs.existsSync('tacos.zip')) {
            const stats = fs.statSync('tacos.zip')

            mtime = stats.mtime
            console.log('3. tacos.zip date: ' + mtime)
          }

          if (mtime == null || updated_date > mtime) {
            console.log(
              'b.1need to update because' + updated_date + '>' + mtime
            )

            download(
              'https://github.com/erikwennerberg/apptacos/archive/master.zip',
              'tacos.zip',
              () => {
                console.log('b2 download done')
                console.log('b3 unzipping tacos.zip to ' + process.cwd())
                extract('tacos.zip', { dir: process.cwd() }, err => {
                  console.log(err)
                })
              }
            )
          } else {
            console.log('4.no need to update')
            let tacos = []
            const tacoDir = 'apptacos-master'
            fs.readdir(tacoDir, function(err, files) {
              if (err) {
                console.error('Could not list the directory.', err)
                process.exit(1)
              }
              console.log('starting for each')

              files.forEach((file, index) => {
                const filePath = path.join(tacoDir, file)
                const stats = fs.statSync(filePath)

                // level 1 we are in a taco now
                if (stats.isDirectory()) {
                  console.log("5. '%s' is a directory.", filePath)
                  const obj = JSON.parse(
                    fs.readFileSync(filePath + '/meta.json', 'utf8')
                  )
                  console.log('5: ' + JSON.stringify(obj))
                  tacos.push(obj)
                }
              })
              console.log('6. returning tacos' + tacos)
              resolve(tacos)
              // return tacos
            })
            console.log(10)
          }
        })
        console.log(11)
      })
    } catch (error) {
      reject(error)
    }
  })
}

// const sampleList = [
//   {
//     id: '1',
//     name: 'foo',
//     description: 'lorem ipsum sit dolor',
//     version: '1.3',
//     tags: ['java', 'spring'],
//     authors: 'Einstein',
//     ingredients: [
//       {
//         type: 'btRules',
//         contents: 'JSON from Config exporter',
//         doc: 'This is a good config',
//       },
//       {
//         type: 'eum',
//         contents: 'JSON from Config exporter',
//         doc: 'This is the best config',
//       },
//     ],
//   },
//   {
//     id: '2',
//     name: 'bar',
//     description: 'lorem ipsum sit dolor',
//     version: '1.3',
//     tags: ['java', 'spring'],
//     authors: 'Einstein',
//     ingredients: [
//       {
//         type: 'btRules',
//         contents: 'JSON from Config exporter',
//         doc: 'This is a good config',
//       },
//       {
//         type: 'eum',
//         contents: 'JSON from Config exporter',
//         doc: 'This is the best config',
//       },
//     ],
//   },
//   {
//     id: '3',
//     name: 'baz',
//     description: 'lorem ipsum sit dolor',
//     version: '1.3',
//     tags: ['java', 'spring'],
//     authors: 'Einstein',
//     ingredients: [
//       {
//         type: 'btRules',
//         contents: 'JSON from Config exporter',
//         doc: 'This is a good config',
//       },
//       {
//         type: 'eum',
//         contents: 'JSON from Config exporter',
//         doc: 'This is the best config',
//       },
//     ],
//   },
// ]
