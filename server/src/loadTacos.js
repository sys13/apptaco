import https from 'https'
import fs from 'fs'
import request from 'request'
import extract from 'extract-zip'
import path from 'path'

var download = function(uri, filename, callback) {
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

  https.get(options, res => {
    var body = ''
    res.on('data', function(d) {
      body += d
    })
    res.on('end', function() {
      // Data reception is done, do whatever with it!
      var parsed = JSON.parse(body)

      var updated_date = new Date(parsed.updated_at)

      console.log('2. latest update:' + updated_date)

      if (fs.existsSync('tacos.zip')) {
        const stats = fs.statSync('tacos.zip')
        var mtime = stats.mtime
        console.log('3. tacos.zip date: ' + mtime)
      }

      if (mtime == null || updated_date > mtime) {
        console.log('b.1need to update because' + updated_date + '>' + mtime)

        download(
          'https://github.com/erikwennerberg/apptacos/archive/master.zip',
          'tacos.zip',
          function() {
            console.log('b2 download done')
            console.log('b3 unzipping tacos.zip to ' + process.cwd())
            extract('tacos.zip', { dir: process.cwd() }, function(err) {
              console.log(err)
            })
          }
        )
      } else {
        console.log('4.no need to update')
        var tacos = []
        var tacoDir = 'apptacos-master'
        fs.readdir(tacoDir, function(err, files) {
          if (err) {
            console.error('Could not list the directory.', err)
            process.exit(1)
          }
          console.log('starting for each')
          files.forEach(function(file, index) {
            var filePath = path.join(tacoDir, file)
            const stats = fs.statSync(filePath)
            //level 1 we are in a taco now
            if (stats.isDirectory()) {
              console.log("5. '%s' is a directory.", filePath)
              var obj = JSON.parse(
                fs.readFileSync(filePath + '/meta.json', 'utf8')
              )
              console.log('5: ' + JSON.stringify(obj))
              tacos.push(JSON.stringify(obj))
            }
          })
          console.log('6. returning tacos' + tacos)
          return tacos
        })
      }
    })
  })

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

  // return sampleList
}
