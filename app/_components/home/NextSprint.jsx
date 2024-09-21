import Image from "next/image";
import style from "../../_style/homeSprint.module.scss";
import image from "@/public/images/img4.jpg";
import { getDate, getTime } from "@/app/_utils/func";

export default function NextSprint({ races }) {
    const currentDate = new Date();

    const upcomingSprint = races.filter((race) => {
        const sprintDate = new Date(race?.Sprint?.date);
        return sprintDate > currentDate;
    });

    const nextSprint = upcomingSprint.length > 0 ? upcomingSprint[0] : null;
    const sprintDate = getDate(nextSprint?.Sprint?.date);
    const sprintTime = getTime(nextSprint?.Sprint?.time?.slice(0, 5));

    return (
        <article className={`card ${style.sprint}`}>
            <Image
                className={style.bg}
                alt="background"
                src={image}
                placeholder="blur"
                fill
                sizes="(max-width: 768px) 20rem, (max-width: 1200px) 30rem"
            />

            <Image
                className={style.icon}
                alt="arrows"
                src={"/sprint.svg"}
                loading="lazy"
                height={20}
                width={60}
            />

            <p className="h3">
                Next <span className="yellow">sprint</span> round
            </p>
            {nextSprint ? (
                <div className={style.info}>
                    <div>
                        <p>Date</p>
                        <p className="h4">{sprintDate}</p>
                    </div>
                    <div>
                        <p>Time</p>
                        <p className="h4">{sprintTime}</p>
                    </div>
                </div>
            ) : (
                <p>No upcoming sprint round</p>
            )}
        </article>
    );
}
