const fs = require('fs')


let paths = {
  read: './distances_calculated/EdistancestestData.json'
  // read: './distances_calculated/EdistancesFULL.json'
}

fs.readFile(paths.read, 'ascii', (err, res) => {
    if (err) return "ERROR ON READ FILE"
    console.time("time to parse:")
    JSON.parse(res).distances
    console.timeEnd("time to parse:")

  }
)