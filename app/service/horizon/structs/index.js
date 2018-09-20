export default {
  user: data => ({
    displayName: data.displayName,
    photoURL: data.photoURL,
    email: data.email,
    comments: data.comments || [],
    rating: data.rating || 1,
    rate: data.rate || 0,
    popularity: data.popularity || 0,
  }),
};
