// const velirano = new Promise((resolve, reject) => {
//     resolve("Miami");        
// });

// velirano.then((result) => {
//     return new Promise((resolve) => {
//         resolve("first")
//     });
// }).then((r) => {
//     console.log(r);
// });

// console.log("caa");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response.json()))
//       .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            console.log(`${element.id} : ${element.title}`)
        });
    });