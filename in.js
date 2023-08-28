let images = ["img/love4.jpg", "img/love2.jpg", "img/love3.jpg", "img/love5.jpg", "img/love7.jpg", "img/love8.jpg", "img/love10.jpg"]
let index = 0;
const imgElement = document.querySelector ("img")

function on () {
    imgElement.src = images[index];
    index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(on, 5000);
}

let ab = document.querySelector("form")
ab.addEventListener ("submit", ton)
function ton (e) {
     e.preventDefault()
     let name1 = ab.f1.value
     let name2 =  ab.f2.value 

     if (name1.length < 1){
         alert("Enter name")
         return
     }
     else if (name2.length < 1){
         alert("Enter partner's name")
         return
     }

     name1 = name1.toLowerCase()
     name2 = name2.toLowerCase()

     name1 = name1.split("")
     name2 = name2.split ("")

     for (let i= 0; i < name1.length; i++){
        for (let j = 0; j < name2.length; j++){
            if (name1[i] === name2[j]){
                delete name1[i]
                delete name2[j]
                break
            }
        }
     }

     let count = 0
     for (let i=0; i < name1.length; i++) {
        if (name1[i]) {
            count ++
        }
     }
     for (let j=0; j < name2.length; j++) {
        if (name2[j]) {
            count ++
        }
     }
    if (count === 0) {
        alert("Not Compatible")
        return
    }
    if (count > 6) {
        count = count % 6
        if (count === 0){
            count = 6
        }
    }

    if (count === 1) {
        alert("Friends")
    }
    else if (count === 2) {
        alert("Lovers")
    }
    else if (count === 3) {
        alert("Admirer")
    }
    else if (count === 4) {
        alert("Married")
    }
    else if (count === 5) {
        alert("Enemy")
    }
    else if (count === 6) {
        alert("Soulmate")
    }
}