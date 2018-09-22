export default {
  user: data => ({
    displayName: data.displayName,
    photoURL: data.photoURL,
    email: data.email,
    comments: data.comments || [],
    rating: data.rating || [],
    popularity: data.popularity || 0,
  }),
};
