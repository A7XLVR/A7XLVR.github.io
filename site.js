console.log("JavaScript is successfully linked!");


const hours = new Date().getHours() // get the current hour

    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?

    if (isMorning)
    {
        const welcome = document.querySelector("#welcome")
        welcome.textContent = "Good Morning"
    }
    
    else if (isAfternoon)
    {
        const welcome = document.querySelector("#welcome")
        welcome.textContent = "Good Afternoon"
    }

    else if (isEvening)
    {
        const welcome = document.querySelector("#welcome")
        welcome.textContent = "Good Evening"
    }