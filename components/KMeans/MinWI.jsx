// Get Minmimum value with index

// result format { value: Number, index: Number }
const MinWI = (arr): Number[] => {
  let min = Infinity
  let index = 0
  for (let i = 0; i < arr.length; i++ ) {
    if(arr[i] < min) {
      min   = arr[i]
      index = i
    }
  }
  return { value: min, index}
}

export default MinWI