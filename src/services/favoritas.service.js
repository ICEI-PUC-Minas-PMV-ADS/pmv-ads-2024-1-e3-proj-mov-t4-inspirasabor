import API from './webapi.service';
import {BASE_URL} from './urls';

export const getFavoritas = async () => {
  try {
    return await API.get(`${BASE_URL}/favoritas?_expand=receita`).then(
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

export const createFavorita = async (param) => {
  try {
    return await API.post(`${BASE_URL}/favoritas`, param).then(
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

export const removeFavorita = async (id) => {
  try {
      return await API.delete(`${BASE_URL}/favoritas/${id}`).then(
          response => {
              return response.data;
          },
          error =>{
              console.log(error);
              return  null;
          }
      );
  } catch (error) {
      console.log(error);
      return null;
  }
};

export const findAllFavoritas = async () => {
    try {
      return await API.get(`${BASE_URL}/favoritas?_embed=receitas`).then(
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
    }
  };
