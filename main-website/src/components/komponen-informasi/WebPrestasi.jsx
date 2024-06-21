import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function WebPrestasi() {
    return (
        <div className="prestasi-container">
          
                    <div className="judul">
                        <div className="text-wrapper">
                            <div className="text">
                                PRESTASI & KEGIATAN
                            </div>
                        </div>
                    </div>
              
                    <div className="carousel-prestasi-container">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        // scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <div className='carousel-prestasi-isi'>
                                    <div className="carousel-prestasi-box">
                                        <div className="pres1">
                                            <div className="img-container">

                                            </div>
                                            <div className="text">
                                                SISWA SMPIT TAQIYYA ROSYIDA <br />
                                                LOLOS SELEKSI PERSIS SOLO U-14
                                            </div>
                                            <button className="btn btn-warning">Selengkapnya</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carousel-prestasi-isi'>
                                    <div className="carousel-prestasi-box">
                                        <div className="pres1">
                                            <div className="img-container">

                                            </div>
                                            <div className="text">
                                                SISWA SMPIT TAQIYYA ROSYIDA <br />
                                                LOLOS SELEKSI PERSIS SOLO U-14
                                            </div>
                                            <button className="btn btn-warning">Selengkapnya</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carousel-prestasi-isi'>
                                    <div className="carousel-prestasi-box">
                                        <div className="pres1">
                                            <div className="img-container">

                                            </div>
                                            <div className="text">
                                                SISWA SMPIT TAQIYYA ROSYIDA <br />
                                                LOLOS SELEKSI PERSIS SOLO U-14
                                            </div>
                                            <button className="btn btn-warning">Selengkapnya</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='carousel-prestasi-isi'>
                                    <div className="carousel-prestasi-box">
                                        <div className="pres1">
                                            <div className="img-container">

                                            </div>
                                            <div className="text">
                                                SISWA SMPIT TAQIYYA ROSYIDA <br />
                                                LOLOS SELEKSI PERSIS SOLO U-14
                                            </div>
                                            <button className="btn btn-warning">Selengkapnya</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
              
        </div>
    )
}

export default WebPrestasi;