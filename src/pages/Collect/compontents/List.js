import React, { Component } from 'react'
import "./List.styl"
import { Link, withRouter } from "react-router-dom"

class List extends Component {
    constructor() {
        super()
        this.state = {
            lists: []
        }

    }
    componentDidMount() {

    }




    // 前往详情
    toDetail(id) {
        //console.log(123)
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        const { list } = this.props
        return (
            <div className="list">
                <div className="list-index-con">
                    <div className="wrap">
                        {
                            list.map(item => {
                                return (
                                    <div className="banner-indexcon-list clearfix" onClick={() => this.toDetail()}>
                                        <div className="left-con">
                                          { item.title}
                                        </div>
                                        <div className="right-img">
                                            <img src={item.images[0]} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(List)