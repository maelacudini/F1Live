import Image from "next/image";
import style from "../../_style/homePractice.module.scss";
import image from "@/public/images/img1.jpg";
import { getDate, getTime } from "@/app/_utils/func";

export default function NextPractice({ races }) {
    const currentDate = new Date();

    const upcomingPractice = races.filter((race) => {
        const practiceDate = new Date(race?.FirstPractice?.date);
        return practiceDate > currentDate;
    });

    const nextPractice =
        upcomingPractice.length > 0 ? upcomingPractice[0] : null;

    //get correct date/time first pr
    let firstPracticeDate = getDate(nextPractice?.FirstPractice?.date);
    let firstPrTime = getTime(nextPractice?.FirstPractice?.time.slice(0, 5));

    //get correct date/time second pr
    let secondPracticeDate = getDate(nextPractice?.SecondPractice?.date);
    let secondPrTime = getTime(nextPractice?.SecondPractice?.time.slice(0, 5));

    //get correct date/time third pr
    let thirdPracticeDate = getDate(nextPractice?.ThirdPractice?.date);
    let thirdPrTime = getTime(nextPractice?.ThirdPractice?.time.slice(0, 5));

    return (
        <article className={`card ${style.practice}`}>
            <Image
                className={style.bg}
                alt="background"
                src={image}
                placeholder="blur"
                fill
                sizes="(max-width: 768px) 25rem, (max-width: 1200px) 30rem"
            />

            <Image
                className={style.icon}
                alt="arrows"
                src={"/practice.svg"}
                loading="lazy"
                height={20}
                width={60}
            />

            <p className="h3">
                Next <span className="yellow">practice</span> rounds
            </p>
            {nextPractice ? (
                <div className={style.practices}>
                    <div className={style.row}>
                        <p>1st</p>
                        <p className="h4">
                            {firstPracticeDate}, {firstPrTime}
                        </p>
                    </div>
                    <div className={style.row}>
                        <p>2nd</p>
                        <p className="h4">
                            {secondPracticeDate}, {secondPrTime}
                        </p>
                    </div>
                    <div className={style.row}>
                        <p>3rd</p>
                        <p className="h4">
                            {thirdPracticeDate}, {thirdPrTime}
                        </p>
                    </div>
                </div>
            ) : (
                <p>No upcoming practice rounds.</p>
            )}
        </article>
    );
}
