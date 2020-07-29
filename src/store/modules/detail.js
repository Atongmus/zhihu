import {requestDetail} from "../../util/request"

const initState={
    detail:{}
}

export const changeDetailAction = detail =>({
    type:"changeDetail",
    detail
})
export const requestDetailAction = id=>{
    return(dispatch,getState)=>{
        const {detail}=getState().detail;
        if(detail.id===id){
            return;
        }else{
            dispatch(changeDetailAction({}))
        }

        requestDetail(id).then(res=>{
            dispatch(changeDetailAction(res.data))
        })
    }
}


const reducer =(state=initState,action)=>{
    switch(action.type){
        case "changeDetail":
            return{
                ...state,
                detail:action.detail
            }

        default:
            return state
    }
}

export const getDetail = state=>state.detail.detail;
export default reducer