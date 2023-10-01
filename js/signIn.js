const form = document.querySelector(".form")
const users = JSON.parse(localStorage.getItem("users"))
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const validateCredentials = users.some(user=>user.email === email&&user.password === password);
    if(!validateCredentials){
        alert("Email o password incorrectas!")
        return
    }
    window.location.pathname="/pages/tableUsers.html"
})
