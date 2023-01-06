// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

  
  console.log(writeCards(names,"surprise"))
function writeCards(names,event){  
    let name = [];
    for (let i = 0; i < names.length; i++) {
        name.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }   
    return name
}

countDown(4)
function countDown(n){
    for (let i = n; i >= 0; i--) {
        console.log(i);
      }
}