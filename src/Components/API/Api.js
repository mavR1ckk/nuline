import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://3.109.62.179:8081/api/v1/'
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