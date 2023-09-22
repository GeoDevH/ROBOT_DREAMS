document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    const userPostsList = document.getElementById("user-posts");
    let usersData = null;

    function clearElement(element) {
        element.innerHTML = "";
    }

    function createUserCard(user) {
        const listItem = document.createElement("div");
        listItem.classList.add("general-card");
        listItem.innerHTML = `
            <div class="user-name">${user.name}</div>
            <div class="user-email">Email: ${user.email}</div>
            <div class="user-gender">Gender: ${user.gender}</div>
            <div class="user-status">Status: ${user.status}</div>
        `;
        return listItem;
    }

    function createUserPostCard(post) {
        const listItem = document.createElement("div");
        listItem.classList.add("post-card");
        listItem.innerHTML = `
            <div class='post-title'>${post.title}</div> 
            <div class='post-body'>${post.body}</div>
        `;
        return listItem;
    }

    function createNoPostsMessage() {
        const noPostsMessage = document.createElement("div");
        noPostsMessage.innerHTML = `<div class='post-empty'>This user has no posts :(</div>`;
        return noPostsMessage;
    }

    function createBackButton() {
        const backButton = document.createElement("button");
        backButton.classList.add("back-btn");
        backButton.textContent = "Back";
        backButton.addEventListener("click", () => {
            document.querySelector("h1").textContent = "User list";
            userPostsList.innerHTML = "";
            displayUserList();
        });
        return backButton;
    }

    function displayUserList() {
        clearElement(userList);
        usersData.forEach(user => {
            const listItem = createUserCard(user);
            listItem.addEventListener("click", () => {
                document.querySelector("h1").textContent = "User post";
                clearElement(userList);
                showUserPosts(user.id);
            });
            userList.appendChild(listItem);
        });
    }

    function showUserPosts(userId) {
        fetch(`https://gorest.co.in/public-api/posts?user_id=${userId}`)
            .then(response => response.json())
            .then(data => {
                clearElement(userPostsList);
                if (data.data.length === 0) {
                    const noPostsMessage = createNoPostsMessage();
                    userPostsList.appendChild(noPostsMessage);
                    userPostsList.appendChild(createBackButton());
                } else {
                    const userPosts = data.data.map(post => ({
                        title: post.title,
                        body: post.body
                    }));
                    clearElement(userPostsList);
                    userPosts.forEach(post => {
                        const listItem = createUserPostCard(post);
                        userPostsList.appendChild(listItem);
                    });
                    userPostsList.appendChild(createBackButton());
                }
            })
            .catch(error => console.error("Error getting user list:", error));
    }

    fetch("https://gorest.co.in/public-api/users")
        .then(response => response.json())
        .then(data => {
            usersData = data.data;
            displayUserList();
        })
        .catch(error => console.error("Error getting user list:", error));
});