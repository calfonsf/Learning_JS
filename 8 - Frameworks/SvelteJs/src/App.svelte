<script>
    let tasks = [];

    const handleSubmit = (event) => {
        event.preventDefault();
        const newtask = event.target.newTask.value;

        if (newtask) {
            tasks.push(newtask)
            tasks = tasks
        } else {
            console.log("Empty Task");
        }
    };
</script>

<main>
    <h1>TODO List</h1>
    <form on:submit={handleSubmit}>
        <input type="text" placeholder="New Task" name="newTask" />
        <input type="submit" />
    </form>

    <h2>Tasks List</h2>
    <ul>
        {#each tasks as task}
            <li>{task}</li>
        {/each}
    </ul>
</main>
