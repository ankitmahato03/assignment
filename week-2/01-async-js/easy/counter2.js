function terminalTime() {
  setTimeout(() => {
    console.clear();
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    console.log(`The terminal time is ${hours}:${minute}:${second}`);
    terminalTime();
  }, 1000);
}

terminalTime();