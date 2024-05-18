import API from './webapi.service';
import { BASE_URL } from './urls';

export const findAllCategorias = async () => {
    try {
      return await API.get(`${BASE_URL}/categorias?_embed=receitas`).then(
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

export const getCategoriaById = async (id) => {
  try {
    return await API.get(`${BASE_URL}/categorias/${id}`).then(
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
  