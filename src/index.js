document.addEventListener('DOMContentLoaded', () => {
    getDogs();
})

const url = 'http://localhost:3000/pups'
const dogBar = document.getElementById('dog-bar')
const dogInfo = document.getElementById('dog-info')
const dogPic = document.createElement('img')
const showName = document.createElement('h2')
const goodButton = document.createElement('button')
const goodFilter = document.getElementById("good-dog-filter")
const dogCollection = document.getElementsByClassName('false')
goodButton.addEventListener('click', toggleGoodBoy)
goodFilter.addEventListener('click', () => {
    if (goodFilter.innerText === 'Filter good dogs: OFF') {
        goodFilter.innerText = 'Filter good dogs: ON';
        for (let i = 0; i < dogCollection.length; i++) {
            dogCollection[i].style.display = "none";
        }
    }
    else {goodFilter.innerText = 'Filter good dogs: OFF';
        for (let i = 0; i < dogCollection.length; i++) {
            dogCollection[i].style.display = "flex";
        }
    } 
})
dogInfo.append(showName, dogPic, goodButton)


function renderDogs(dog) {
    let span = document.createElement('span');
    span.innerText = dog.name;
    span.setAttribute('dog-id', dog.id)
    span.className = dog.isGoodDog
    span.addEventListener('click', () => {
        dogPic.src = dog.image
        showName.innertext = dog.name
        if(dog.isGoodDog == true) {
            goodButton.innerText = 'Good Boy'
        }
        else {goodButton.innerText = 'Bad Boy'}
    })
    dogBar.append(span);
}

function getDogs() {
    fetch(url)
    .then(res => res.json())
    .then (dog => dog.forEach(renderDogs))
}

function toggleGoodBoy(e) {
   if (e.target.innerText === 'Good Boy') {
    e.target.innerText = 'Bad Boy'
   }
   else {e.target.innerText = 'Good Boy'}
}


// function updateGoodBoy(dogObject) {
//     fetch (`http://localhost:3000/${dogObject.id}`, {
//         method : 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(dogObject)
//           })
//         .then(res => res.json())
//         .then()
