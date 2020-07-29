import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom"
import { Carousel } from "antd-mobile"
import { requestIndex } from "../../../../util/request"
import "./Banner.styl"
class Banner extends Component {
    constructor() {
        super();
        this.state = {
            banner: [],
           
        }
    }
    componentDidMount() {
        requestIndex().then(
            res => {
                this.setState({
                    banner: res.data.top_stories,
                })
            }
        )

    }
    // 前往详情
    toDetail(id) {
        //console.log(123)
        this.props.history.push(`/detail/${id}`)
    }
    render() {
        const { banner } = this.state;
        console.log(banner);
        return (
            <div className="banner-index">
                <div className="banner">
                    {<Carousel autoplay={true} infinite>

                        {
                            banner.map(item => {
                                return (
                                    <div key={item.id} className="banner-item"
                                    >
                                        <img src={item.image} alt="" onClick={() => this.toDetail(item.id)}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));

                                            }}
                                        />
                                        <div className="banner-title">{item.title}</div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>}
                </div>

               </div>
        )
    }
}
export default withRouter( Banner);