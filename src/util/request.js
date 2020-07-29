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

//以前的信息
export const requestBefore =(data)=>{
    return axios({
        url:"/api/4/stories/before/"+data,
    })
}


//详情信息
export const requestDetail =(id)=>{
    return axios({
        url:"/api/4/story/"+id,
    })
}

//文章长评
export const requestLongComments =(id)=>{
    return axios({
        url:"/api/4/story/"+id+"/long-comments",
    })
}

//文章短评
export const requestShortComments =(id)=>{
    return axios({
        url:"/api/4/story/"+id+"/short-comments",
    })
}
