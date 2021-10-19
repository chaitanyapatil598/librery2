let filterKeyValue = {
    
}
if (Object.entries(filterKeyValue).length === 0 && filterKeyValue.constructor === Object) {
    console.log('object empty')
}
let result = Object.entries(filterKeyValue).length

console.log('length of object : ',result)