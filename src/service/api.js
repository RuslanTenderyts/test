import axios from "axios";

axios.defaults.baseURL = "https://643327783e05ff8b37361a24.mockapi.io/";

export const fetchShops = async () => {
    const response = await axios.get(`shops`);
    console.log(response.data)
    if(!response.data) {
       return Promise.reject( new Error( `Error fetching shops` ));
    };
    return response.data;
  };

