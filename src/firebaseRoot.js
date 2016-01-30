import Firebase from 'firebase';

const firebaseRoot = new Firebase('https://code-de-conduite.firebaseIO.com/');
// myRootRef.authWithOAuthPopup("twitter", function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });

export default firebaseRoot;
