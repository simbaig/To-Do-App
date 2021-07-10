let input = prompt("What would you like to do?");
const todos = ["collect chicken eggs", "clean litter box"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*****************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]} `);
    }
    console.log("*****************");
  } else if (input === "new") {
    const newTodo = prompt("Okay, Enter a new todo");
    todos.push(newTodo);
    console.log(`${newTodo} Added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Okay, Enter the Index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Okay deleted ${deleted[0]}`);
    } else {
      console.log("Unknown Index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
