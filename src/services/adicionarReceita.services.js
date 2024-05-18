import API from './webapi.service';
import {BASE_URL} from './urls';

export const getReceita = async (param) => {
  try{
    return await API.get(`${BASE_URL}/receitas`).then( 
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
}

export const insertReceita = async (param) => {
  try{
    return await API.post(`${BASE_URL}/receitas`, param).then( 
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
}

export const updateReceita = async (param) => {
  try{
    return await API.put(`${BASE_URL}/receitas/${param.id}`, param).then( 
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
}

export const deleteReceita = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/receitas/${id}`).then( 
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
}