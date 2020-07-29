import React, { Component } from 'react'
import "./Index.styl"
import Banner from "./components/Banner/Banner"
import { requestIndex, requestBefore } from "../../util/request"
import List from "./components/List/List"
import { Drawer } from "antd-mobile"
export default class Index extends Component {
    constructor() {
        super()
        this.n = 0;//今天的数据
        this.times = "";
        this.getdate = this.getnowdate();
        this.state = {
            open: false,//抽屉的状态
            lists: [],
            isRequest: true//下滑是否发送请求
        }
    }
    changeIsReuest(bool) {
        this.setState({
            isRequest: bool
        })
    }
    componentDidMount() {
        this.getnowdate();
        console.log(this.getdate)

        requestIndex().then(res => {
            var obj = new Object();
            obj.time = res.data.date;
            obj.date = res.data.stories;
            this.setState({
                lists: [...this.state.lists, { ...obj }]

            }, () => {
                // setState也是异步的要等今天的数据存储完再请求以前的数据所以要放在回调函数里
                console.log(this.state.lists)
                //判断到底
                window.onscroll = () => {
                    //改变顶部文字的内容
                    var titles = document.querySelectorAll(".list-title")
                    var header = document.querySelector(".header .header-title")
                    var headerHeight = document.querySelector(".header")
                    var arr = [];//距离顶部的高度
                    for (var i = 0; i < titles.length; i++) {
                        arr.push(titles[i].getBoundingClientRect().top)
                    }
                    for (var j = 0; j < arr.length; j++) {
                        if (arr[j] < headerHeight.clientHeight) {
                            header.innerHTML = titles[j].innerHTML;
                        } else {
                            break;
                        }
                    }
                    header.innerHTML=header.innerHTML==="今日新闻"?"首页":header.innerHTML;
                    //页面高度
                    var wh = document.documentElement.clientHeight;
                    //文档高度
                    var dh = document.documentElement.offsetHeight;
                    //卷曲高度
                    var st = document.documentElement.scrollTop || document.body.scrollTop;
                    if (wh + st + 30 >= dh && this.state.isRequest) {
                        console.log("到底了 准备发请求；e")
                        this.n++;
                        // console.log(123)
                        this.changeIsReuest(false);
                        console.log(this.state.isRequest);
                        this.times = this.getTime(this.n);
                        requestBefore(this.times.params).then(res => {
                            var obj = new Object();
                            obj.time = res.data.date;
                            obj.date = res.data.stories;
                            this.changeIsReuest(true);
                            this.setState({
                                lists: [...this.state.lists, { ...obj }]

                            })
                        })
                    }

                }
            })

        });
    }
    componentWillUnmount(){
        window.onscroll=null;//要清除滚动事件，到详情页的时候滚动才不会找不到header的内容
    }
    /*
    6.5
    前几天  请求时间    展示
    前1天 20200605(0)     6.4(1)
    2      6.4(1)          6.3(2)
    3      6.3(2)         6.2(3)
  
    n       (n-1)         (n)
    */
    getnowdate() {
        var date = new Date();
        var month = (date.getMonth() + 1 + "").padStart(2, "0");
        var day = (date.getDate() + "").padStart(2, "0")
        return `${month}${day}`
    }

    getTime(n) {
        var showDate = new Date(new Date().getTime() - n * 24 * 60 * 60 * 1000);

        var paramsDate = new Date(new Date().getTime() - (n - 1) * 24 * 60 * 60 * 1000);//发起请求的参数时间对象
        var showM = (showDate.getMonth() + 1 + "").padStart(2, "0");
        var showD = (showDate.getDate() + "").padStart(2, "0");
        var showTime = showM + "月" + showD + "日";
        var paramsY = paramsDate.getFullYear()
        var paramsM = (paramsDate.getMonth() + 1 + "").padStart(2, '0')
        var paramsD = (paramsDate.getDate() + "").padStart(2, '0')
        var paramsTime = paramsY + paramsM + paramsD;
        return {
            show: showTime,
            params: paramsTime
        }
    }


    onOpenChange() {
        this.setState({
            open: !this.state.open
        })
    }
    toCollect() {
        this.props.history.push("/collect")
    }
    render() {
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
                        <span className="siderBar-color" onClick={() => this.toCollect()}>我的收藏</span>
                    </div>
                    <div className="shoucang">
                        <span className="iconfont icon--download siderBar-color"></span>
                        <span className="siderBar-color">离线下载</span>
                    </div>
                </div>
                <div className="siderBar-list">
                    <span className="iconfont icon-index1 index-header-size"></span>
                    <span className="" onClick={() => this.onOpenChange()}>首页</span>
                </div>
            </div>
        )
        return (
            <div className="index">
                <header>
                    <div className="header clearfix">

                        <div className="index-header-left">
                            <span className="iconfont icon-daohang index-header-size" onClick={() => this.onOpenChange()}></span>
                            <span className="index-header-size header-title">首页</span>
                        </div>
                        <div className="index-header-right">
                            <span className="iconfont icon-Pathx index-header-size"></span>
                            <span className="iconfont icon-sangedian index-header-size"></span>
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
                        <Banner></Banner>
                        <List lists={this.state.lists} nowTime={this.getdate}></List>
                    </div>
                </Drawer>}


            </div>
        )
    }
}
