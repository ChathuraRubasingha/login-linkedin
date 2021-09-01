var lbluserName = document.getElementById("lblusername");
var lblpassword = document.getElementById("lblpassword");
var textusername = document.getElementById("username");
var textpassword = document.getElementById("password");
var btnShow = document.getElementById("show");

lbluserName.addEventListener("click", function(){
    lbluserName.classList.add("small");
});

textusername.addEventListener("click", function(){
    lbluserName.classList.add("small");
});

lblpassword.addEventListener("click", function(){
    lblpassword.classList.add("small");
});

textpassword.addEventListener("click", function(){
    lblpassword.classList.add("small");
});

textusername.addEventListener("blur", function(){
    if(textusername.value == ''){
        lbluserName.classList.remove("small");
    }
    else{
        lbluserName.classList.add("small");
    }
    
});
textpassword.addEventListener("blur", function(){
    if(textpassword.value == ''){
        lblpassword.classList.remove("small");
    }
    else{
        lblpassword.classList.add("small");
    }
})

btnShow.addEventListener("click", function(){
    if(textpassword.getAttribute("type") == "password"){
        textpassword.setAttribute("type", "text");
        btnShow.innerText = "Hide";
    }
    else{
        textpassword.setAttribute("type", "password");
        btnShow.innerText = "Show";
    }
});