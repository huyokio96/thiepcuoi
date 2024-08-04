import React, { useState, useEffect, useRef, useCallback } from 'react'
import Slider from "react-slick";
import { Anchor, Modal, Tabs, Carousel as Carousel1 } from 'antd';
import '../App.css'
import './MainPageAnchor.css'
import './revealScroll.css'
import ScrollToTop from "react-scroll-to-top";
import { stagger, useAnimate, animate } from "framer-motion";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Gallery from "react-photo-gallery";
import ResponsiveGallery from "react-responsive-gallery";
import Carousel, { Modal as Modal1, ModalGateway } from "react-images";
import PhotoAlbum from "react-photo-album";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
// import bg from "../../public/assets/images/img_bg_1.jpg";
// import bg2 from "../../public/assets/images/img_bg_2.jpg";
// import bg3 from "../../public/assets/images/img_bg_3.jpg";
// import groom from "../../public/assets/images/groom.jpg";
// import bride from "../../public/assets/images/bride.jpg";
// import cp1 from "../../public/assets/images/couple-1.jpg";
// import cp2 from "../../public/assets/images/couple-2.jpg";
// import cp3 from "../../public/assets/images/couple-3.jpg";
import { Image } from 'antd';
import Countdown, { zeroPad } from 'react-countdown';
import CommentSys from '../addOn/commentSys/CommentSys';
import base, { providers, auth } from './base' //dependency injection
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const photos = [
    { src: "../assets/images/cauhon1.jpg" },
    { src: "../assets/images/cauhon2.jpg" },
];
const photos1 = [
    {
        src: "../assets/images/bienho1.jpg",
        width: 4,
        height: 3,
    },
    {
        src: "../assets/images/damngo1.jpg",
        width: 1,
        height: 1
    },
    {
        src: "../assets/images/damngo2.jpg",
        width: 4,
        height: 3
    },
    {
        src: "../assets/images/dichoi1.jpg",
        width: 4,
        height: 3
    },
    {
        src: "../assets/images/dichoi2.jpg",
        width: 1,
        height: 1
    },
    {
        src: "../assets/images/HAQ_0186.jpg",
        width: 5,
        height: 3
    }
];
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <a>winner</a>;
    } else {
        // Render a countdown
        // const days = hours / 24;
        return <div style={{ margin: '30px' }}>
            <span style={{ display: 'inline' }}>
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

const rendererd = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <a>winner</a>;
    } else {
        return <span>
            {days}
        </span>;
    }
};

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const rendererhour = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <a>winner</a>;
    } else {
        return <span>
            {hours}
        </span>;
    }
};

const renderermn = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <a>winner</a>;
    } else {
        return <span>
            {minutes}
        </span>;
    }
};

const renderersd = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <a>winner</a>;
    } else {
        return <span>
            {seconds}
        </span>;
    }
};



