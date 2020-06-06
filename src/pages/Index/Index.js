import React, { Component } from 'react'
import "./Index.css"
import Banner from "./components/Banner/Banner"
export default class Index extends Component {
    render() {
        return (
            <div className="index">
                <header>
                    <div className="header clearfix">

                        <div className="index-header-left">
                            <span className="iconfont icon-daohang index-header-size"></span>
                            <span className="index-header-size">首页</span>
                        </div>
                        <div className="index-header-right">
                            <span className="iconfont icon-Pathx index-header-size"></span>
                            <span className="iconfont icon-sangedian index-header-size"></span>
                        </div>
                    </div>
                </header>
                <div className="index-con">
                    <Banner></Banner>
                </div>
            </div>
        )
    }
}
