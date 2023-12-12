let favouritebarList = document.getElementById('favlistitem');
let list = [];
list = JSON.parse(localStorage.getItem('favlistarr'));


//Fetch the  updated list 
function fetching(list) {
    for (var i = 0; i < list.length; i++) {
        loadhero(list[i]);
    }
}


//Loading data of  hero function
async function loadhero(heroid) {
    //GET Request
    const URL = "https://www.superheroapi.com/api.php/3078862828893622/" + heroid.trim();
    console.log(URL);
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data);
    if (data){
        herolistdis(data);
    } 
}
// Display the data of the movie
function herolistdis(hero) {

    let herolistitem = document.createElement('div');
    herolistitem.innerHTML = "";
    herolistitem.innerHTML = `
        <div id="outerbox">
        <div id="innerbox">
        <img src = "${hero.image.url}"  id="favlistimg">
         </div> 
            <H5>${hero.name}</H5>
            <button class="btn btn-primary" id="remove" type="submit" onclick="removeCharacter(this.value)" value=${hero.id}>Remove from favourites</button>
    </div>
        `;
    favouritebarList.appendChild(herolistitem);
}

//Remove the superhero from the list
function removeCharacter(value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            list.splice(i, 1);
        }
    }
    localStorage.setItem('favlistarr', JSON.stringify(list));
    favouritebarList.innerHTML = "";
    fetching(list);
}
fetching(list);