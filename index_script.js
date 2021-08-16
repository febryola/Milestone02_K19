let fullname = localStorage.getItem("user")
username = fullname.split(" ")[0]

document.getElementById("username").innerHTML = username