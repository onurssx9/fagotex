import api from '../auth';

const get = async () => {
  const response = await api.db.collection('users').get();
  const users = response.docs.map(user => user.data());

  return users;
};

export default {
  get,
};
