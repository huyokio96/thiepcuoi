import React, { useState, useEffect, useRef } from 'react'
import { Anchor, Col, Row } from 'antd';
import '../App.css'
import './MainPageAnchor.css'
import '../assets/css/revealScroll.css'
import bg from "../assets/images/img_bg_1.jpg";
import bg2 from "../assets/images/img_bg_2.jpg";
import groom from "../assets/images/groom.jpg";
import bride from "../assets/images/bride.jpg";

import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <a>winner</a>;
    } else {
        // Render a countdown
        // const days = hours / 24;
        return <div style={{ margin: '30px' }}>
            <span style={{ display: 'inline' }}>
                {/* <a style={{ backgroundColor: 'pink', padding: 20, borderRadius: '69px' }}>{zeroPad(days)}</a>:
                <a style={{ backgroundColor: 'pink', padding: 20, borderRadius: '69px' }}>{zeroPad(hours)}</a>:
                <a style={{ backgroundColor: 'pink', padding: 20, borderRadius: '69px' }}>{zeroPad(minutes)}</a>:
                <a style={{ backgroundColor: 'pink', padding: 20, borderRadius: '69px' }}>{zeroPad(seconds)}</a> */}
                <section class="stage">
                    <figure class="ball bubble" style={{ padding: "22px", fontSize: '34px', backgroundColor: '#F14E95', marginRight: '22px' }}>
                        <div>{zeroPad(days)}</div>
                        <div style={{ fontSize: '12px' }}>Ngày</div>
                    </figure>
                </section><span style={{ fontSize: '42px', color: 'white' }}>:</span>
                <section class="stage">
                    <figure class="ball bubble" style={{ padding: "22px", fontSize: '34px', backgroundColor: '#F14E95', marginRight: '22px' }}>
                        <div>{zeroPad(hours)}</div>
                        <div style={{ fontSize: '12px' }}>Giờ</div>
                    </figure>
                </section><span style={{ fontSize: '42px', color: 'white' }}>:</span>
                <section class="stage">
                    <figure class="ball bubble" style={{ padding: "22px", fontSize: '34px', backgroundColor: '#F14E95', marginRight: '22px' }}>
                        <div>{zeroPad(minutes)}</div>
                        <div style={{ fontSize: '12px' }}>Phút</div>
                    </figure>
                </section><span style={{ fontSize: '42px', color: 'white' }}>:</span>
                <section class="stage">
                    <figure class="ball bubble" style={{ padding: "22px", fontSize: '34px', backgroundColor: '#F14E95', marginRight: '22px' }}>
                        <div>{zeroPad(seconds)}</div>
                        <div style={{ fontSize: '12px' }}>Giây</div>
                    </figure>
                </section>
            </span>
        </div>;
    }
};

const MainPageAnchor = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.remove("slide-out");
                el.classList.add("slide-in");
            });
            console.log(1);
        } else {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.remove("slide-in");
                el.classList.add("slide-out");
            });
            console.log(2);
        }
    }, [isIntersecting]);
    return (
        <Row>
            <Col span={20} className='App'>
                <div
                    id="part-1"
                    style={{
                        height: '100vh',
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <div id="fh5co-header" class="fh5co-cover fixed-bg" role="banner"
                        style={{ backgroundImage: `url(${bg})` }} data-stellar-background-ratio="0.5">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 text-center">
                                    <div class="display-t">
                                        <div class="display-tc animate-box" data-animate-effect="fadeIn">
                                            <h1>Huydepzai &amp; Phuongdepgai</h1>
                                            <h2>Chúng tôi sắp cứi nhau rồi~</h2>
                                            <div class="simply-countdown simply-countdown-one"></div>
                                            <Countdown
                                                date='2023-12-27T00:00:00'
                                                renderer={renderer}
                                                daysInHours={true}
                                            />
                                            <p><a href="google.com" class="btn btn-default btn-sm">Save the date</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="part-2"
                    style={{
                        height: '100vh',
                        background: 'rgba(0,255,0,0.02)',
                    }}
                    ref={ref}
                >
                    <div className='scroll-bg'></div>
                    <div id="fh5co-header" class="fh5co-cover fixed-bg" role="banner"
                        // style={{ backgroundImage: `url(${bg2})` }} 
                        style={{ backgroundColor: "rgb(255 193 193)" }}
                        data-stellar-background-ratio="0.5">
                        <div id="fh5co-couple">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                        <h2>Xin chào!</h2>
                                        <h3>Sài gòn, 1 Tháng 1, 2024</h3>
                                        <p style={{ color: 'white' }}>Trân trọng mời bạn đến chơi dứ chúng tôi</p>
                                    </div>
                                </div>
                                <div class="couple-wrap animate-box">
                                    <div class="couple-half">
                                        <div class="groom">
                                            <img src={groom} alt="groom" class="img-responsive" />
                                        </div>
                                        <div class="desc-groom">
                                            <h3>huydepzai</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                        </div>
                                    </div>
                                    <p class="heart text-center"><i class="icon-heart2"></i></p>
                                    <div class="couple-half">
                                        <div class="bride">
                                            <img src={bride} alt="groom" class="img-responsive" />
                                        </div>
                                        <div class="desc-bride">
                                            <h3>Phươngdepgai</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="part-3"
                    style={{
                        height: '100vh',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                >
                    <div className='scroll-bg'></div>
                </div>
            </Col>
            <Col span={4}>
                <Anchor
                    replace
                    items={[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title:
                                <div
                                    style={{
                                        fontFamily: ["Sacramento", "Arial", "serif"],
                                        fontSize: "40px"
                                    }}>
                                    <a>Wedding<strong>.</strong></a>
                                </div>
                            ,
                        },
                        // {
                        //   key: 'part-1',
                        //   href: '#part-1',
                        //   title: 'Part 1',
                        // },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title:
                                <div
                                    style={{
                                        // fontFamily: ["Sacramento" , "Arial" , "serif"],
                                        textTransform: "uppercase",
                                        color: "black",
                                        background: 'white'
                                    }}>
                                    <a style={{
                                        textTransform: "uppercase",
                                        color: "black",
                                    }}>Story<strong>.</strong></a>
                                </div>
                            ,
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: 'Part 3',
                        },
                    ]}
                />
            </Col>
        </Row>
    )
};
export default MainPageAnchor;
