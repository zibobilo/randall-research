const v8 = require('v8')
const THS = v8.getHeapStatistics().total_available_size
let gb = (THS/1024/1024/1024).toFixed(2)
console.log(gb)