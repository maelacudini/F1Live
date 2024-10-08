"use client";
import style from "../../_style/scheduleSprint.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getDate, getTime } from "@/app/_utils/func";

export default function Sprint({ races }) {
    return (
        <div className={style.sprints}>
            <div className={style.title}>
                <p className="h2">
                    <span className="yellow">Sprint</span> rounds
                </p>
            </div>

            <Swiper
                slidesPerView={"auto"}
                spaceBetween={16}
                loop={false}
                draggable={true}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
                className="swiper"
            >
                {races?.map((race, i) => {
                    const date = getDate(race?.Sprint?.date);
                    const time = getTime(race?.Sprint?.time?.slice(0, 5));
                    if (race?.Sprint) {
                        return (
                            <SwiperSlide
                                key={i + race?.raceName}
                                className="card"
                            >
                                <article className={style.sprint}>
                                    <p>Round {race?.round}</p>
                                    <div>
                                        <p className="h4">
                                            {" "}
                                            At the {
                                                race?.Circuit?.circuitName
                                            },{" "}
                                            {race?.Circuit?.Location?.locality}
                                        </p>
                                        <p>
                                            {date}, {time}
                                        </p>
                                    </div>
                                </article>
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </div>
    );
}
