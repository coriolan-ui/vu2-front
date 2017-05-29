(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC9wgUtbhmEDZdLmvcI86YjFMyx3YnKDxg",
    authDomain: "ihororlovskyi-db.firebaseapp.com",
    databaseURL: "https://ihororlovskyi-db.firebaseio.com",
    projectId: "ihororlovskyi-db",
    storageBucket: "ihororlovskyi-db.appspot.com",
    messagingSenderId: "645751692452"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))
  });


  // Add signup event
  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('is-hidden');
      btnLogin.classList.add('is-hidden');
      btnSignUp.classList.add('is-hidden');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('is-hidden');
      btnLogin.classList.remove('is-hidden');
      btnSignUp.classList.remove('is-hidden');
    }
  });

}());

console.log('app is here');