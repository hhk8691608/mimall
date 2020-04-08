import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
// import env from './env'

Vue.config.productionTip = false

const mock = false;
if(mock){
	require('./mock/api');
}
// axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
    return Promise.reject(res);
  }else{
    Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
});

Vue.use(VueAxios,axios);
Vue.prototype.$message = Message;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
