import API from './webapi.service';
import {BASE_URL} from './urls';

export const getAvaliacoes = async () => {
  try {
    return await API.get(`${BASE_URL}/avaliacoes`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  };
};

export const createAvaliacao = async (param) => {
  try {
    return await API.post(`${BASE_URL}/avaliacoes`, param).then(
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
};
