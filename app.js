
var usersData = []

var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click",function(){

    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPassword = document.getElementById("registerPass")



    var userObj = {
        name:rName.value,
        email:rEmail.value,
        password:rPassword.value
    }
    usersData.push(userObj)


    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""

    localStorage.setItem("users",JSON.stringify(usersData))
    

    window.location.href = "login.html"
    
    
})


var loginBtn = document.getElementById("login")


loginBtn.addEventListener("click",function(event){

    event.preventDefault()
    var loginEmail = document.getElementById("registerEmail")
    var loginPass = document.getElementById("registerPassword")

    console.log(loginEmail.value,loginPass.value);
    
})
