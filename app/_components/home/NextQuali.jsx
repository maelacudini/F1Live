import Image from "next/image";
import style from "../../_style/homeQuali.module.scss";
import image from "@/public/images/img2.jpg";
import { getDate, getTime } from "@/app/_utils/func";

export default function NextQuali({ races }) {
    const currentDate = new Date();

    const upcomingQuali = races.filter((race) => {
        const practiceDate = new Date(race?.Qualifying?.date);
        return practiceDate > currentDate;
    });

    const nextQuali = upcomingQuali.length > 0 ? upcomingQuali[0] : null;
    const qualiDate = getDate(nextQuali?.Qualifying?.date);
    const qualiTime = getTime(nextQuali?.time.slice(0, 5));

    return (
        <article className={`card ${style.quali}`}>
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
                src={"/quali.svg"}
                loading="lazy"
                height={20}
                width={60}
            />

            <p className="h3">
                Next <span className="yellow">qualifying</span> round
            </p>
            {nextQuali ? (
                <div className={style.info}>
                    <div>
                        <p>Date</p>
                        <p className="h4">{qualiDate}</p>
                    </div>
                    <div>
                        <p>Time</p>
                        <p className="h4">{qualiTime}</p>
                    </div>
                </div>
            ) : (
                <p>No upcoming quali.</p>
            )}
        </article>
    );
}
