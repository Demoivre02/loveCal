var h1= document.querySelector("h1")
const h2= document.querySelector(".secondreply h2")
const UserName= document.querySelector("#username").value
const partner= document.querySelector("#partner").value
var x= Math.random()
x= Math.round(((x*100)+1))

function welcome(){
    setTimeout(() => {
        let UserName= prompt("What is Your name?")
        alert("Hello" + " " +UserName + "," + "Welcome to takengleton island, we hope your relationship fails, as we calculate your breakup percentage." )
    }, 1000);

    if(UserName == " "){
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

function calculate(){
    if(x >= 95){
         h1.innerHTML= x+"%"
          h2.innerHTML = "you" +" "+ "and "+ " "+ partner+ " "+" are compatible" 
    }else if(x >=70 && x<95){
        h1.innerHTML= x+"%"
        h2.innerHTML ="you" +" "+ "and "+ " " + partner+ " "+" love each other like kanye loves kanye." 
    }else if(x>=50 && x<70){
        h1.innerHTML= x+"%"
        h2.innerHTML = "Both of you go together like oil and water" 
    }else if(x>20 && x<50 ){
        h1.innerHTML= x+"%"
        h2.innerHTML ="Break up ASAP!!!" 
    }else if(x<20){
        h1.innerHTML= x+"%"
       h2.innerHTML ="Leeemaooo" 
    }

}

function reload(){
    window.location.reload();
} 