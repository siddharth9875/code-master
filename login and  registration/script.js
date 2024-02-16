

let a = document.getElementById("loginbtn");
let b = document.getElementById("registerbtn");
let x = document.getElementById("login");
let y = document.getElementById("register");

let login = () => {
    x.style.left = "4px";
    y.style.right = "-520px";
}
let register = () => {
    x.style.left = "-520px";
    y.style.right = "5px";
}