let playlist = ['Thriller','All for one','time to pretend','i put a spell on you','call me','jolene','Merry go round','fast car','superstition','you dont own me','heroes','paper planes'];

let newPlaylist = [];
var list = document.getElementById("list");
var button = document.getElementById("playButton")





// this will add the list items when the button is pushed.. but it does it every time you click so we gotta fix that lol

button.addEventListener('click', 
function clickPlaylist (){
    //this adds the list items into the ordered list
    playlist.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });
})
