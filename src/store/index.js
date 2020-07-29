import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"

import collections from "./modules/collections"
import detail from "./modules/detail"
import dianzan from "./modules/dianzan"
//reducer
const reducer=combineReducers({
    //key是模块的名称，value是该模块对应的reducer
    collections,
    detail,
    dianzan
})

//创建仓库
const store=createStore(reducer,applyMiddleware(thunk))

//导出仓库
export default store