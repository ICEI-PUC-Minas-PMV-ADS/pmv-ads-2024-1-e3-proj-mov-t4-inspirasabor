import API from './webapi.service';
import { BASE_URL } from './urls';

export const findAllReceitas = async () => {
    try {
      return await API.get(`${BASE_URL}/receitas`).then(
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

  