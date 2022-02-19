



document.getElementById('login-submit').addEventListener('click', function () {

  // get user Email
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  // console.log(userEmail);


  // get user password

  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;

  // check email password
  if (userEmail == 'rabeya1012000@gamil.com' && userPassword == 'secret') {
    window.location.href = 'banking.html';

  }

});

