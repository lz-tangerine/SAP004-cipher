function loadPage() {
    document.getElementById("videoSkull").addEventListener("click", usuario);
}

function usuario(){
    let user = prompt("D1GIT3 S3U USU4R1O").toUpperCase()
    localStorage.setItem("user", user)
    window.location.href = "boasVindas.html"
}

loadPage()
