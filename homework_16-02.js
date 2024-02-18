fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log("Placeholder API: ", json));

// 2. Ein GET auf deine ToDo Api, die alle todos ausgibt
fetch("http://localhost:3000/v1/todos/all")
  .then((response) => response.json())
  .then((json) => console.log("ToDo API: ", json));

// 3. Ein GET auf deine ToDo Api, die alle todos zu einer userId ausgibt
const userId = 1; // userId angeben
fetch(`http://localhost:3000/v1/todos/byuserid?userId=${userId}`)
  .then((response) => response.json())
  .then((json) =>
    console.log(`Response von der ToDo API (Todos für userId ${userId}):`, json)
  );
