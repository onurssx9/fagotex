export default {
  user: data => ({
    displayName: data.displayName,
    photoURL: data.photoURL,
    email: data.email,
    comments: [],
    rate: 0,
    popularity: 0,
  }),
};
