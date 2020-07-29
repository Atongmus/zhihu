import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
 class GoBack extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        return (
            <span className="iconfont icon-navbankicon detail-header-size" onClick={()=>this.goBack()}></span>
        )
    }
}
export default withRouter(GoBack)