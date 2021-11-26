let myArray = [" les gars", " les filles", " la classe", " tout le monde", " world"];
console.log(myArray)
document.getElementById('p1').innerHTML += myArray[2];
myArray.splice(2, 5);
console.log(myArray);