import CopyClipboard from "@/app/_components/common/CopyClipboard";
import Intro from "@/app/_components/common/Intro";
import Info from "@/app/_components/latest/Info";
import { DynamicSegmentLayout } from "@/app/_components/layouts/DynamicSegmentLayout";
import { getData } from "@/app/_utils/func";

export default async function Latest() {
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
        <DynamicSegmentLayout>
            <Intro
                firstTitle={"Latest"}
                secondTitle={"Race"}
                thirdTitle={"of the Year"}
            />
            <CopyClipboard />
            <Info race={race} />
        </DynamicSegmentLayout>
    );
}
