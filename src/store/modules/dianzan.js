
//state
const initState={
    dianzan:[]
}

//action点赞
export const dianzanAction=(item)=>({
    type:"dianzan",
    item
    
})
//取消
export const cancelDianzanAction=id=>({
    type:"cancel",
    id
})

//reducer
const reducer=(state=initState,action)=>{
    const {dianzan}=state
    switch(action.type){
        case "dianzan":
            dianzan.push(action.item)
            //dianzan.num+1
        return{
            ...state,

            dianzan:[...dianzan]
        }
        case "cancel":
            const idx=dianzan.findIndex(i=>i.id===action.id)
           dianzan.splice(idx,1)
           
            return{
                ...state,
                dianzan: [...dianzan]
            }
        default:
            return state;
    }
}

export default reducer;

//导出数据
export const getdianzan= state=>state.dianzan.dianzan

export const getIsDianzan = state=>{
    const {detail} =state.detail;
    const {dianzan}= state.dianzan;
    return dianzan.some(item=>item.id===detail.id)
}