import https from 'https'
import fs from 'fs'
import request from 'request'
import extract from 'extract-zip'
import path from 'path'
import slugify from 'slugify'
import { sync as DataURI } from 'datauri'

var download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body) {
    console.log('downloading file')

    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback)
  })
}

export default (loadImages = true, loadTemplates = false) => {
  console.log('1. loading tacos')

  const dir = process.env.WRITE_FOLDER || process.cwd()

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
          const tacosZipPath = path.resolve(dir, 'tacos.zip')

          const updated_date = new Date(parsed.updated_at)

          console.log('2. latest update:' + updated_date)

          let mtime
          if (fs.existsSync(tacosZipPath)) {
            const stats = fs.statSync(tacosZipPath)

            mtime = stats.mtime
            console.log('3. tacos.zip date: ' + mtime)
          }

          if (mtime == null || updated_date > mtime) {
            console.log(
              'b.1need to update because' + updated_date + '>' + mtime
            )

            download(
              'https://github.com/erikwennerberg/apptacos/archive/master.zip',
              tacosZipPath,
              () => {
                console.log('b2 download done')
                console.log('b3 unzipping tacos.zip to ' + dir)
                extract(tacosZipPath, { dir }, err => {
                  console.log(err)
                })
              }
            )
          } else {
            console.log('4.no need to update')
            let tacos = []
            const tacoDir = path.resolve(dir, 'apptacos-master')
            console.log('tacoDir: ' + tacoDir)

            fs.readdir(tacoDir, function(err, files) {
              if (err) {
                console.error('Could not list the directory.', err)
                process.exit(1)
              }
              console.log('starting for each')

              files.forEach((file, index) => {
                const filePath = path.resolve(tacoDir, file)
                const stats = fs.statSync(filePath)

                // level 1 we are in a taco now
                if (stats.isDirectory()) {
                  console.log("5. '%s' is a directory.", filePath)
                  const data = fs.readFileSync(
                    path.resolve(filePath, 'meta.json'),
                    'utf8'
                  )
                  try {
                    const obj = JSON.parse(data)
                    console.log('5: ' + JSON.stringify(obj))
                    if (loadImages && obj.image) {
                      obj.image = {
                        name: obj.image,
                        data: DataURI(filePath + '/' + obj.image),
                      }
                    }
                    if (loadTemplates && obj.ingredients) {
                      obj.ingredients = obj.ingredients
                        .map(ingredient => {
                          try {
                            ingredient.template = fs.readFileSync(
                              filePath + '/' + ingredient.file,
                              'utf8'
                            )
                            return ingredient
                          } catch (e) {
                            return null
                          }
                        })
                        .filter(ingredient => ingredient !== null)
                    }
                    if (obj.name) {
                      obj.id = slugify(obj.name, {
                        replacement: '-',
                        lower: true,
                      })
                      tacos.push(obj)
                    }
                  } catch (e) {
                    console.log(
                      `5: Could not parse file ${filePath}/meta.json`,
                      e
                    )
                  }
                }
              })
              // console.log('6. returning tacos', tacos)
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
