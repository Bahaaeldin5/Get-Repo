// Get any Repo From github Api by UserName

let inputEl = document.querySelector(".get-repo input");
let btnEl = document.querySelector(".get-repo .get-btn");
let showDataDiv = document.querySelector(".show-data");

btnEl.onclick = function () {
    getRepo();
}

function getRepo() {
    if(inputEl.value === ""){
        showDataDiv.innerHTML = "<span>Please Write UserName</span>";
    }else {
        showDataDiv.innerHTML = "";
        fetch(`https://api.github.com/users/${inputEl.value}/repos`)
        .then(response => {
            return response.json();
        }).then (allData => {
            allData.forEach(data => {
                console.log(data.name);
                let dataNameDiv = document.createElement("div");
                let repoName = document.createTextNode(data.name);
                dataNameDiv.appendChild(repoName);
                
                
                let theUrl = document.createElement("a");
                let urlText = document.createTextNode("visit");
                theUrl.appendChild(urlText);
                theUrl.href = `https://github.com/${inputEl.value}/${data.name}`;
                theUrl.setAttribute("target", "_blank");
                dataNameDiv.appendChild(theUrl);
                
                let starsRepo = document.createElement("span");
                let starsText = document.createTextNode(`stars ${data.stargazers_count}`);
                starsRepo.appendChild(starsText);
                dataNameDiv.appendChild(starsRepo);

                showDataDiv.appendChild(dataNameDiv);
            });
        })
    }
}

// Get Posts From Api

// let inputEl = document.querySelector(".get-repo input");
// let btnEl = document.querySelector(".get-repo .get-btn2");
// let showDataDiv = document.querySelector(".show-data");

// btnEl.onclick = function () {
//     getRepo();
// }

// function getRepo() {
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((result) => {
//         if(result.status === 200){
//             showDataDiv.innerHTML = "";
//             return result.json();
//         }else{
//             showDataDiv.innerHTML = "<span>Please Check Your Link</span>";
//         }
//     }).then((allData) => {
//         allData.forEach(data => {
//             let contentDiv = document.createElement("div");
//             contentDiv.classList.add("content-posts");

//             let postNum = document.createElement("span");
//             let postNumText = document.createTextNode(`ID : ${data.id}`);
//             postNum.appendChild(postNumText);

//             let userId = document.createElement("span");
//             let userIdText = document.createTextNode(`User ID : ${data.userId}`);
//             userId.appendChild(userIdText);
            
//             let title = document.createElement("span");
//             let titleText = document.createTextNode(`Title : ${data.title}`);
//             title.appendChild(titleText);

//             let body = document.createElement("p");
//             let bodyText = document.createTextNode(`Content : ${data.body}`);
//             body.appendChild(bodyText);

//             contentDiv.appendChild(postNum);
//             contentDiv.appendChild(userId);
//             contentDiv.appendChild(title);
//             contentDiv.appendChild(body);

//             showDataDiv.appendChild(contentDiv);
//         });
//     })
// }