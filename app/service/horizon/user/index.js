import api from '../auth';
import models from '../structs';
const create = async requestData => {
  const response = await api.db
    .collection('users')
    .doc(requestData.email)
    .set(models.user(requestData), { merge: true })
    .then(() => true)
    .catch(() => false);
  return response;
};

const get = async email => {
  const response = await api.db
    .collection('users')
    .doc(email)
    .get()
    .then(x => x.data());
  return response;
};

export default {
  create,
  get,
};
