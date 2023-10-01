const users = JSON.parse(localStorage.getItem("users"))
const table = document.querySelector(".content-table")
users.forEach((user,index) => {
   table.innerHTML += `<tr>
   <th scope="row" class="h-25">${index+1}</th>
   <td ><input type="text" value="${user.id}" readonly  class="input-table id"></td>
   <td><input type="text" value="${user.firstName}" readonly class="input-table"></td>
   <td><input type="text" value="${user.lastName}" readonly class="input-table"></td>
   <td ><input type="number" value="${user.birthday.day}" readonly class="input-table input-birthday-day"> / <input type="number" value="${user.birthday.month}" readonly class="input-table input-birthday-month">/<input type="number" value="${user.birthday.year}" readonly class="input-table input-birthday-year"></td>
   <td ><input type="email" value="${user.email}" readonly class="input-table input-lg"></td>
   <td ><input type="text" value="${user.address}" readonly class="input-table input-lg"></td>
   <td ><input type="password" class="input-table" readonly value="${user.password}"> <img width="22px" class="show-password" height="22px" src="https://img.icons8.com/ios-glyphs/32/visible--v1.png" alt="visible--v1"/> </td>
   <td><img id="remove" width="32" height="32" src="https://img.icons8.com/ios-glyphs/32/filled-trash.png" alt="filled-trash"/> <img width="32" height="32" id="edit"  src="https://img.icons8.com/ios-glyphs/32/edit--v1.png" alt="edit--v1"/></td>
   </tr>`;
});

let isEditing = false;
const edit = document.querySelectorAll("#edit");
edit.forEach(icon => {
    icon.addEventListener("click", () => {
        const row = icon.closest("tr");
        const inputs = row.querySelectorAll("input");

        if (!isEditing) {
            icon.src = "https://img.icons8.com/emoji/32/check-mark-emoji.png";
            icon.id = "editFinish";
           

            inputs.forEach(input => {
                input.removeAttribute("readonly");
                input.style.border = "2px solid #0dcaf08c"
                input.style.borderRadius = "5px"
            });

            isEditing = true;
        } else {
          const userIndex = users.findIndex(user => user.id = inputs[0].value )
            if (userIndex !== -1) {
                users[userIndex] = {
                  id: inputs[0].value,
                  firstName:inputs[1].value,
                  lastName: inputs[2].value,
                  birthday: {
                      day: parseInt(inputs[3].value),
                      month: parseInt(inputs[4].value),
                      year: parseInt(inputs[5].value),
                  },
                  email: inputs[6].value,
                  address: inputs[7].value,
                  password: inputs[8].value,
              };
                localStorage.setItem("users", JSON.stringify(users))
            }

            icon.src = "https://img.icons8.com/ios-glyphs/32/edit--v1.png";
            icon.id = "edit";

            inputs.forEach(input => {
                input.setAttribute("readonly", "true");
                input.style.border = "none"
            });

            isEditing = false;
            location.reload();
        }
    });
});

const del = document.querySelectorAll("#remove");
del.forEach(icon =>{
  icon.addEventListener("click", ()=>{
    const id = icon.closest("tr").querySelector(".id").value
    const updateUsers = users.filter(user=>user.id !== parseInt(id));
    console.log("update ",updateUsers)
    localStorage.setItem("users",JSON.stringify(updateUsers));
    location.reload()
  })
})



const showPasswordIcons = document.querySelectorAll(".show-password");
showPasswordIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const passwordInput = icon.previousElementSibling;
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.src= "https://img.icons8.com/ios-glyphs/30/hide.png"
        } else {
            icon.src = "https://img.icons8.com/ios-glyphs/32/visible--v1.png"
            passwordInput.type = "password";
        }
    });
});
