module.exports = async (array) => {
  let newPosts = await array.map(({ dataValues }) => {
    const { id, title, content, published, updated, User } = dataValues;
    return ({ id, title, content, published, updated, user: { ...User } });
  });
  newPosts = await newPosts.map((element) => {
    const { id, displayName, email, image } = element.user.dataValues;
    const { user: _, ...post } = element;
    return ({ ...post, user: { id, displayName, email, image } });
  });
  console.log('Posts: ', newPosts);
  return newPosts;
};
