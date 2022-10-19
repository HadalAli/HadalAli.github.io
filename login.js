let email = document.getElementById('email')
let password = document.getElementById('password')
let emailDaftar = document.getElementById('username-daftar')
let passwordDaftar = document.getElementById('password-daftar')

document.getElementById('form-signin').addEventListener('button', (event) => {
  let emailValue = email.value
  let passwordValue = password.value
  event.preventDefault()

  if (localStorage.getItem('passwordTersimpan') == passwordValue && localStorage.getItem('usernameTersimpan') == usernameValue) {
    window.location.href = "index.html"
  } else {
    alert("Password atau username salah!")
    password.value = ""
    username.value = ""
  }
})

