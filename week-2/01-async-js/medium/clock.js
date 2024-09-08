function terminalTime() {
  setInterval(() => {
    console.clear();
    let CurrentTime = new Date();
    let hours = CurrentTime.getHours();
    let minute = CurrentTime.getMinutes();
    let second = CurrentTime.getSeconds();
    let ampm = CurrentTime.getHours() >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    console.log(`The time is right now ${hours}:${minute}:${second} ${ampm}`);
  }, 1000);
}

terminalTime();