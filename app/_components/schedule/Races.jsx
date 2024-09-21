"use client";
import style from "../../_style/schedulesRaces.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getDate, getTime, getUpcomingEventIndex } from "@/app/_utils/func";

export default function Races({ races }) {
    const currentDate = new Date();

    const upcomingRaces = races.filter((race) => {
        const raceDate = new Date(race?.date);
        return raceDate > currentDate;
    });

    const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

    const initialSlide = getUpcomingEventIndex(races, nextRace);

    return (
        <div className={style.races}>
            <div className={style.title}>
                <p className="h2">
                    2024 <span className="yellow">Races</span>
                </p>
            </div>

            <Swiper
                slidesPerView={"auto"}
                spaceBetween={16}
                loop={true}
                draggable={true}
                centeredSlides={true}
                navigation={true}
                initialSlide={initialSlide}
                modules={[Navigation]}
                className="swiper"
            >
                {races?.map((race, i) => {
                    const date = getDate(race?.date);
                    const time = getTime(race?.time?.slice(0, 5));
                    return (
                        <SwiperSlide key={i + race?.raceName} className="card">
                            <article className={style.race}>
                                <div className={style.intro}>
                                    <p>Round {race?.round}</p>
                                    {nextRace?.raceName === race?.raceName ? (
                                        <p className="yellow">Upcoming</p>
                                    ) : null}
                                </div>
                                <div>
                                    <p className="h4">
                                        At the {race?.Circuit?.circuitName},{" "}
                                        {race?.Circuit?.Location?.locality}
                                    </p>
                                    <p>
                                        {date}, {time}
                                    </p>
                                </div>
                            </article>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
