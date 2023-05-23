function show(page) {

    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
        .then(response => response.json())
        .then(posts => {
            let data = {}

            const content = document.querySelector(".content")

            posts.forEach(post => {

                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => {
                        data.title = post.title
                        data.body = post.body
                        users.forEach(user => {
                            if(post.userId === user.id) {
                                data.userName = user.name
                            }
                        })

                        const container = document.createElement("div");
                        container.setAttribute("class", "container");
                        const userName = document.createElement("p");
                        userName.setAttribute("class", "user-name");
                        userName.innerText = data.userName
                        const postTitle = document.createElement("p");
                        postTitle.setAttribute("class", "post-title");
                        postTitle.innerText = data.title
                        const postContent = document.createElement("div");
                        postContent.setAttribute("class", "post-content");
                        postContent.innerText = data.body                    

                        container.appendChild(userName)
                        container.appendChild(postTitle)
                        container.appendChild(postContent)
                        //----------------

                        //comment section
                        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                            .then(response => response.json())
                            .then(comments => {
                                const commentNumber = document.createElement("a")
                                commentNumber.setAttribute("class", `comment-${post.id}`)
                                commentNumber.innerText = `${comments.length} comments`
                                container.appendChild(commentNumber)

                                const commentContainer = document.createElement("div")
                                commentContainer.setAttribute("class", `comment-${post.id}`)
                                commentContainer.style.display = "none"

                                comments.forEach(comment => {
                                    const commentSection = document.createElement("div");
                                    commentSection.setAttribute("class", "post-comment");
                                    const commentUserName = document.createElement("p");
                                    commentUserName.setAttribute("class", "user-post-comment");
                                    commentUserName.innerText = `${comment.email}`
                                    const commentBody = document.createElement("p")
                                    commentBody.innerText = comment.body
                                    
                                    commentSection.appendChild(commentUserName)
                                    commentSection.appendChild(commentBody)

                                    commentContainer.appendChild(commentSection)

                                    container.appendChild(commentContainer)
                                })

                                const extendComment = document.querySelector(`.comment-${post.id}`)
                                extendComment.addEventListener("click", function(){
                                    let id = extendComment.getAttribute("class")
                                    const target = document.querySelectorAll(`.${id}`)

                                    if(target[1].style.display == "block") {
                                        target[1].style.display = "none"
                                    } else if (target[1].style.display == "none") {
                                        target[1].style.display = "block"
                                    }

                                })
                            })

                        content.appendChild(container)

                    })
            });
            
        })
}

let page = 1
show(page)

//button "more"
const more = document.querySelector("#more") 

more.addEventListener("click", function (){
    ++page
    show(page)
})