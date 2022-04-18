import axios from 'axios';
import {apiEndPoints} from '../Constants/APIActions';

export function requestApi(ApiName) {
  return axios.request({
    method: 'get',
    url: ApiName,
  });
}
