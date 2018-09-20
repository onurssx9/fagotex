import api from '../auth';
import models from '../structs';

const create = async requestData => {
  await api.db
    .collection('users')
    .doc(requestData.email)
    .set(models.user(requestData), { merge: true });
  return requestData;
};

const get = async requestData => {
  const response = await api.db
    .collection('users')
    .doc(requestData.email || requestData)
    .get()
    .then(x => x.data());
  if (!response) {
    return create(requestData);
  }
  return response;
};

const comment = async requestData => {
  await api.db
    .collection('users')
    .doc(requestData.email)
    .update({
      comments: api.firebase.firestore.FieldValue.arrayUnion(
        requestData.comment,
      ),
    });
};

const deleteComment = async requestData => {
  const { comments } = requestData;

  comments.splice(requestData.id, 1);

  await api.db
    .collection('users')
    .doc(requestData.email)
    .set(
      {
        comments,
      },
      { merge: true },
    );
};

export default {
  create,
  get,
  comment,
  deleteComment,
};
