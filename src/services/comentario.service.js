import API from './webapi.service';
import { BASE_URL } from './urls';

export const getComentarios = async () => {
    try {
      return await API.get(`${BASE_URL}/comentarios?_expand=user`).then(
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

export const createComentario = async (param) => {
    try {
      return await API.post(`${BASE_URL}/comentarios`, param).then(
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
