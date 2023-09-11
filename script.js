function Dark(){
    document.querySelector('body').style.color = 'white'
    document.querySelector('body').style.backgroundColor = 'black'
    document.getElementById('menu').style.backgroundColor = 'black'
}
//-------------------------random--------------------------------------//
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
        result = characters.charAt(Math.floor(Math.random() * charactersLength)) + result;
    }

    return result;
}
let ans = generateString(6)
document.querySelector('h1').innerHTML = ans
 




 
function change(){
    
let inVal = document.getElementById('cap').value
let capVal = document.getElementById('enter').innerHTML
if(inVal && capVal){
   
    document.getElementById('check').style.display = 'block'
}
else{
    document.getElementById('ll').innerHTML = "--Wrong Capcha--"
}

}
function cap(){
    document.getElementById('ll').style.display = 'none'
    document.getElementById('check').style.display = 'none'
}

