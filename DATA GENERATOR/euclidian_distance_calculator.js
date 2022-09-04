const fs = require('fs')
console.time("Execution time")
let result = []

let paths = {
  read: '../src/components/Data/testData.json',
  write: './distances_calculated/EdistancestestData.json'
}

// let paths = {
//   read: '../src/components/Data/clientsFULL.json',
//   write: './distances_calculated/EdistancesFULL.json'
// }




function distBetweenCoords(lat1, lng1, lat2, lng2) {

  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180
  }

  var earthRadiusKm = 6371

  var dLat = degreesToRadians(lat2 - lat1)
  var dLng = degreesToRadians(lng2 - lng1)


  lat1 = degreesToRadians(lat1)
  lat2 = degreesToRadians(lat2)

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2)

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return Number((earthRadiusKm * c))
}

const append = (string) => fs.appendFileSync(paths.write, string)

fs.readFile(paths.read, 'ascii',
  function (err, data) {
    if (err) return "ERROR ON READ FILE"
    let loc = JSON.parse(data).locations

    append('{ "distances" : [')

    for (let i = 0; i < loc.length; i++) {

      result.push([])

      for (let j = i + 1; j < loc.length; j++) {
        const distance = distBetweenCoords(loc[i].lat, loc[i].lng, loc[j].lat, loc[j].lng)
        result[i].push(distance)
      }

      append(JSON.stringify(result[i]))

      if(i+1 !== loc.length) append(",")
    }
    append(']}')

    console.timeEnd("Execution time")
  }
)