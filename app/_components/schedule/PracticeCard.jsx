import { getDate, getTime } from "@/app/_utils/func";
import style from "../../_style/schedulePracticeCard.module.scss";

export default function PracticeCard({ race, nextRace, date, time }) {
    const actualDate = getDate(date);
    const actualTime = getTime(time);

    return (
        <article className={style.practice}>
            <div className={style.intro}>
                <p className="gray">Round {race?.round}</p>
                {nextRace?.raceName === race?.raceName ? (
                    <p className="yellow">Upcoming</p>
                ) : null}
            </div>
            <div>
                <p className="h4">
                    {" "}
                    At the {race?.Circuit?.circuitName},{" "}
                    {race?.Circuit?.Location?.locality}
                </p>
                <p>
                    {actualDate}, {actualTime}
                </p>
            </div>
        </article>
    );
}
