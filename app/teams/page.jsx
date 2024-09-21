import CopyClipboard from "../_components/common/CopyClipboard";
import Intro from "../_components/common/Intro";
import { DynamicSegmentLayout } from "../_components/layouts/DynamicSegmentLayout";
import Info from "../_components/teams/Info";
import { getData } from "../_utils/func";

export default async function Teams() {
    const res = await getData(
        "http://ergast.com/api/f1/current/constructorStandings.json"
    );
    const constructors =
        res?.MRData?.StandingsTable?.StandingsLists[0].ConstructorStandings;

    if (!constructors) {
        return (
            <DynamicSegmentLayout>
                <p className="h3">No constructors data available</p>
            </DynamicSegmentLayout>
        );
    }
    return (
        <DynamicSegmentLayout>
            <Intro
                firstTitle={"2024"}
                secondTitle={"Constructors"}
                thirdTitle={"Standing"}
            />
            <CopyClipboard />
            <div>
                {constructors.map((info, i) => (
                    <Info info={info} key={i} i={i} />
                ))}
            </div>
        </DynamicSegmentLayout>
    );
}
