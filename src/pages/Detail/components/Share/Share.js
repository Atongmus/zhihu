import React, { Component } from 'react'
import "./Share.styl"
export default class Share extends Component {
    shareClick(e){
    console.log(this.props)
        e.target.className==="share-mark"&&this.props.hide()
    }
    render() {
        return (
            <div className="share">
                <div className="share-mark" onClick={(e)=>this.shareClick(e)}>
                    <div className="share-box">
                        <h2 className="share-fenxiang">分享</h2>
                        <div className="share-con">
                            <div className="share-icon">
                                <span className="iconfont icon-weibo"></span>
                                <span className="icon-title">新浪微博</span>
                            </div>
                            <div className="share-icon">
                                <span className="iconfont icon-weixin" ></span>
                                <span className="icon-title" >微信</span>
                            </div>
                            <div className="share-icon">
                                <span className="iconfont icon-pengyouquan"></span>
                                <span className="icon-title">微信朋友圈</span>
                            </div>
                            <div className="share-icon">
                                <span className="iconfont icon-fenxiang_yinxiangbiji"></span>

                                <span className="icon-title">印象笔记</span>
                            </div>
                            <div className="share-icon">
                                <span className="iconfont icon-youdaoyunbiji"></span>

                                <span className="icon-title">有道云笔记</span>
                            </div>
                            <div className="share-icon">
                                <span className="iconfont icon-QQ"></span>

                                <span className="icon-title">QQ</span>
                            </div>
                            <div className="share-icon">
                                <span className="iconfont icon-gengduo"></span>
                                <span className="icon-title">更多平台</span>
                            </div>
                            



                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
