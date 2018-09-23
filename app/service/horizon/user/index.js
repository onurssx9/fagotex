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
  const user = await api.db
    .collection('users')
    .doc(requestData.email || requestData)
    .get()
    .then(x => x.data());

  if (!user) {
    return create(requestData);
  }

  const userHashtags = await api.db
    .collection('users')
    .doc(requestData.email || requestData)
    .collection('hashtags')
    .get();

  user.hashtags = userHashtags.docs.map(hashtag => ({
    name: hashtag.id,
    ...hashtag.data(),
  }));

  return user;
};

const rate = async requestData => {
  const { rating, popularity } = requestData;

  if (rating.length > 10) {
    rating.shift();
  }

  await api.db
    .collection('users')
    .doc(requestData.email)
    .set(
      {
        rating,
        popularity,
      },
      { merge: true },
    );
};

const comment = async requestData => {
  await api.db
    .collection('users')
    .doc(requestData.email)
    .update({
      comments: api.firebase.firestore.FieldValue.arrayUnion(
        requestData.comment,
      ),
      popularity: requestData.popularity,
    });
};

const addHashtag = async requestData => {
  const { hashtag } = requestData;

  const response = await api.db
    .collection('users')
    .doc(requestData.email)
    .collection('hashtags')
    .doc(hashtag.replace('#', ''))
    .get()
    .then(x => x.data());

  const hashtags = await api.db
    .collection('hashtags')
    .doc(hashtag.replace('#', ''))
    .get()
    .then(x => x.data());

  if (!hashtags) {
    await api.db
      .collection('hashtags')
      .doc(hashtag.replace('#', ''))
      .set({ users: [] }, { merge: true });
  }

  if (!response) {
    await api.db
      .collection('users')
      .doc(requestData.email)
      .collection('hashtags')
      .doc(hashtag.replace('#', ''))
      .set({
        name: hashtag.replace('#', ''),
        comments: [],
        ratings: [],
        popularity: 0,
      });

    await api.db
      .collection('hashtags')
      .doc(hashtag.replace('#', ''))
      .update({
        users: api.firebase.firestore.FieldValue.arrayUnion(requestData.email),
      });

    return true;
  }

  return false;
};

const deleteComment = async requestData => {
  const { comments, popularity } = requestData;

  await api.db
    .collection('users')
    .doc(requestData.email || requestData)
    .collection('hashtags')
    .doc(requestData.hashtag)
    .set(
      {
        comments,
        popularity,
      },
      { merge: true },
    );
};

export default {
  create,
  get,
  comment,
  deleteComment,
  rate,
  addHashtag,
};
