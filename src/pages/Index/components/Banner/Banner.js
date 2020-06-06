import React, { Component } from 'react'
import{NavLink,withRouter} from "react-router-dom"
import { Carousel } from "antd-mobile"
import {requestIndex} from "../../../../util/request"
 class Banner extends Component {
    componentDidMount(){
        requestIndex().then(
            res=>{
                console.log(res);
            }
        )
    }
    render() {
        return (
            <div>
                12rse
            </div>
        )
    }
}
export default Banner;