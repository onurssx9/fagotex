import api from '../auth';

const fetchUsers = async callback => {
  const response = await api.db
    .collection('users')
    .onSnapshot(users => users.docs.map(user => callback(user.data())));
  return response;
};

export default {
  fetchUsers,
};
