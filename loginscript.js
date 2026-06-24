function login(e) {
    e.preventDefault();

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    let emailPattern = /^[a-z]+\.[a-z]+@gmail\.com$/;

    let passPattern = /^[0-9]{8}$/;

    if (!emailPattern.test(user)) {
        error.style.color = "red";
        error.innerText = "Invalid Username";
        return;
    }

    if (!passPattern.test(pass)) {
        error.style.color = "red";
        error.innerText = "Invalid Password";
        return;
    }

    error.style.color = "lightgreen";
    error.innerText = "LogIn Successful!";

      localStorage.setItem("agentName", user);

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 800);
}