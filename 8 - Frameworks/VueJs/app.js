const vm = Vue.createApp({
    data() {
        return {
            taskList: [],
            newTask: ''
        };
    },
    methods: {
        renderList() {
            map = this.taskList.map((element) => {
                return element
            })
        },
        handleSubmit(){
            if (this.newTask){
                this.taskList.push(this.newTask)
            }
            else{
                console.log('Empty Task')
            }
        },
    },
}).mount("#app");