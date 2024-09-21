import { DynamicSegmentLayout } from "../_components/layouts/DynamicSegmentLayout";
import Practice from "../_components/schedule/Practice";
import Quali from "../_components/schedule/Quali";
import Races from "../_components/schedule/Races";
import Sprint from "../_components/schedule/Sprint";
import { getData } from "../_utils/func";

export default async function Schedule() {
    const res = await getData("http://ergast.com/api/f1/current.json");
    const races = res?.MRData?.RaceTable?.Races;

    if (!races) {
        return (
            <DynamicSegmentLayout>
                <p className="h3">No races data available</p>
            </DynamicSegmentLayout>
        );
    }
    return (
        <DynamicSegmentLayout>
            <Races races={races} />
            <Quali races={races} />
            <Practice races={races} />
            <Sprint races={races} />
        </DynamicSegmentLayout>
    );
}
