window.addEventListener("load", function () {
    const el = document.getElementById("ch-cpy-content");
    const string = "学生エンジニア、集まれ。".split("");
    const speed = 100;
    setTimeout(() => {
        string.forEach((char, index) => {
            setTimeout(() => {
                el.textContent += char;
            }, speed * index);
        });
    }, 2000);
});