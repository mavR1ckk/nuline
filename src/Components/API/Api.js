import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:8081/api/v1/'
});



const getProducts = () => {
    return(
       
        Api.get("/getProducts")
        .then((response) => {
            return response;
        })
    )    
}

export default Api;
export { getProducts };