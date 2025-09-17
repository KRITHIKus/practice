document.getElementById("loadBtn").addEventListener("click", loadPosts);

function loadPosts() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "u.json", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const posts = JSON.parse(xhr.responseText);
      
      displayPosts(posts);
    }
  };
    
  xhr.send();
}

function displayPosts(posts) {
  const container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <div class="title">${post.id}</div>
      <p class="title">${post.title}</p>
      <p>${post.body}</p>
    `;
    container.appendChild(div);
  });
}
