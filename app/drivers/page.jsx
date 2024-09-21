import CopyClipboard from "../_components/common/CopyClipboard";
import Intro from "../_components/common/Intro";
import Info from "../_components/drivers/Info";
import { DynamicSegmentLayout } from "../_components/layouts/DynamicSegmentLayout";
import { getData } from "../_utils/func";

export default async function Drivers() {
    const res = await getData(
        "https://ergast.com/api/f1/current/driverStandings.json"
    );
    const drivers =
        res?.MRData?.StandingsTable?.StandingsLists[0].DriverStandings;

    if (!drivers) {
        return (
            <DynamicSegmentLayout>
                <p className="h3">No drivers data available</p>
            </DynamicSegmentLayout>
        );
    }

    return (
        <DynamicSegmentLayout>
            <Intro
                firstTitle={"2024"}
                secondTitle={"Drivers"}
                thirdTitle={"Standing"}
            />
            <CopyClipboard />
            <section>
                {drivers?.map((info, i) => (
                    <Info info={info} key={i} i={i} />
                ))}
            </section>
        </DynamicSegmentLayout>
    );
}
