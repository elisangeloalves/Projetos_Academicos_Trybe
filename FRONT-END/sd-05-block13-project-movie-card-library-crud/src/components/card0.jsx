const newMovie = () => {
  const movie = {
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
    bookmarked: true,
    genre: '',
  };
  return new Promise((resolve) => {
    setTimeout(() => { resolve(movie); }, 2000);
  });
};

export default newMovie;
