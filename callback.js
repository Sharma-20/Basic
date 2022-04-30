setTimeout(() => {
    console.log('Two seconds are up')
},2000)
//callbak function using asynchronous function

const names = ['saumya', 'shagun','Tarun']
const shortNames = names.filter((name1) => {
    return name1.length <= 4
})

const geoCode = (address, callback) => {
   setTimeout(() => {
    const data = {
        latitude: 0,
        longitude: 0
    }
    callback(data)
   },2000)
}
geoCode('Philadelphia', (data) => {
  console.log(data)
})
