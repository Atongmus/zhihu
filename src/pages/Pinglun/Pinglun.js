import React, { Component } from 'react'
import { requestLongComments, requestShortComments } from "../../util/request"
import GoBack from "../../components/GoBack/GoBack"
import "./Pinglun.styl"
import { Accordion, List } from "antd-mobile"
import { filterTime } from "../../util/filter"
export default class Pinglun extends Component {
    constructor() {
        super()
        this.num = 0
        this.state = {
            longComments: [],
            shortComments: []
        }
        
    }
    onChange = (key) => {
        console.log(key);
    }
    componentDidMount() {
        var id = this.props.match.params.id
        
        
        requestLongComments(id).then(res => {
            this.setState({
                longComments: res.data.comments
            })
        })
        requestShortComments(id).then(res => {
            this.setState({
                shortComments: res.data.comments
            })
        })

        this.num = this.state.longComments.length + this.state.shortComments.length;
        
    }
    render() {
        const { longComments, shortComments } = this.state
        return (
            <div className="comments">
                <header>
                    <div className="header clearfix">

                        <div className="comments-header-left">
                            <GoBack></GoBack>
                            <span>{(longComments.length+shortComments.length) + "条点评"}</span>
                        </div>
                        <div className="comments-header-right">
                            <span className="iconfont icon-pinglun comments-header-size"></span>
                        </div>
                    </div>
                </header>

                <div className="comments-con">
                    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header={  longComments.length>0?longComments.length + `条长评`:"0条长评"}>


                            {
                                longComments.length > 0 ? <List className="my-list">{
                                    longComments.map(item => {
                                        return (
                                            <List.Item>
                                                <div className="list-box">
                                                    <div className="list-img"><img src={item.avatar} alt="" /></div>
                                                    <div className="list-con">
                                                        <div className="list-con-name">
                                                            {item.author}
                                                        </div>
                                                        <div className="list-con-neirong">
                                                            {item.content}
                                                        </div>
                                                        <div className="list-con-time">
                                                            {filterTime(item.time)}
                                                        </div>
                                                    </div>
                                                    <div className="list-dianzan">
                                                        <span className="iconfont icon-dianzan"></span>
                                                        <span className="dianzan-num">{item.likes}</span>
                                                    </div>
                                                </div>
                                            </List.Item>
                                        )
                                    })
                                }</List> : <div className="nolist">
                                        <span className="iconfont icon-shafa"></span>
                                        <p className="nolist-font">深度长评虚位以待</p>
                                    </div>
                            }




                        </Accordion.Panel>
                        <Accordion.Panel header={shortComments.length>0?shortComments.length + `条短评`:"0条短评"} className="pad">
                            {
                                shortComments.length > 0 ?
                                    <List className="my-list">
                                        {
                                            shortComments.map(item => {
                                                return (
                                                    <List.Item>
                                                        <div className="list-box">
                                                            <div className="list-img"><img src={item.avatar} alt="" /></div>
                                                            <div className="list-con">
                                                                <div className="list-con-name">
                                                                    {item.author}
                                                                </div>
                                                                <div className="list-con-neirong">
                                                                    {item.content}
                                                                </div>
                                                                <div className="list-con-time">
                                                                    {filterTime(item.time)}
                                                                </div>
                                                            </div>
                                                            <div className="list-dianzan">
                                                                <span className="iconfont icon-dianzan"></span>
                                                                <span className="dianzan-num">{item.likes}</span>
                                                            </div>
                                                        </div>
                                                    </List.Item>
                                                )
                                            })
                                        }
                                    </List> : <div className="nolist">
                                        <span className="iconfont icon-shafa"></span>
                                        <p className="nolist-font">深度短评虚位以待</p>
                                    </div>
                            }
                        </Accordion.Panel>
                    </Accordion>
                </div>

            </div>
        )
    }
}
