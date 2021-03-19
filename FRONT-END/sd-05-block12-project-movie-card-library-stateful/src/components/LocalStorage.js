const LocalStorage = ({ movies }) => {
  let biblioteca = movies;
  if (undefined !== 'MovieLibrary') { biblioteca = localStorage.getItem('MovieLibrary'); }
  localStorage.setItem('MovieLibrary', { movies });
  return (biblioteca);
};

export default LocalStorage;
