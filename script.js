function getCurrentDate() {
    let date;
    let dateTime;
  
    date = new Date;
    dateTime = date.toISOString().split("T")[0];

    document.querySelector(".footer").textContent = ("Copyright" + " " + " "+ dateTime);
}

getCurrentDate();