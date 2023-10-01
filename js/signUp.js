const users = JSON.parse(localStorage.getItem("users"))
const form = document.querySelector(".form")
const regexName = new RegExp(/^[A-Za-z\s']+$/);
const regexEmail = new RegExp( /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/);
const regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
const regexIdColombia = new RegExp(/^\d{7,10}$/);


form.addEventListener("submit",(e)=>{
    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmpassword").value;
    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    const address = document.querySelector("#address").value;
    const id = document.querySelector("#id").value
    const inputs = document.querySelectorAll(".input")
    e.preventDefault();
    if (!regexName.test(firstName) || !regexName.test(lastName)) {
      form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hola!!</strong>Los campos de nombre y apellido deben contener solo letras, espacios y apóstrofes.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
        return
      }
      
      if (!regexEmail.test(email)) {
        form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hola!!</strong>Por favor, ingrese una dirección de correo electrónico válida.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
        return
      }
      
      if (!regexPassword.test(password)) {
       form.innerHTML += ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hola!!</strong>La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
        return
    }
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2099) {
      form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hola!!</strong>La fecha de nacimiento no es válida.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
      return
    }
      
    if(!regexIdColombia.test(id)){
      form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hola!!</strong>Identifacion no valida debe tener de 7 a 10 numeros
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
      return
    }
      
     
      
      if (address.length === 0) {
        form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hola!!</strong>El campo de dirección no puede estar vacío.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
        return
      }
      const emailFound = users.some(user=>user.email === email);
      if(emailFound){
        form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hola!!</strong>Email ingresado ya esta registrado en otra cuenta
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        alert("")
        return
      }
      const idFound = users.some(user=>user.id === id);
      if(idFound){
        form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hola!!</strong>Id ya esta siendo ocupado por otra cuenta
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        return
      }
      if (password !== confirmPassword) {
        form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hola!!</strong>Las contraseñas no coinciden.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        return
      }
      const newUsers = {
        id: parseInt(id),
        firstName: firstName,
        lastName: lastName,
        birthday: {
          day: parseInt(day),
          month: parseInt(month),
          year: parseInt(year),
        },
        email: email,
        address: address,
        password: password,
      };
      users.push(newUsers);
      localStorage.setItem("users", JSON.stringify(users))
      form.innerHTML +=` <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hola!!</strong>User Registrado
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
      inputs.forEach(input => {
        input.value = ""
      });

})
