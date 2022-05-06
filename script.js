let playlist = ['Thriller','All for one','Time to pretend','I put a spell on you','Call me','Jolene','Merry go round','Fast car','Superstition','You dont own me','Heroes','Paper planes'];

let newPlaylist = [];
const list = document.getElementById("list");
const displayButton = document.getElementById("playButton");
const submitButton = document.getElementById("submitButton");






// this will add the list items when the button is pushed.. but it does it every time you click so we gotta fix that lol

displayButton.addEventListener('click', 
function clickPlaylist (){
    //this adds the list items into the ordered list
    playlist.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });
      displayButton.removeEventListener("click", clickPlaylist);
})


submitButton.addEventListener('click',
function addPlaylist(){
  let newSong = String(document.getElementById('newSong').value);
  console.log(newSong,typeof newSong);
  let li = document.createElement("li");
  li.innerText = newSong;
  list.appendChild(li);
}
)