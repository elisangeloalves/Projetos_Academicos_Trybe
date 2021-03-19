import { data_redux, data_trybe, data_bug }from './data';
import { infoVideo } from './data'
import { commentsVideo } from './data';

export const searchVideos = async (searchText) => {
  return new Promise((resolve, reject) => {
    const error = {message: 'não foi possivel encontrar os dados pesquisados!' };
    setTimeout(() => {
      if (searchText === 'redux') return resolve(data_redux);
      if (searchText === 'trybe') return resolve(data_trybe);
      if (searchText === 'bug') return resolve(data_bug);

      return reject(error)
    }, 2000)
  }).then(data => data.items)
};

export const getVideoInfo = (videoId) => {
  return new Promise((resolve, reject) => {
    const error = {message: 'não foi possivel encontrar os dados pesquisados!' };
    setTimeout(() => resolve(
      videoId ? infoVideo : reject(error)), 2000)
    })
    console.log(videoId)
  };
  
  export const getVideoComments = (videoId) => {
    return new Promise((resolve, reject) => {
      const error = {message: 'não foi possivel encontrar os dados pesquisados!' };
      setTimeout(() => resolve(
        videoId ? commentsVideo : reject(error)), 2000)
    })
  };
  
  
  
  // export default searchVideos;