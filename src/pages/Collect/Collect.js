import React, { Component } from 'react'
import "./Collect.styl"
import { Drawer } from "antd-mobile"
import List from "./compontents/List"
import { connect } from "react-redux"
import { getCollections } from "../../store/modules/collections"
 class Collect extends Component {
    constructor() {
        super()
        this.state = {
            open: false,//抽屉的状态
        }
    }
    onOpenChange() {
        this.setState({
            open: !this.state.open
        })
    }
    toIndex(){
        this.props.history.push("/index")
    }
    render() {
        const {collections} =this.props
        const sideBar = (
            <div className="sideBar">
                <div className="sideBar-top">
                    <div className="img-border">
                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2158637046,4199288224&fm=11&gp=0.jpg" alt="" />
                    </div>
                    <span className="siderBar-color">孙彤</span>
                </div>
                <div className="sideBar-kind">
                    <div className="shoucang">
                        <span className="iconfont icon-shoucang2 siderBar-color"></span>
                        <span className="siderBar-color">我的收藏</span>
                    </div>
                    <div className="shoucang">
                        <span className="iconfont icon--download siderBar-color"></span>
                        <span className="siderBar-color">离线下载</span>
                    </div>
                </div>
                <div className="siderBar-list">
                    <span className="iconfont icon-index1 index-header-size"></span>
                    <span className="" onClick={() => this.toIndex()}>首页</span>
                </div>
            </div>
        )
        return (
            <div className="index">
                <header>
                    <div className="header clearfix">

                        <div className="index-header-left">
                            <span className="iconfont icon-daohang index-header-size" onClick={() => this.onOpenChange()}></span>
                            <span className="index-header-size">{collections.length+"条收藏"}</span>

                        </div>

                    </div>
                </header>
                {<Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          sidebar={sideBar}
          open={this.state.open}
          onOpenChange={() => this.onOpenChange()}
        >
          <div className="index-con">
                    <List list={collections}></List>
                </div>
        </Drawer>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        collections: getCollections(state)
    }
}
export default connect(mapStateToProps)(Collect) 