const MainPageAnchor = () => {
    AOS.init();
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const [showElement1, setShowElement1] = useState(true);
    const [showElement2, setShowElement2] = useState(false);
    const [showElement3, setShowElement3] = useState(false);
    const [showElement4, setShowElement4] = useState(false);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const [nav3, setNav3] = useState(null);
    const [nav4, setNav4] = useState(null);
    let sliderRef3 = useRef(null);
    let sliderRef4 = useRef(null);

    const [nav5, setNav5] = useState(null);
    const [nav6, setNav6] = useState(null);
    let sliderRef5 = useRef(null);
    let sliderRef6 = useRef(null);
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        setNav3(sliderRef3);
        setNav4(sliderRef4);
        setNav5(sliderRef5);
        setNav6(sliderRef6);
        setTimeout(function () {
            setShowElement1(false);
        }, 15000);

        setTimeout(function () {
            setShowElement2(true);
            setTimeout(function () {
                setShowElement2(false);
                setShowElement3(true);
                setTimeout(function () {
                    setShowElement3(false);
                    setShowElement4(true);
                    setTimeout(function () {
                        setShowElement4(false);
                        setOpen(!open)
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);

    }, []);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const randomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const [scope, animate] = useAnimate();



    const [open, setOpen] = useState(true);
    const [openDonate, setOpenDonate] = useState(false);
    const [openMap1, setOpenMap1] = useState(false);
    const [openMap2, setOpenMap2] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);


    const scrollContainer = document.querySelectorAll(".scrollmenu");


    (scrollContainer) && scrollContainer.forEach((el) => {
        el.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            el.scrollLeft += evt.deltaY * -0.01;
        });
    });

    const [openMenu, setOpenMenu] = useState(false);

    const items = [
        {
            key: '1',
            label: 'Đính hôn',
            children: <>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Image
                        width={'100%'}
                        height={'100%'}
                        src="../assets/images/HAQ_0261.jpg"
                    />
                    <Image
                        width={'50%'}
                        src="../assets/images/HAQ_0488.jpg"
                    />
                    <Image
                        width={'50%'}
                        src="../assets/images/HAQ_0165.jpg"
                    />
                    <Image
                        width={'30%'}
                        src="../assets/images/HAQ_0395.jpg"
                    /></Image.PreviewGroup>
            </>,
        },
        {
            key: '2',
            label: 'Pre-Wedding',
            children: <>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Image
                        width={'50%'}
                        height={'100%'}
                        src="../assets/images/HAQ_0261.jpg"
                    />
                    <Image
                        width={'50%'}
                        src="../assets/images/HAQ_0172.jpg"
                    />
                    <Image
                        width={'40%'}
                        src="../assets/images/HAQ_0224.jpg"
                    />
                    <Image
                        width={'30%'}
                        src="../assets/images/HAQ_0304.jpg"
                    /></Image.PreviewGroup>
            </>,
        },
        {
            key: '3',
            label: 'Lễ gia tiên',
            children: <>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Image
                        width={'30%'}
                        height={'100%'}
                        src="../assets/images/HAQ_0304.jpg"
                    />
                    <Image
                        width={'50%'}
                        src="../assets/images/HAQ_0565.jpg"
                    />
                    <Image
                        width={'90%'}
                        src="../assets/images/hinhdep1.jpg"
                    />
                    <Image
                        width={'60%'}
                        src="../assets/images/dichoi2.jpg"
                    /></Image.PreviewGroup>
            </>,
        },

    ];

    return (
        <>
            <nav class="navbar bg-white shadow-sm py-1" style={{
                height: '29px',
                borderRadius: '0px',
                position: 'fixed',
                zIndex: 1039,
                boxShadow: '1px 9px 22px rgb(8 11 0 / 0.2) !important',
                maxWidth: 'none',
                minHeight: '27px',
                height: '48px'
            }}>
                <div class="container-fluid">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                        <a class="section-title navbar-brand" href="#">H &amp; P</a>
                        <button class="navbar-toggler rounded-0 border-0 p-0" onClick={() => setOpenMenu(!openMenu)} type="button">
                            <i class="">
                                <img style={{
                                    width: '29px',
                                    height: '27px',
                                    marginTop: '-11px'
                                }} class="access-icon" src="../assets/images/MenuBlack.png" alt="" />
                            </i>
                        </button>
                    </div>
                </div>
            </nav>
            <div class="offcanvas-backdrop fade show" onClick={() => setOpenMenu(!openMenu)}
                style={!openMenu ? {
                    transition: 'opacity .3s ease-in-out',
                    opacity: 0,
                    left: '9999px',
                    transition: 'left .3s ease-in-out',
                } : {
                    opacity: 0.5,
                    left: '0px',
                    transition: 'left .3s ease-in-out',
                    transition: 'opacity .3s ease-in-out',
                }}
            ></div>
            <div class="offcanvas-end offcanvas-menu"
                style={!openMenu ? {
                    width: '189px',
                    height: 'fit-content',
                    position: 'fixed',
                    right: '-999px',
                    zIndex: '2000',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    backgroundColor: 'rgb(255 255 255)',
                    backgroundClip: 'padding-box',
                    outline: 0,
                    transition: 'right .3s linear',
                } : {
                    width: '189px',
                    height: 'fit-content',
                    position: 'fixed',
                    right: '0px',
                    zIndex: '2000',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    backgroundColor: 'rgb(255 255 255)',
                    backgroundClip: 'padding-box',
                    outline: 0,
                    opacity: 1,
                    transition: 'right .3s linear',
                }}
                tabindex="-1" data-bs-scroll="true" data-bs-backdrop="true" aria-labelledby="offcanvasNavbarLabel" aria-modal="true" role="dialog">
                <div class="offcanvas-body" style={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                }}>
                    <ul class="navbar-nav justify-content-end flex-grow-1">
                        <div style={{
                            paddingRight: '27px',
                            marginTop: '14px'
                        }} class="offcanvas-header justify-content-end">
                            <button type="button" class="navbar-toggler rounded-0 border-0 p-0" onClick={() => setOpenMenu(!openMenu)} aria-label="">
                                <i class="">
                                    <img style={{
                                        width: '29px',
                                        height: '27px',
                                        marginTop: '-11px'
                                    }} class="access-icon" src="../assets/images/MenuBlack.png" alt="" />
                                </i>
                            </button>
                        </div>
                        <li class="nav-item">
                            <a class="section-sub-title nav-link active" aria-current="page" href="#video">Video cưới</a>
                        </li>

                        <li class="nav-item">
                            <a class="section-sub-title nav-link active" aria-current="page" href="#part-5-4">Album Hình Cưới</a>
                        </li>

                        <li class="nav-item">
                            <a class="section-sub-title nav-link active" aria-current="page" href="#story">The Love Story</a>
                        </li>

                        <li class="nav-item">
                            <a class="section-sub-title nav-link active" aria-current="page" href="#invitation">Lời ngỏ</a>
                        </li>

                        <li class="nav-item">
                            <a class="section-sub-title nav-link" href="#event">Sự Kiện Cưới</a>
                        </li>

                        <li class="nav-item">
                            <a class="section-sub-title nav-link" href="#couple">Cô Dâu &amp; Chú Rể</a>
                        </li>
                        <li class="nav-item">
                            <a class="section-sub-title nav-link" href="#part-8">Lời chúc</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>


            </div>
            <div className='App' data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
                <div
                    id="part-1"
                    style={{
                        paddingTop: '40px',
                        height: '100vh',
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >

                    <section class="banner-section">
                        <div class="main_area p-3">
                            <div class="day_wrapper aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                <div class="day_area p-1 text-center">
                                    <div class="section-sub-title d-flex day_area_inner text-center p-2 py-3">
                                        <p class="m-0 we"> We're</p>
                                        <div class="wrap-text">
                                            <p class="day m-0">10</p>
                                            <p class="month m-0">11</p>
                                        </div>
                                        <p class="m-0">Getting Married</p>
                                    </div>
                                </div>
                            </div>
                            <div class="main_image_area pt-4 pb-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                <div class="main_image">
                                    <img src="../assets/images/HAQ_0224.jpg" />
                                </div>
                                <img class="bg-title" src="https://hungandtram.iwedding.info/templates/template135/img/main_title.png" alt="" />
                                <div class="wrap-name pt-7 px-5 title" style={{ marginTop: '-20%' }}>
                                    Huy <small>&amp;</small> Phương
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <div
                    id="part-2"
                    style={{

                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >

                    <section class="py-4 accessibilities-section">
                        <div class="container-fluid">
                            <div class="row gx-2 justify-content-center">
                                <div class="col-sm-4">
                                    <a href="#part-7" class="w-100 mb-1 px-2 accessibility-btn btn btn-secondary aos-init aos-animate" data-aos="fade-right">
                                        <span class="content-button">
                                            <img class="access-section-icon" src="https://cdn.biihappy.com/ziiweb/images/static/common/wishes.png" alt="access-btn" /> Gửi lời chúc
                                        </span>
                                    </a>
                                </div>
                                <div class="col-sm-4">
                                    <a onClick={() => setOpenDonate(true)} style={{ color: 'white' }} class="w-100 mb-1 accessibility-btn btn btn-secondary buttonDonate aos-init aos-animate" data-aos="fade-left">
                                        <span class="content-button">
                                            <img class="access-section-icon" src="https://cdn.biihappy.com/ziiweb/images/static/common/money_bag.png" alt="access-btn" /> Mừng cưới
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
                <div
                    id="part-3"
                    style={{
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <section class="py-5 video-section section-bg-affect" id="video">
                        <div class="container-fluid">
                            <h2 class="section-title text-center aos-init aos-animate" data-aos="fade-up">
                                Video cưới
                            </h2>
                            <h3 class="section-sub-title mb-4 text-center aos-init aos-animate" data-aos="fade-up">
                                There is so much happiness that we shared together.
                            </h3>
                            <div class="ratio ratio-16x9 aos-init aos-animate" data-aos="zoom-in">
                                <iframe width="100%" src="https://www.youtube.com/embed/wqAgycAWVd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </section>

                </div>
                <div
                    id="part-4"
                    style={{
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <section class="py-5 section-sub-title weddingdate-section section-bg-affect" id="weddingdate">
                        <div class="container-fluid">
                            <div class="w-100">
                                <div class="mini_calendar m-auto pb-3 aos-init aos-animate" data-aos="fade-up-right">
                                    <div class="mini_calendar">
                                        <table> <caption class="calendar-month">Tháng 11 /  2024</caption> </table>
                                        <table>
                                            <tbody><tr><th abbr="Monday">Thứ 2</th><th abbr="Tuesday">Thứ 3</th><th abbr="Wednesday">Thứ 4</th><th abbr="Thursday">Thứ 5</th><th abbr="Friday">Thứ 6</th><th abbr="Saturday">Thứ 7</th><th abbr="Sunday">CN</th></tr>
                                                <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>1</td><td>2</td><td>3</td></tr>
                                                <tr><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td><div id="today">10</div></td></tr>
                                                <tr><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr>
                                                <tr><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td></tr>
                                                <tr><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div class="countdown aos-init aos-animate" data-aos="fade-up-left">
                                    <div class="m-auto" id="clock" data-date="2024-06-09" data-text-day="Ngày" data-text-hour="Giờ" data-text-minute="Phút" data-text-second="Giây">
                                        <div class="box"><div> <Countdown
                                            date='2024-11-10T00:00:00'
                                            renderer={rendererd}
                                            daysInHours={true}
                                        /></div> <span>Ngày</span></div><div class="box"><div><Countdown
                                            date='2024-11-10T00:00:00'
                                            renderer={rendererhour}
                                            daysInHours={true}
                                        /></div> <span>Giờ</span> </div><div class="box"><div><Countdown
                                            date='2024-11-10T00:00:00'
                                            renderer={renderermn}
                                            daysInHours={true}
                                        /></div> <span>Phút</span> </div><div class="box"><div><Countdown
                                            date='2024-11-10T00:00:00'
                                            renderer={renderersd}
                                            daysInHours={true}
                                        /></div> <span>Giây</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <div
                    id="part-5"
                    style={{
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <section class="py-5 story-section section-bg-affect" id="story">
                        <div class="container-fluid">
                            <h2 data-aos="fade-up" class="section-title text-center aos-init aos-animate">
                                The Love Story
                            </h2>
                            <h3 data-aos="fade-up" class="section-sub-title mb-4 text-center aos-init aos-animate">
                                Love you to the moon and back
                            </h3>
                            <div class="story-content">
                                <div class="timeline">
                                    <div class="outer">
                                        <div class="timeline-card aos-init aos-animate" data-aos="fade-right">
                                            <div class="info">
                                                <span class="date">Aug 06 2022</span>
                                                <h3 class="title">Sự kì diệu của nhân duyên</h3>
                                                <p>
                                                    Bạn có tin vào sự kì diệu của định mệnh?<br />
                                                    Chỉ một tin nhắn vu vơ ngày hôm đó, lại dẫn lối hai con người xa lạ trở thành vợ chồng ngày hôm nay.<br />
                                                    Tháng 8/2022 khi Hùng về Việt Nam thăm gia đình. <br />
                                                    Ban đầu chỉ là nhờ cô gái Sài Gòn ấy giới thiệu cho vài quán ăn ngon, nhưng không ngờ, Hùng bị thu hút bởi Trâm ngay từ lần đầu gặp mặt. Cô gái nhỏ bé, một mình tự lập ở Sài Gòn đất chật người đông, sao mà giống với hình ảnh của anh khi vừa đi du học 10 năm về trước.<br />
                                                    Hai mảnh ghép đồng điệu gặp nhau, hai con người xa lạ dần trở nên thân thiết và là động lực cùng nhau vượt qua thử thách mỗi ngày trong cuộc sống.
                                                </p>
                                                <div class="img-holder">

                                                    <div className="slider-container">
                                                        <Slider arrows={false} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                                                            <div>
                                                                <Image id='image' src={'../assets/images/dichoi2.jpg'} />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image id='image' src={'../assets/images/dichoi2.jpg'} />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                        </Slider>
                                                        <Slider
                                                            className='oke1'
                                                            asNavFor={nav1}
                                                            ref={slider => (sliderRef2 = slider)}
                                                            slidesToShow={8}
                                                            swipeToSlide={true}
                                                            focusOnSelect={true}
                                                            style={{
                                                                padding: '13px', marginTop: '-10px',
                                                                backgroundColor: '#333333'
                                                            }}
                                                        >
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                        </Slider>
                                                    </div>


                                                </div>
                                                {/* <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <div style={{ marginTop: '-17px' }} className='scrollmenu' id="style-3">
                                                        <Image id='image' width={50} src={'../assets/images/img_bg_1.jpg'} />
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
                                                </Image.PreviewGroup> */}
                                            </div>
                                        </div>
                                        <div class="timeline-card aos-init aos-animate" data-aos="fade-left">
                                            <div class="info">
                                                <span class="date">Apr 26 2023</span>
                                                <h3 class="title">She Say Yes</h3>
                                                <p>
                                                    Yêu một người cách mình nửa vòng trái đất là một trải nghiệm không hề dễ. Nhưng mọi sự nỗ lực của Hùng và Trâm đã được đền đáp xứng đáng.<br />
                                                    26 tháng 04 năm 2023. Buổi chiều hoàng hôn Seoul đã chứng kiến một lời hứa bên nhau trọn đời ♥️
                                                </p>
                                                <div class="img-holder">
                                                    <div className="slider-container">
                                                        <Slider arrows={false} asNavFor={nav4} ref={slider => (sliderRef3 = slider)}>
                                                            <div>
                                                                <Image id='image' src={'../assets/images/cauhon2.jpg'} />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image id='image' src={'../assets/images/dichoi2.jpg'} />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                        </Slider>
                                                        <Slider
                                                            className='oke1'
                                                            asNavFor={nav3}
                                                            ref={slider => (sliderRef4 = slider)}
                                                            slidesToShow={8}
                                                            swipeToSlide={true}
                                                            focusOnSelect={true}
                                                            style={{
                                                                padding: '13px', marginTop: '-10px',
                                                                backgroundColor: '#333333'
                                                            }}
                                                        >
                                                            <div>
                                                                <img src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                        </Slider>
                                                    </div>
                                                </div>
                                                {/* <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <div style={{ marginTop: '-17px' }} className='scrollmenu' id="style-3">
                                                        <Image id='image' width={50} src={'../assets/images/cauhon2.jpg'} />
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
                                                </Image.PreviewGroup> */}
                                            </div>
                                        </div>
                                        <div class="timeline-card aos-init aos-animate" data-aos="fade-right">
                                            <div class="info">
                                                <span class="date">Jun 01 2024</span>
                                                <h3 class="title">We Do</h3>
                                                <p>
                                                    Finally, vượt qua bao thử thách. Tụi mình cưới rồi!
                                                </p>
                                                <div class="img-holder">
                                                    <div className="slider-container">
                                                        <Slider arrows={false} asNavFor={nav6} ref={slider => (sliderRef5 = slider)}>
                                                            <div>
                                                                <Image id='image' src={'../assets/images/HAQ_0261.jpg'} />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image id='image' src={'../assets/images/dichoi2.jpg'} />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <Image src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                        </Slider>
                                                        <Slider
                                                            className='oke1'
                                                            asNavFor={nav5}
                                                            ref={slider => (sliderRef6 = slider)}
                                                            slidesToShow={8}
                                                            swipeToSlide={true}
                                                            focusOnSelect={true}
                                                            style={{
                                                                padding: '13px', marginTop: '-10px',
                                                                backgroundColor: '#333333'
                                                            }}
                                                        >
                                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                                <img src={'../assets/images/HAQ_0261.jpg'} alt="" />
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'center' }}>

                                                                <img src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/img_bg_1.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/cauhon2.jpg'} alt="" />
                                                            </div>
                                                            <div>
                                                                <img src={'../assets/images/dichoi2.jpg'} alt="" />
                                                            </div>
                                                        </Slider>
                                                    </div>
                                                </div>
                                                {/* <img src={'../assets/images/HAQ_0261.jpg'} alt="" />
                                                </div> */}
                                                {/* <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >
                                                    <div style={{ marginTop: '-17px' }} className='scrollmenu' id="style-3">
                                                        <Image id='image' width={50} src={'../assets/images/img_bg_1.jpg'} />
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
                                                </Image.PreviewGroup> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    id="part-5-1"
                    style={{
                        // height: '170vh',
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <section class="py-5 invitation-section section-bg-affect" id="invitation">
                        <div class="container-fluid">
                            <div class="w-100">
                                <div data-aos="fade-up" class="invation-title aos-init aos-animate">
                                    <h3 class="text-center title m-0">Lời ngỏ</h3>
                                    <p class="text-center m-0">

                                    </p>
                                </div>
                                <div>
                                    <div data-aos="fade-up" class="invitation-content my-5 text-center sub-title aos-init aos-animate">
                                        Cảm ơn mọi người đã click vào thiệp cưới online của chúng mình.<br />
                                        Nơi đây sẽ là những thông tin và hình ảnh của chúng mình cho ngày cưới.<br />
                                        Chúng mình mong nhận được lời chúc phúc từ người thân/bạn bè xa gần để đám cưới của tụi mình được diễn ra cách tốt đẹp nhất.<br />
                                        Cô dâu &amp; chú rể xin cảm ơn.
                                    </div>
                                    <div data-aos="fade-up" class="couple-img mb-5 aos-init aos-animate">
                                        <img src={'../assets/images/dichoi1.jpg'} />
                                    </div>
                                    <div data-aos="fade-up" class="section-title invitation-couple text-center my-5 fs-4 aos-init">
                                        <p>*Groom/<span> Đ. Huy</span></p>
                                        <p>*Bride/<span> H. Phương</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    id="part-5-2"
                    style={{
                        // height: '170vh',
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <section class="py-5 event-section section-bg-affect" id="event">
                        <div class="container-fluid">
                            <h2 data-aos="fade-up" class="section-title text-center aos-init aos-animate">
                                Sự Kiện Cưới
                            </h2>
                            <h3 data-aos="fade-up" class="section-sub-title mb-4 text-center aos-init aos-animate">
                                Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!
                            </h3>
                            <div data-aos="flip-right" class="event-item d-flex flex-row p-0 border-0 rounded overflow-hidden aos-init aos-animate">
                                <div class="image-wrap position-relative" style={{ backgroundImage: `url('../assets/images/HAQ_9756.jpg')`, backgroundPositionY: 'top' }}>
                                    <div class="dresscode-colors-wrap w-100">
                                        <div class="dresscode-colors-event">
                                            <span class="tooltip-dresscode">Dress Code</span>
                                            <div class="dresscode-colors-item" style={{ background: '#000000' }}></div>
                                            <div class="dresscode-colors-item" style={{ background: '#ffffff' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="info-wrap p-3" style={{ margin: 'auto' }}>
                                    <h5 class="section-sub-title1">TIỆC CƯỚI NHÀ NỮ</h5>
                                    <strong>11:00 10/11/2024</strong>
                                    <p class="card-text">
                                        Biên Hòa
                                    </p>
                                    <div class="calendar-button" style={{ display: 'none' }}>
                                    </div>
                                    <a style={{ color: 'white', }} onClick={() => setOpenMap1(true)} target="_blank" class="section-sub-title btn btn-sm btn-secondary">Xem bản đồ</a>
                                </div>
                            </div>
                            <Modal
                                centered
                                open={openMap1}
                                onCancel={() => setOpenMap1(false)}
                                cancelText='Đóng'
                                okButtonProps={{ style: { display: 'none' } }}

                                closable={false}
                            >

                                <div id="fh5co-event" class="fh5co-bg" >
                                    <div class="container">
                                        <div class="row" style={{ paddingTop: '30px' }}>
                                            {/* <iframe
                                                // width="450"
                                                // height="250"
                                                frameborder="0" style={{ border: '0' }}
                                                referrerpolicy="no-referrer-when-downgrade"
                                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAI9kPkskayYti5ttrZL_UfBlL3OkMEbvs&q=Eiffel+Tower,Paris+France"
                                                allowfullscreen>
                                            </iframe> */}
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.0919335055453!2d106.82789927843949!3d11.038189467964758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dd5f8a50e57f%3A0x41b0350eff395f3e!2zTmjDs20gdHLhursgVGh1IE5ndXnhu4d0!5e0!3m2!1svi!2s!4v1722595312266!5m2!1svi!2s" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>

                                    </div>
                                </div>

                            </Modal>
                            <div data-aos="flip-left" class="event-item d-flex flex-row p-0 border-0 rounded overflow-hidden aos-init aos-animate">
                                <div class="image-wrap position-relative" style={{ backgroundImage: `url('../assets/images/hinhdep1.jpg')` }}>
                                    <div class="dresscode-colors-wrap w-100">
                                        <div class="dresscode-colors-event">
                                            <span class="tooltip-dresscode">Dress Code</span>
                                            <div class="dresscode-colors-item" style={{ background: '#000000' }}></div>
                                            <div class="dresscode-colors-item" style={{ background: '#ffffff' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="info-wrap p-3" style={{ margin: 'auto' }}>
                                    <h5 class="section-sub-title1">TIỆC CƯỚI NHÀ NAM</h5>
                                    <strong>11:00 17/11/2024</strong>
                                    <p class="card-text">
                                        Pleiku City
                                    </p>
                                    <div class="calendar-button" style={{ display: 'none' }}>
                                    </div>
                                    <a style={{ color: 'white', }} onClick={() => setOpenMap2(true)} target="_blank" class="section-sub-title btn btn-sm btn-secondary">Xem bản đồ</a>
                                </div>
                            </div>

                            <Modal
                                centered
                                open={openMap2}
                                onCancel={() => setOpenMap2(false)}
                                cancelText='Đóng'
                                okButtonProps={{ style: { display: 'none' } }}

                                closable={false}
                            >

                                <div id="fh5co-event" class="fh5co-bg" >
                                    <div class="container">
                                        <div class="row" style={{ paddingTop: '30px' }}>
                                            {/* <iframe
                                                width="450"
                                                height="250"
                                                frameborder="0" style={{ border: '0' }}
                                                referrerpolicy="no-referrer-when-downgrade"
                                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAI9kPkskayYti5ttrZL_UfBlL3OkMEbvs&q=Eiffel+Tower,Paris+France"
                                                allowfullscreen>
                                            </iframe> */}
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.9434481121325!2d107.99724697520953!3d13.972065884429554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1f7fb7bfaaa3%3A0x726024d0dad57943!2zMTEwIFF1eeG6v3QgVGnhur9uLCBQLiBEacOqbiBI4buTbmcsIFRow6BuaCBwaOG7kSBQbGVpa3UsIEdpYSBMYWkgNjAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1722595189308!5m2!1svi!2s" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>

                                    </div>
                                </div>

                            </Modal>
                        </div>
                    </section>
                </div>
                <div
                    id="part-5-3"
                    style={{
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <section class="py-5 couple-section section-bg-affect" id="couple">
                        <div class="container-fluid">
                            <h2 data-aos="fade-up" class="section-title text-center m-0 aos-init aos-animate">
                                Cô Dâu &amp; Chú Rể
                            </h2>

                            <div class="section-title wrap-people mt-5">
                                <div class="member member-groom mb-5">
                                    <div data-aos="flip-left" class="member-image animation mb-3 text-center aos-init aos-animate">
                                        <img src="../assets/images/hinhdep1.jpg" />
                                    </div>
                                    <div class="groom-story d-flex flex-column">
                                        <p class="text-story fs-6 text-center m-0">
                                            Simple man with simple pleasures

                                        </p>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <span data-aos="fade-left" class="member-name m-0 aos-init aos-animate">
                                            Đ. Huy /
                                        </span>
                                        <ul data-aos="fade-up" class="member-contact social-links d-flex p-0 m-0 mx-2 aos-init aos-animate">
                                        </ul>
                                    </div>
                                </div>
                                <div class="member member-bride mt-5">
                                    <div data-aos="flip-right" class="member-image animation mb-3 text-center aos-init">
                                        <img src='../assets/images/HAQ_9756.jpg' />
                                    </div>

                                    <div class="bride-story d-flex flex-column">
                                        <p class="text-story fs-6 text-center m-0">
                                            👰🏻&zwj;♀️💍
                                        </p>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <span data-aos="fade-left" class="member-name m-0 aos-init">
                                            H. Phương /
                                        </span>
                                        <ul data-aos="fade-up" class="member-contact social-links d-flex p-0 m-0 mx-2 aos-init">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    id="part-5-4"
                    style={{
                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >

                    <h2 class="section-title text-center aos-init aos-animate" data-aos="zoom-in-up">
                        Album Hình Cưới
                    </h2>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Image
                            data-aos="zoom-in-up"
                            width={'60%'}
                            height={'100%'}
                            src="../assets/images/HAQ_0261.jpg"
                        />
                        <Image
                            data-aos="fade-left"
                            style={{
                                position: 'relative',
                                top: '-60px'
                            }}
                            width={'40%'}
                            height={'100%'}

                            src="../assets/images/HAQ_0165.jpg"
                        />
                        <Image
                            data-aos="fade-right"
                            style={{
                                position: 'relative',
                                top: '-70px'
                            }}
                            width={'50%'}
                            src="../assets/images/HAQ_0488.jpg"
                        />
                        <Image
                            data-aos="fade-left"
                            width={'50%'}
                            src="../assets/images/HAQ_0395.jpg"
                        />
                        <Image
                            data-aos="fade-up"

                            width={'70%'}
                            src="../assets/images/HAQ_0249.jpg"
                        />
                    </Image.PreviewGroup>
                    {/* <Gallery photos={photos1} id="#gallery"
                        onClick={openLightbox}
                    />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal1 onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos1.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title,
                                    }))}
                                />
                            </Modal1>
                        ) : null}
                    </ModalGateway> */}
                    <div class="text-center aos-init aos-animate" data-aos="fade-up">
                        <a style={{ color: 'white', padding: '10px !important', marginBottom: '50px !important' }} onClick={() => setOpenGallery(true)} id="btn-see-more-gallery" class="btn btn-secondary btn-see-more-gallery">
                            <span> Tất cả hình ảnh </span>
                        </a>
                        <Modal
                            centered
                            open={openGallery}
                            onCancel={() => setOpenGallery(false)}
                            cancelText='Đóng'
                            style={{ marginTop: '20px' }}
                            okButtonProps={{ style: { display: 'none' } }}
                            closable={false}
                        >
                            <Tabs style={{ overflowY: 'auto' }} defaultActiveKey="1" items={items} />

                        </Modal>
                    </div>

                    <Modal
                        centered
                        open={openDonate}
                        onCancel={() => setOpenDonate(false)}
                        cancelText='Đóng'
                        okButtonProps={{ style: { display: 'none' } }}

                        closable={false}
                    >

                        <div id="fh5co-event" class="fh5co-bg" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)`, height: 'unset' }} >
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

                    </Modal>
                </div>

                <div
                    id="part-7"
                    style={{

                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <div id="fh5co-event" class="fh5co-bg" style={{ backgroundImage: `url(../assets/images/img_bg_1.jpg)`, height: '100%', paddingTop: '50px', paddingBottom: '20px' }} >
                        <div class="overlay-dark"></div>
                        <div class="container">
                            <div style={{ marginBottom: '0', paddingLeft: '0px', paddingRight: '0px' }} class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                <CommentSys base={base} auth={auth} providers={providers} />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="part-8"
                    style={{

                        background: 'rgba(255,0,0,0.02)',
                    }}
                    className='wrapper'
                >
                    <section class="section-title footer-section py-5 text-center section-bg-affect">
                        <div class="container-fluid">
                            <h3 class="title">Thank you!</h3>
                            <h5 class="sub-title">--  Đ. Huy &amp;  H. Phương --</h5>
                        </div>
                    </section>
                </div>
            </div>

            <div class="btn-menu-open shake" style={{
                position: 'fixed',
                bottom: '29px',
                left: '20px',
            }}>
                <a href="javascript:void(0)" class="text-white buttonDonate  aos-init aos-animate" >

                    <span class="content-button tooltipBtn">
                        {showElement1 ? <span class="tooltiptext2 showToolTip">Click vào đây nếu bạn muốn phát nhạc!</span> : <span class="tooltiptext1">Nhạc nền</span>}

                        <AudioPlayer
                            style={{
                                width: '41px',
                                position: 'fixed',
                                opacity: '0'
                            }}
                            src="../assets/audio/MotDoi.mp3"
                            customVolumeControls={[]}
                            autoPlay={false}
                            loop={true}
                            showJumpControls={false}
                            showFilledProgress={false}
                            layout='horizontal-reverse'
                            title='âfsfs'
                            header={<p style={{ fontSize: '20px' }}>Click vào đây nếu bạn muốn phát nhạc!</p>}
                        />
                        <img style={{
                            width: '23px',
                            height: '18px',
                            marginTop: '8px',
                            marginLeft: '8px'
                        }} class="access-icon" src="../assets/images/soundPNG.png" alt="" />
                    </span>
                </a>
            </div>
            <div id="menu-access" class="">
                <div class="btn-menu-open shake" onClick={() => setOpen(!open)}>
                    <img style={{
                        marginLeft: '3px',
                        marginTop: '7px'
                    }} class="access-icon" src="../assets/images/menuBar.png" alt="" />
                </div>
                <ul class="p-0 m-0 list-menu-icon" style={{ opacity: 1 }} hidden={!open}>
                    <li class="text-center shake">
                        <a href="#part-7" class="text-white">
                            <span class="content-button tooltipBtn">
                                {showElement2 ? <span class="tooltiptext showToolTip">Gửi lời chúc</span> : <span class="tooltiptext">Gửi lời chúc</span>}
                                <img class="access-icon" src="https://cdn.biihappy.com/ziiweb/images/static/common/wishes.png" alt="" />
                            </span>
                        </a>
                    </li>

                    <li class="text-center shake">
                        <a onClick={() => setOpenDonate(true)} class="text-white buttonDonate" data-aos="fade-left">
                            <span class="content-button tooltipBtn">
                                {showElement3 ? <span class="tooltiptext showToolTip">Mừng cưới</span> : <span class="tooltiptext">Mừng cưới</span>}

                                <img class="access-icon" src="https://cdn.biihappy.com/ziiweb/images/static/common/money_bag.png" alt="" />
                            </span>
                        </a>
                    </li>

                    <li class="text-center shake">
                        <a href="#" class="text-white buttonDonate aos-init aos-animate">
                            <span class="content-button tooltipBtn">
                                {showElement4 ? <span class="tooltiptext showToolTip">lên đầu trang</span> : <span class="tooltiptext">lên đầu trang</span>}

                                <img class="access-icon" src="../assets/images/up-128.png" alt="" />
                            </span>
                        </a>
                    </li>
                </ul>

            </div>
        </>
    )
};
export default MainPageAnchor;
