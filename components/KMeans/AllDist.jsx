import DistCalc from './DistCalc'

const AllDist = (data) => {
  let result = []
  for (let i = 0; i < data.length; i++) {
    result.push([])
    for (let j = i; j < data.length; j++) {
      result[i].push(DistCalc(data[i].lat, data[i].lng, data[j].lat, data[j].lng))
    }
  }
  return result
}

export default AllDist