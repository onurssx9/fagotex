import api from '../auth';

export default {
  uiConfigs: {
    signInFlow: 'popup',
    signInOptions: [
      api.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      api.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  },
  auth: api.firebase.auth(),
  isSignIn: async callback =>
    api.firebase.auth().onAuthStateChanged(user => {
      callback(user);
    }),
  signOut: async callback =>
    api.firebase
      .auth()
      .signOut()
      .then(user => {
        callback(user);
      }),
  currentUser: api.firebase.auth().currentUser,
};
