import Title from "./Title";
import style from "../../_style/introCommon.module.scss";

export default function Intro({ firstTitle, secondTitle, thirdTitle }) {
    return (
        <div className={style.intro}>
            <div className={style.main}>
                <Title title={firstTitle} />
                <Title cname={"yellow"} title={secondTitle} />
                <Title title={thirdTitle} />
            </div>
        </div>
    );
}
