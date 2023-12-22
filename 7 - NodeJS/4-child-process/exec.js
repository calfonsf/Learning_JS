const cp = require('child_process')

let child = cp.exec('dir', {shell: 'powershell'}, (error, stdout, stderr)=>{
    if(stdout)
    {
        console.log(`${stdout}`)
    }
    if(stderr){
        console.log(`${stderr}`)
    }
})