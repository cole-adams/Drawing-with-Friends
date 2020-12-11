import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from './socket-io.service';

class RoomService {
  getall(user:any) {
    return axios
      .post(API_URL + 'rooms/', {
        user: user.username
      }, {headers: authHeader()})
      .then(response => {
        return response.data;
      });
  }
}

export default new RoomService();