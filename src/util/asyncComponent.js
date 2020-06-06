import React, { Component } from 'react'
function asyncComponent(fn){
    class AsynC extends Component {
        constructor (){
            super()
            this.state={
                c:null
            }
        }
        componentDidMount(){
            fn().then(mod=>{
   this.setState({
       C:mod.default
   })
            })
        }
       render() {
           const {C}=this.state
           return (
               <div>
                   {
                       C?<C {...this.props}></C>:null
                   }
               </div>
           )
       }
   }
   return AsynC;
}

export default asyncComponent;