let cp = require('node:child_process')

let child = cp.spawn('ls', {shell: 'powershell'})
child.stdout.on("data", (data) => {
    console.log(`${data}`)
})

child.stderr.on("data", (err) =>{
    console.log(`${err}`)
})

let pytest = cp.spawn('python hello.py', {shell: 'powershell'})
pytest.stdout.on("data", (data) => {
    console.log(`${data}`)
})


let new_dir = cp.spawn('mkdir test', {shell: 'powershell'})
new_dir.on("exit", () => {
    console.log("Copy Finished")
})
