import { getData } from "@/app/_utils/func";
import style from "../../_style/homeLatest.module.scss";
import CursorContainer from "../common/CursorContainer";
import Link from "next/link";
import Image from "next/image";
import image from "@/public/images/img.jpg";

export default async function LatestRace() {
    const data = await getData(
        "https://ergast.com/api/f1/current/last/results.json"
    );
    const race = data?.MRData?.RaceTable?.Races[0];

    if (!race) {
        return (
            <DynamicSegmentLayout>
                <p className="h3">No latest race data available</p>
            </DynamicSegmentLayout>
        );
    }

    return (
        <section className={`card ${style.latest}`}>
            <Image
                className={style.bg}
                alt="background"
                src={image}
                placeholder="blur"
                fill
                loading="eager"
                priority
                sizes="(max-width: 768px) 35rem, (max-width: 1200px) 40rem"
            />

            <CursorContainer>
                <Link href={`/latest/${race?.raceName}`} className="btn">
                    Race details
                </Link>
            </CursorContainer>

            <div className={style.intro}>
                <div className={style.row}>
                    <p className="h3">
                        <Image
                            alt="arrows"
                            src={"/arrows.svg"}
                            loading="lazy"
                            height={20}
                            width={40}
                        />
                        <span className="yellow">Latest</span> race
                    </p>
                    <p className="h2">
                        At the{" "}
                        <span className="yellow">
                            {race?.Circuit?.circuitName}
                        </span>
                    </p>
                </div>

                <div className={style.row}>
                    {race?.Results?.slice(0, 3).map((pilot, i) => (
                        <div
                            className={style.result}
                            key={i + pilot?.Driver?.givenName}
                        >
                            <p>{i + 1}</p>
                            <p key={i}>
                                {pilot?.Driver?.givenName}{" "}
                                {pilot?.Driver?.familyName}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
