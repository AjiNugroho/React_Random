import axios from "axios";
const API_URL = "http://localhost:5000/omniapi"; 
class DataService {
    getData(){
        let config = {
          method:'get',
          url:API_URL+'/get_file',
        }
        return axios(config)
          .then(response => {
            
            return response.data
          });
    
      }
}

export default new DataService();