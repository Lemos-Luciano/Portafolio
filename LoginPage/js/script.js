const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $SignIn = document.querySelector('.sign-in'),
      $SignUp = document.querySelector('.sign-up');


document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $SignIn.classList.toggle('active')
        $SignUp.classList.toggle('active')
    }
});