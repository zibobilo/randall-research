const DistCalc = (lat1, lng1, lat2, lng2) => {

  var earthRadiusKm = 6371

  const degreesToRadians = (degrees) => degrees * Math.PI / 180

  const dLat = degreesToRadians(lat2 - lat1)
  const dLng = degreesToRadians(lng2 - lng1)


  lat1 = degreesToRadians(lat1)
  lat2 = degreesToRadians(lat2)

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return Number((earthRadiusKm * c))
}

export default DistCalc

