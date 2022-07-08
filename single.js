var h1= document.querySelector("h1")
const h2= document.querySelector(".secondreply h2")
var x= Math.random()
x= Math.round(((x*100)+1))

function welcome(){
    setTimeout(() => {
        let UserName= prompt("What is Your name?")
        alert("Hello" + " " +UserName + "," + "Welcome to Singleton Island , we sincerely hope you find the right one." )
    }, 1000);

    if(UserName === " "){
        alert ("Nevermind")
    }
}

function getCurrentDate() {
    let date;
    let dateTime;
  
    date = new Date;
    dateTime = date.toISOString().split("T")[0];

    document.querySelector(".footer").textContent = ("Copyright" + " " + " "+ dateTime);
}

getCurrentDate();

function calculate(){
    const UserName= document.querySelector("#username").value
    const crush= document.querySelector("#crush").value
    if(x >= 95){
         h1.innerHTML= x+"%"
          h2.innerHTML = "you" +" "+ "and "+ " "+ crush+ " "+" are life partners, you should never leave them" 
    }else if(x >=70 && x<95){
        h1.innerHTML= x+"%"
        h2.innerHTML ="you" +" "+ "and "+ " " + crush+ " "+" are not bad together" 
    }else if(x>=50 && x<70){
        h1.innerHTML= x+"%"
        h2.innerHTML =crush +"go cheat, but you fit manage am" 
    }else if(x>20 && x<50 ){
        h1.innerHTML= x+"%"
        h2.innerHTML ="You dey find trouble" 
    }else if(x<20){
        h1.innerHTML= x+"%"
       h2.innerHTML ="Leeemaoooooo" 
    }

}
function reload(){
    window.location.reload();
} 






