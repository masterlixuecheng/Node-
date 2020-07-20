import axios from 'axios'
import store from '../store'
import {
  Message,
  Loading,
  MessageBox 
} from 'element-ui';

let loading = "";
let flag = 0;
let _this = this;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  cancelToken: source.token
})


service.interceptors.request.use(function (config) {
  flag++;
  loading = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  if (config.url.substring(0, 8) == "/CqjySy/") {
    config.data.token = store.getters.token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


service.interceptors.response.use(function (response) {
  flag--;
  if (!flag) {
    loading.close();
  }
  if (!response.data.success && response.data.msg == "ErrorToLogin") {
    MessageBox.alert('由于长时间未进行操作或有其他人登录此账号，当前系统已处于离线状态，请退出重新登录', '系统提示', {
      confirmButtonText: '确定',
      callback: action => {
        store.dispatch("LogOut");
      }
    });
  }
  return response;
}, function (error) {
  flag--;
  loading.close();
  return Promise.reject(error);
});
export default service
