let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getmemebtn = document.getElementById("get-meme-btn");
//API URL
let url = "https://meme-api.com/gimme/";
//Array of subredits of your choice
let subreddits = ["catmemes","wholsomemes","dogmemes","me_irl"];

//Functino to get random meme
let getMeme = () => {
    //choose the random subredit from the subredits array
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    
    //fetch data from the api
    fetch(url+randomSubreddit)
    .then((res) => res.json())
    .then((data) =>{

        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title
        };
        memeImg.src = data.url
    })
}

getmemebtn.addEventListener("click", getMeme)
window.addEventListener("load",getMeme)