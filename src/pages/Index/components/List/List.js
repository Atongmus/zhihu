import React, { Component } from 'react'
import { requestIndex, requestBefore } from "../../../../util/request"
import "./List.styl"
import { withRouter } from "react-router-dom"
class List extends Component {
    // 前往详情
    toDetail(id) {
        //console.log(123)
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        const { lists,nowTime } = this.props
        return (
            <div className="list">
                {
                    lists.map(item => {
                        return (
                            <div className="list-index-con" key={item.time}>
                                <div className="wrap">
                                    <h2 className="list-title">{item.time.substr(4, 4) === nowTime ? "今日新闻" : item.time.substr(4, 4)}</h2>
                                    {

                                        item.date.map(i => {
                                            return (

                                                <div className="banner-indexcon-list clearfix" key={i.id} onClick={() => this.toDetail(i.id)}>
                                                    <div className="left-con">
                                                        {i.title}
                                                    </div>
                                                    <div className="right-img">

                                                        <img src={i.images[0]} alt="" />


                                                    </div>
                                                </div>


                                            )
                                        })
                                    }
                                </div>
                            </div>

                        )
                    })

                }
            </div>
        )
    }
}
export default withRouter(List)