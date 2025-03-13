// hrere we want the clock to update every single second
function updateClock() {
    const timeElement = document.getElementById("time")
    const dateElement = document.getElementById("date")

    const now = new Date();
    // this is giving me a new date every second and I am 
    // logging that date

    // here I will get 12 or anyother time
    const hours = now.getHours() % 12 || 12;
    
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // This is done because we can have 1 as minutes

    const second= now.getSeconds().toString().padStart(2, '0');

    const ampm = now.getHours() >= 12 ? "PM":"AM";
    // It will give us the local time 

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const dateString = now.toLocaleTimeString(undefined, options);

    timeElement.textContent = `${hours}:${minutes}:${second}:${ampm}`
    dateElement.textContent = dateString;

    console.log(now);
    console.log(minutes)
    console.log(second);
    console.log(ampm);
}

setInterval(updateClock, 1000);
// it means updateClock will be called every one second

updateClock();