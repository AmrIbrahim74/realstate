import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url) , {
        headers: {
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                'X-RapidAPI-Key': '56226c9e1amsh64339b8eee3d8d5p1acfcbjsn4c59b95d0a8f',
          }
    })
    return data;
}