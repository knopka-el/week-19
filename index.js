const container = document.querySelector(".container");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (responce) {
        return responce.json();
    })
    .then(function (posts) {
        getPosts(posts);
    })
    .catch((error) => console.error("Error fetching posts:", error));

function getPosts(arr) {
    container.innerHTML = "";
    arr.forEach((element) => {
        createTemplate(element);
    });
}

function createTemplate(element) {
    const {
        userId,
        id,
        title,
        body
    } = element;
    const template = `
<h1>${userId}</h1>
<p>id:${id} </p>
<p>title:${title} </p>
<p>body:${body} </p>
`;
    const div = document.createElement("div");
    div.innerHTML = template;
    container.appendChild(div);
}

function createPost(title, body) {
    const postData = {
        title: title,
        body: body,
        userId: 1,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(postData),
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (post) {
            addPostToDOM(post);
        })
        .catch((error) => console.error("Error creating post:", error));
}

function addPostToDOM(post) {
    const {
        title,
        body,
        userId
    } = post;

    const template = `
      <h1>${userId}</h1>
      <p>id:${id} </p>
      <p>title:${title} </p>
      <p>body:${body} </p>
    `;

    const div = document.createElement("div");
    div.innerHTML = template;
    container.appendChild(div);
}