const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

  

function alerta() {
    let nombre= document.getElementById("nombre").value
    localStorage.setItem("nombreUsuario",nombre||"Mercedes")
    alert("logrado")
    location.href="/index.html"
}


