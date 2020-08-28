console.log('%c HI', 'color: firebrick')

//start of challenge 1

function renderDogs(data){
    //itterate
    for (const pic of data){
        let dogContainer = document.getElementById('dog-image-container')
        let dog = document.createElement('img')
        dog.setAttribute('src', `${pic}`)
        dog.setAttribute('alt', 'photo of a dog')
        dog.setAttribute('style', 'center-align')
        dogContainer.append(dog)
    }}

function loadImages(){
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        let response = object.message
        renderDogs(response)
    })}


// start of challenge 2 


function renderBreeds(breedData){
    
for(const b in breedData){
    let dogList = document.getElementById('dog-breeds')
    let breed = document.createElement('div')

    breed.setAttribute('value', `<li>${b}</li>`) 
    dogList.append(breed)
}
} // enbd of render Breeds 


function loadBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            let breedList = object.message
            console.log(object.message)
            renderBreeds(breedList)
        })
    } //end of load breeds 







loadBreeds()
loadImages()