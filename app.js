
// var usersData = []

// var registerBtn = document.getElementById("register");
// registerBtn && registerBtn.addEventListener("click", function () {

//     var rName = document.getElementById("registerName")
//     var rEmail = document.getElementById("registerEmail")
//     var rPassword = document.getElementById("registerPass")



//     var userObj = {
//         name: rName.value,
//         email: rEmail.value,
//         password: rPassword.value
//     }
//     usersData.push(userObj)


//     rName.value = ""
//     rEmail.value = ""
//     rPassword.value = ""

//     console.log(usersData);
//     localStorage.setItem("users", JSON.stringify(usersData))
//     var fetchingData = JSON.parse(localStorage.getItem("users"));
//     fetchingData.push(userObj)


//     // location.href = "login.html"


// })


// var loginBtn = document.getElementById("login")


// loginBtn && loginBtn.addEventListener("click", function (event) {


//     var loginEmail = document.getElementById("loginEmail")
//     var loginPass = document.getElementById("loginPassword")

//     var users = JSON.parse(localStorage.getItem("users"));


//     for (var user of users) {
//         if (user.email == loginEmail.value) {

//             if (user.password == loginPass.value) {
//                 console.log("login successfully");

//             }
//             else {
//                 console.log("email is ok wrong password");

//             }

//         }
//         else {
//           if(loginPass.value == user.password){
//             console.log("password is ok email is wrong");
            
//           }

//         }

//     }
// })



var id = setInterval(function(){
    console.log("hello");
    
},1000)

console.log(id);


setTimeout(function(){
   clearInterval(id)
    
},5000)