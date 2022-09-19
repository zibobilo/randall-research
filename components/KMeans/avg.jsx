// Get average of any values
const avg = (arr): Number[] => {
  console.time("average time")
  console.log(typeof arr[0])
  let average = arr.reduce((a, b) => (a + b)) / arr.length;

  // let average = Number()

  console.timeEnd("average time")

  return average
}
export default avg