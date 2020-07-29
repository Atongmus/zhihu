import React, { Component } from 'react'
import GoBack from "../../components/GoBack/GoBack"
import "./Detail.styl"
import Share from "./components/Share/Share"
import { Toast } from "antd-mobile"
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { requestLongComments, requestShortComments } from "../../util/request"
import { collectAction, cancelAction, getIsCollect } from "../../store/modules/collections"
import { getDetail, requestDetailAction } from "../../store/modules/detail"
import { getdianzan, getIsDianzan, dianzanAction, cancelDianzanAction } from "../../store/modules/dianzan"
class Detail extends Component {
    constructor() {
        super()
        this.state = {
            isShowShare: false,
            commentsnum1: 0,//评论数
            commentsnum2: 0//评论数
        }
        this.con = React.createRef()
    }
    componentDidMount() {
        var id = this.props.match.params.id
        console.log(id)
        this.props.requestDetailAction(id);
        requestLongComments(id).then(res => {
            this.setState({
                commentsnum1:res.data.comments.length
            })
        })
        requestShortComments(id).then(res => {
            this.setState({
                commentsnum2:res.data.comments.length
            })
        })
    }
    showFenxiang() {
        this.setState({
            isShowShare: true
        })
    }
    hideShare() {
        this.setState({
            isShowShare: false
        })
    }
    toCancelClick(info, id) {
        this.props.cancelAction(id);
        this.successToast(info);

    }
    toCollectClick(info, detail) {
        this.props.collectAction(detail);
        this.successToast(info);

    }
    todianzanClick(info, item) {
        this.props.dianzanAction(item);
        this.successToast(info);
    }
    tocancelDianzanClick(info,id){
        this.props.cancelDianzanAction(id);
        this.successToast(info)
    }
    successToast(info) {
        Toast.success(info, 1);
    }

    toComment(id) {
        this.props.history.push(`/comments/${id}`)
    }
    render() {
        
       
        const { isCollect, detail,isDianzan,dianzan} = this.props;
        const { isShowShare } = this.state
        if (this.con.current && detail.body) {
            this.con.current.innerHTML = detail.body
        }
        return (

            <div className="detail">
                <header>
                    <div className="header clearfix">

                        <div className="detail-header-left">
                            <GoBack></GoBack>
                        </div>
                        <div className="detail-header-right">
                            <span className="iconfont icon-fenxiang detail-header-size" onClick={() => this.showFenxiang()}></span>
                            {isCollect ? <span className="iconfont icon-shoucang2 detail-header-size cancel" onClick={() => this.toCancelClick("取消成功!", detail.id)}></span> : <span className="iconfont icon-shoucang2 detail-header-size" onClick={() => this.toCollectClick("收藏成功!", detail)}></span>}
                            <span className="iconfont icon-pinglun1 detail-header-size" onClick={() => this.toComment(detail.id)}></span>
                            <span className="detail-num">{this.state.commentsnum1+this.state.commentsnum2}</span>
                            {
                                isDianzan ? <div className="in-block" onClick={()=>this.tocancelDianzanClick("取消成功",detail.id)}><span className="iconfont icon-dianzan detail-header-size cancel"></span><span className="detail-num">1</span></div> : <div className="in-block" onClick={()=>this.todianzanClick("点赞成功",{id:detail.id,num:1})}><span className="iconfont icon-dianzan detail-header-size "></span><span className="detail-num">0</span></div>
                            }
                            {/* <span className="iconfont icon-dianzan detail-header-size"></span>
                             <span  className="detail-num">0</span>  */}
                        </div>
                    </div>
                </header>

                <div className="detail-conbox">
                    {
                        detail.css ? <link rel="stylesheet" href={detail.css[0]} /> : null
                    }
                    <div className="detail-con" ref={this.con}></div>
                </div>
                <div className="detail-share">
                    {
                        isShowShare ? <Share hide={() => this.hideShare()}></Share> : null
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        detail: getDetail(state),
        isCollect: getIsCollect(state),
        dianzan: getdianzan(state),
        isDianzan: getIsDianzan(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestDetailAction: id => dispatch(requestDetailAction(id)),
        collectAction: (detail) => dispatch(collectAction(detail)),
        cancelAction: id => dispatch(cancelAction(id)),
        dianzanAction: item => dispatch(dianzanAction(item)),
        cancleDianzan: id => dispatch(cancelDianzanAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail)) 