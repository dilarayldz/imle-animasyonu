const curso = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY

    cursor.style.right = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

    function mouseStopped() {
        cursor.style.display = 'none';
    }

    clearInterval(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = 'none';
});