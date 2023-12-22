const fs = require('node:fs/promises')
const { text } = require('stream/consumers')

fs.readFile('./os-info.js', 'utf8')
.then(text => {
    console.log('\n------ os info file ---------')
    console.log(text)
})

fs.readdir('.')
.then((dir)=>{
    console.log(dir)
})

