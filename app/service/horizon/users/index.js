import api from '../auth';

const get = async () => {
  const response = await api.db
    .collection('users')
    .get()
    .then(users => users.docs.map(user => user.data()));
  return response;
};

export default {
  get,
};
