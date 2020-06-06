import axios from "axios"
import qs from "qs"
  
// 请求拦截
axios.interceptors.request.use(config=>{
    if(config.method.toUpperCase()==="post"){
        config.data=qs.stringify(config.data)
    }
    return config;
})

//响应拦截
axios.interceptors.response.use(res=>{
    console.log("请求的地址是："+res.config.url);
    console.log(res);
    return res;
})

//首页信息
export const requestIndex =()=>{
    return axios({
        url:"/api/4/stories/latest",
    })
}