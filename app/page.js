import LatestRace from "./_components/home/latestRace/LatestRace";
import NextPractice from "./_components/home/nextPractice/NextPractice";
import NextQuali from "./_components/home/nextQuali/NextQuali";
import NextRace from "./_components/home/nextRace/NextRace";
import NextSprint from "./_components/home/nextSprint/NextSprint";
import { getData } from "./_utils/func";

export default async function Home() {
  const data = await getData("http://ergast.com/api/f1/current.json");
  const races = data?.MRData?.RaceTable?.Races;

  return (
    <main className="margin">
      <section style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '0 auto', maxWidth: '90rem' }}>
        <LatestRace />
        <NextRace races={races} />
        <NextPractice races={races} />
        <NextQuali races={races} />
        <NextSprint races={races} />
      </section>
    </main>
  )
}
