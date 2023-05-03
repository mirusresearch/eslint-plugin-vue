import { storeToRefs } from 'pinia'
let bar = storeToRefs(foo)
const { x, y = 42 } = bar
console.log(/*>*/x/*<{"type":"expression","method":"storeToRefs"}*/.value)
console.log(/*>*/y/*<{"type":"expression","method":"storeToRefs"}*/.value)
