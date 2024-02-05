import React, { useState, useEffect, useRef } from 'react'
import { Anchor, Col, Modal, Row } from 'antd';
import '../App.css'
import './MainPageAnchor.css'
import './revealScroll.css'
import ScrollToTop from "react-scroll-to-top";
// import bg from "../../public/assets/images/img_bg_1.jpg";
// import bg2 from "../../public/assets/images/img_bg_2.jpg";
// import bg3 from "../../public/assets/images/img_bg_3.jpg";
// import groom from "../../public/assets/images/groom.jpg";
// import bride from "../../public/assets/images/bride.jpg";
// import cp1 from "../../public/assets/images/couple-1.jpg";
// import cp2 from "../../public/assets/images/couple-2.jpg";
// import cp3 from "../../public/assets/images/couple-3.jpg";
import { Image } from 'antd';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import Map from './MapComponent';
import MapComponent from './MapComponent';
const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};
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
                </section><span style={{ fontSize: '33px', color: 'pink', position: 'relative', top: '-19px' }}>・</span>
                <section class="stage">
                    <figure class="ball bubble" style={{ padding: "22px", fontSize: '34px', backgroundColor: '#F14E95', marginRight: '22px' }}>
                        <div>{zeroPad(hours)}</div>
                        <div style={{ fontSize: '12px' }}>Giờ</div>
                    </figure>
                </section><span style={{ fontSize: '33px', color: 'pink', position: 'relative', top: '-19px' }}>・</span>
                <section class="stage">
                    <figure class="ball bubble" style={{ padding: "22px", fontSize: '34px', backgroundColor: '#F14E95', marginRight: '22px' }}>
                        <div>{zeroPad(minutes)}</div>
                        <div style={{ fontSize: '12px' }}>Phút</div>
                    </figure>
                </section><span style={{ fontSize: '33px', color: 'pink', position: 'relative', top: '-19px' }}>・</span>
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
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-50px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);


    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("#left").forEach((el) => {
                el.classList.remove("slide-out");
                el.classList.add("slide-in");
            });
            ref.current.querySelectorAll("#right").forEach((el) => {
                el.classList.remove("slide-out2");
                el.classList.add("slide-in2");
            });
            ref.current.querySelectorAll(`.fh5co-heading`).forEach((el) => {
                el.classList.remove("slide-up");
                el.classList.add("slide-down");
            });
            console.log(1);
        } else {
            ref.current.querySelectorAll("#left").forEach((el) => {
                el.classList.remove("slide-in");
                el.classList.add("slide-out");
            });
            ref.current.querySelectorAll("#right").forEach((el) => {
                el.classList.remove("slide-in2");
                el.classList.add("slide-out2");
            });
            ref.current.querySelectorAll(`.fh5co-heading`).forEach((el) => {
                el.classList.remove("slide-down");
                el.classList.add("slide-up");
            });
            console.log(2);
        }
    }, [isIntersecting]);

    const [isIntersecting2, setIsIntersecting2] = useState(false);
    const ref2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting2(entry.isIntersecting);
            },
            { rootMargin: "-50px" }
        );
        observer.observe(ref2.current);

        return () => observer.disconnect();
    }, [isIntersecting2]);


    useEffect(() => {
        if (isIntersecting2) {
            ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
                el.classList.remove("slide-out");
                el.classList.add("slide-in");
            });
            // ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-out2");
            //     el.classList.add("slide-in2");
            // });
            // ref2.current.querySelectorAll(`.timeline-badge, .timeline-panel`).forEach((el) => {
            //     el.classList.remove("slide-up");
            //     el.classList.add("slide-down");
            // });
            console.log(1);
        } else {
            // ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            // el.classList.remove("slide-in");
            // el.classList.add("slide-out");
            // });
            // ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-in2");
            //     el.classList.add("slide-out2");
            // });
            // ref2.current.querySelectorAll(`.timeline-badge, .timeline-panel`).forEach((el) => {
            //     el.classList.remove("slide-down");
            //     el.classList.add("slide-up");
            // });
            console.log(2);
        }
    }, [isIntersecting2]);

    const [isIntersecting3, setIsIntersecting3] = useState(false);
    const ref3 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting3(entry.isIntersecting);
            },
            { rootMargin: "-50px" }
        );
        observer.observe(ref3.current);

        return () => observer.disconnect();
    }, [isIntersecting3]);


    useEffect(() => {
        if (isIntersecting3) {
            // ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-out");
            //     el.classList.add("slide-in");
            // });
            ref3.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
                el.classList.remove("slide-out2");
                el.classList.add("slide-in2");
            });
            // ref3.current.querySelectorAll(`.timeline-badge, .timeline-panel`).forEach((el) => {
            //     el.classList.remove("slide-up");
            //     el.classList.add("slide-down");
            // });
            console.log(1);
        } else {
            // ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-in");
            //     el.classList.add("slide-out");
            // });
            // ref3.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-in2");
            //     el.classList.add("slide-out2");
            // });
            // ref3.current.querySelectorAll(`.timeline-badge, .timeline-panel`).forEach((el) => {
            //     el.classList.remove("slide-down");
            //     el.classList.add("slide-up");
            // });
            console.log(2);
        }
    }, [isIntersecting3]);

    const [isIntersecting4, setIsIntersecting4] = useState(false);
    const ref4 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting4(entry.isIntersecting);
            },
            { rootMargin: "-50px" }
        );
        observer.observe(ref4.current);

        return () => observer.disconnect();
    }, [isIntersecting4]);


    useEffect(() => {
        if (isIntersecting4) {
            ref4.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
                el.classList.remove("slide-out");
                el.classList.add("slide-in");
            });
            // ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-out2");
            //     el.classList.add("slide-in2");
            // });
            // ref4.current.querySelectorAll(`.timeline-badge, .timeline-panel`).forEach((el) => {
            //     el.classList.remove("slide-up");
            //     el.classList.add("slide-down");
            // });
            console.log(1);
        } else {
            // ref4.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-in");
            //     el.classList.add("slide-out");
            // });
            // ref2.current.querySelectorAll(".timeline-badge, .timeline-panel").forEach((el) => {
            //     el.classList.remove("slide-in2");
            //     el.classList.add("slide-out2");
            // });
            // ref4.current.querySelectorAll(`.timeline-badge, .timeline-panel`).forEach((el) => {
            //     el.classList.remove("slide-down");
            //     el.classList.add("slide-up");
            // });
            console.log(2);
        }
    }, [isIntersecting4]);

    const scrollContainer = document.querySelectorAll(".scrollmenu");


    (scrollContainer) && scrollContainer.forEach((el) => {
        el.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            el.scrollLeft += evt.deltaY  * -0.01;
        });
    });

    const parentContainerWidth = document.querySelector(".scrollmenu")?.offsetWidth;
    let elementCount = Array.prototype.filter.call(document.querySelectorAll('#image'), (node) => {
        console.log(node)
        return node.offsetLeft >= parentContainerWidth ?? 0;
    });
    console.log(elementCount)

    return (
        <>
   
        {/* <Col span={4}> */}
        <div>
                <Anchor
                style={{
                    position: 'absolute',
                    zIndex: '9999'
                }}
                 direction="horizontal"
                    // replace
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
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title:
                                    <a style={{
                                        textTransform: "uppercase",
                                        color: "#F14E95",
                                        fontFamily: 'DFVNBoris'
                                    }}>Story</a>
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title:  <a style={{
                                textTransform: "uppercase",
                                color: "#F14E95",
                                fontFamily: 'DFVNBoris'
                            }}>part-3</a>
                        },
                        {
                            key: 'part-4',
                            href: '#part-4',
                            title:  <a style={{
                                textTransform: "uppercase",
                                color: "#F14E95",
                                fontFamily: 'DFVNBoris'
                            }}>part-4</a>
                        },
                        {
                            key: 'part-5',
                            href: '#part-5',
                            title:  <a style={{
                                textTransform: "uppercase",
                                color: "#F14E95",
                                fontFamily: 'DFVNBoris'
                            }}>part-5</a>
                        }, {
                            key: 'part-6',
                            href: '#part-6',
                            title:  <a style={{
                                textTransform: "uppercase",
                                color: "#F14E95",
                                fontFamily: 'DFVNBoris'
                            }}>part-6</a>
                        }, {
                            key: 'part-7',
                            href: '#part-7',
                            title:  <a style={{
                                textTransform: "uppercase",
                                color: "#F14E95",
                                fontFamily: 'DFVNBoris'
                            }}>part-7</a>
                        },
                    ]}
                />
                </div>
            {/* </Col> */}
        {/* <Row> */}
            <div className='App'>
                <div
                    id="part-1"
                    style={{
                        height: '100vh',
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <div id="fh5co-header" class="fh5co-cover fixed-bg" role="banner"
                        style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }} data-stellar-background-ratio="0.5">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 text-center">
                                    <div class="display-t">
                                        <div class="display-tc animate-box" data-animate-effect="fadeIn">
                                            <h1>Huy &amp; Phương</h1>
                                            <br></br>
                                            <h2>Chúng tôi sắp cứi nhau rồi~</h2>
                                            <div class="simply-countdown simply-countdown-one"></div>
                                            <Countdown
                                                date='2024-01-27T00:00:00'
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
                        height: '70vh',
                        background: 'rgba(0,255,0,0.02)',
                    }}

                >
                    {/* <div className='scroll-bg'></div> */}
                    <div id="fh5co-header" class="fh5co-cover fixed-bg" role="banner"
                        // style={{ backgroundImage: `url(${bg2})` }} 
                        style={{ backgroundColor: "rgb(255 193 193)", height: '70vh' }}
                        data-stellar-background-ratio="0.5">
                        <div id="fh5co-couple" ref={ref}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                        <h2>Xin chào!</h2>
                                        <h3>Sài gòn, 1 Tháng 1, 2024</h3>
                                        <p style={{ color: 'white' }}>Trân trọng mời bạn đến chơi dứ chúng tôi</p>
                                    </div>
                                </div>
                                <div class="couple-wrap animate-box">
                                    <div class="couple-half" id="left">
                                        <div class="groom">
                                            <img src={'../assets/images/img_bg_1.jpg'} alt="groom" class="img-responsive" />
                                        </div>
                                        <div class="desc-groom">
                                            <h3>huydepzai</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                        </div>
                                    </div>
                                    <p class="heart text-center"><i class="icon-heart2"></i></p>
                                    <div class="couple-half" id="right">
                                        <div class="bride">
                                            <img src={'../assets/images/img_bg_1.jpg'} alt="groom" class="img-responsive" />
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
                        height: '130vh',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                >
                    <div id="fh5co-event" class="fh5co-bg" style={{ backgroundImage: `url(../assets/images/img_bg_3.jpg)`, height: '100%' }} >
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row" style={{ paddingTop: '70px' }}>
                                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                    <span>Our Special Events</span>
                                    <h2>Wedding Events</h2>
                                </div>
                            </div>
                            <div class="row">
                                {/* <div class="display-t">
                                    <div class="display-tc"> */}
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="col-md-6 col-sm-6 text-center">
                                        <div class="event-wrap animate-box">
                                            <h3>Main Ceremony</h3>
                                            <div class="event-col">
                                                <i class="icon-clock"></i>
                                                <span>4:00 PM</span>
                                                <span>6:00 PM</span>
                                            </div>
                                            <div class="event-col">
                                                <i class="icon-calendar"></i>
                                                <span>Monday 28</span>
                                                <span>November, 2016</span>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 text-center">
                                        <div class="event-wrap animate-box">
                                            <h3>Wedding Party</h3>
                                            <div class="event-col">
                                                <i class="icon-clock"></i>
                                                <span>7:00 PM</span>
                                                <span>12:00 AM</span>
                                            </div>
                                            <div class="event-col">
                                                <i class="icon-calendar"></i>
                                                <span>Monday 28</span>
                                                <span>November, 2016</span>
                                            </div>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                    {/* </div>
                                    </div> */}
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-md-10 col-md-offset-1">

                                    <div style={{
                                        // left: '29px',
                                        height: '30vh',
                                        width: '96%',
                                        position: 'absolute',
                                        border: '2px solid #C8CACC',
                                        marginTop: '20px'
                                    }}>
                                        <MapComponent
                                        >
                                        </MapComponent>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="part-4"
                    style={{
                        height: '140vh',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                >
                    <div id="fh5co-couple-story">
                        <div class="container">
                            <div class="row" style={{ paddingTop: '70px' }}>
                                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                    <span>We Love Each Other</span>
                                    <h2>Our Story</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-md-offset-0" >
                                    <ul class="timeline animate-box">
                                        <li class="animate-box" ref={ref2}>
                                            {/* <div id='ab1'> */}
                                            <div class="timeline-badge slide-out" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}></div>
                                            <div class="timeline-panel slide-out">
                                                <div class="timeline-heading">
                                                    <h3 class="timeline-title">First We Meet</h3>
                                                    <span class="date">December 25, 2015</span>
                                                </div>
                                                <div class="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                    <Image.PreviewGroup
                                                        preview={{
                                                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                        }}
                                                    >
                                                        <div className='scrollmenu' id="style-3">
                                                            <Image id='image' width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image id='image'
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image id='image' width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image id='image'
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image id='image' width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image id='image'
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image id='image' width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image id='image'
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image id='image' width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image id='image'
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image id='image' width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image id='image'
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                        </div>
                                                    </Image.PreviewGroup>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </li>
                                        <li class="timeline-inverted animate-box" ref={ref3}>
                                            {/* <div id='ab2'> */}
                                            <div class="timeline-badge slide-out2" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}></div>
                                            <div class="timeline-panel slide-out2">
                                                <div class="timeline-heading">
                                                    <h3 class="timeline-title">First Date</h3>
                                                    <span class="date">December 28, 2015</span>
                                                </div>
                                                <div class="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                    <Image.PreviewGroup
                                                        preview={{
                                                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                        }}
                                                    >
                                                        <div className='scrollmenu' id="style-3">
                                                            <Image width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                            <Image width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                                            <Image
                                                                width={50}
                                                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                                            />
                                                        </div>
                                                    </Image.PreviewGroup>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </li>
                                        <li class="animate-box" ref={ref4}>
                                            {/* <div id='ab3'> */}
                                            <div class="timeline-badge slide-out" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}></div>
                                            <div class="timeline-panel slide-out">
                                                <div class="timeline-heading">
                                                    <h3 class="timeline-title">In A Relationship</h3>
                                                    <span class="date">January 1, 2016</span>
                                                </div>
                                                <div class="timeline-body">
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="part-5"
                    style={{
                        height: '170vh',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                >
                    <div id="fh5co-gallery" class="fh5co-section-gray">
                        <div class="container">
                            <div class="row" style={{ paddingTop: '70px' }}>
                                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                    <span>Our Memories</span>
                                    <h2>Wedding Gallery</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div class="row row-bottom-padded-md">
                                <div class="col-md-12">
                                    <ul id="fh5co-gallery-list">

                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a onClick={() => setOpen(true)}>
                                                <div class="case-studies-summary">
                                                    <span>14 Photos</span>
                                                    <h2>Two Glas of Juice</h2>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-2">
                                                <div class="case-studies-summary">
                                                    <span>30 Photos</span>
                                                    <h2>Timer starts now!</h2>
                                                </div>
                                            </a>
                                        </li>


                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-3">
                                                <div class="case-studies-summary">
                                                    <span>90 Photos</span>
                                                    <h2>Beautiful sunset</h2>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-4">
                                                <div class="case-studies-summary">
                                                    <span>12 Photos</span>
                                                    <h2>Company's Conference Room</h2>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-3">
                                                <div class="case-studies-summary">
                                                    <span>50 Photos</span>
                                                    <h2>Useful baskets</h2>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-4">
                                                <div class="case-studies-summary">
                                                    <span>45 Photos</span>
                                                    <h2>Skater man in the road</h2>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-4">
                                                <div class="case-studies-summary">
                                                    <span>35 Photos</span>
                                                    <h2>Two Glas of Juice</h2>
                                                </div>
                                            </a>
                                        </li>

                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-5">
                                                <div class="case-studies-summary">
                                                    <span>90 Photos</span>
                                                    <h2>Timer starts now!</h2>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="one-third animate-box" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)` }}>
                                            <a href="#" class="color-6">
                                                <div class="case-studies-summary">
                                                    <span>56 Photos</span>
                                                    <h2>Beautiful sunset</h2>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal
                        title="Modal 1000px width"
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={1000}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>
                </div>
                <div
                    id="part-6"
                    style={{
                        height: '100vh',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                >
                    <div id="fh5co-event" class="fh5co-bg" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)`, height: '100%' }} >
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row" style={{ paddingTop: '30px' }}>
                                <div style={{ marginBottom: '0' }} class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                    <Image
                                    preview={false}
                                        width={140}
                                        src={'../assets/images/sec-title-flower.png'}
                                    />
                                    <h2>Hộp mừng cưới</h2>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                {/* <div class="display-t">
                                    <div class="display-tc"> */}
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="col-md-6 col-sm-6 text-center">
                                        <div class="event-wrap animate-box"
                                            style={{
                                                backgroundColor: 'white',
                                                border: '4px solid #C89D9C',
                                                color: 'black'
                                            }}>
                                            <h3 style={{ color: 'black' }}>Mừng cưới đến chú rể</h3>
                                            <div class="">
                                                <Image width={200} src={`https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/qrcode-parser.png?fit=377%2C346&ssl=1`}></Image>
                                            </div>
                                            <div>Ngân hàng: XXX</div>
                                            <div>Tên tài khoản: XXXX</div>

                                            <div>Số tài khoản: XXXXX</div>

                                            <div>Chi nhánh: XX</div>

                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 text-center">
                                        <div class="event-wrap animate-box"
                                            style={{
                                                backgroundColor: 'white',
                                                border: '4px solid #C89D9C',
                                                color: 'black'
                                            }}>
                                            <h3 style={{ color: 'black' }}>Mừng cưới đến cô dâu</h3>
                                            <div class="">
                                                <Image width={200} src={`https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/qrcode-parser.png?fit=377%2C346&ssl=1`}></Image>
                                            </div>
                                            <div>Ngân hàng: XXX</div>
                                            <div>Tên tài khoản: XXXX</div>

                                            <div>Số tài khoản: XXXXX</div>

                                            <div>Chi nhánh: XXX</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    id="part-7"
                    style={{
                        height: '60vh',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                >àasfsdv</div>
            </div>
            <ScrollToTop style={{
        // position:'relative',
        paddingTop: '6px'
    }} smooth />
        {/* </Row> */}
        </>
    )
};
export default MainPageAnchor;
