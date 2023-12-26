<script setup>
</script>

<template>
    <body>
        <div id="app">
            <h1>TODO List</h1>
            <form @submit.prevent="handleSubmit">
                <input type="text" placeholder="New Task" v-model="newTask" />
                <input type="submit" />
            </form>
            <h2>Tasks List</h2>
            <ul>
                <li v-for="task in taskList">{{ task }}</li>
            </ul>
        </div>
    </body>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            taskList: [],
            newTask: "",
        };
    },
    methods: {
        renderList() {
            map = this.taskList.map((element) => {
                return element;
            });
        },
        handleSubmit() {
            if (this.newTask) {
                this.taskList.push(this.newTask);
            } else {
                console.log("Empty Task");
            }
        },
    },
};
</script>
