const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');


const monthNames = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};


const clock = setInterval(
    () => {
        let today = new Date();
        let d = today.getDate();
        let m = today.getMinutes();
        let ss = today.getSeconds();
        let y = today.getFullYear();
        let month = today.getMonth();
        let h = today.getHours();

        day.innerHTML = `${d} ${monthNames[month]} ${y}`;
        hour.textContent = h - 12;
        minute.textContent = m
        second.innerHTML = ss
    }, 100)