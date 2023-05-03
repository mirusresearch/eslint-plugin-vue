import { storeToRefs } from 'pinia'
let bar = storeToRefs(foo)
const { x, y = 42 } = bar
console.log(x.value)
console.log(y.value)
