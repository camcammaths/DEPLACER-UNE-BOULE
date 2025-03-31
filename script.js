const boule = document.getElementById("boule");

document.addEventListener("mousemove", (event) => {
    boule.style.left = event.clientX + "px";
    boule.style.top = event.clientY + "px";
});
