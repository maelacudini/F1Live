export async function getData(api) {
    const res = await fetch(api, { next: { revalidate: 86400 } })
    //Revalidate data after a day has passed and a new request is made
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

//get right time 
export function getTime(time) {
    if (time !== undefined) {
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours);
        hours = (hours + 2) % 24;
        hours = hours.toString().padStart(2, '0');
        return hours + ":" + minutes;
    } else {
        return '--:--'
    }
}

//get right date
export function getDate(date) {
    if (date !== undefined) {
        return new Date(date).toDateString();
    } else {
        return "No round";
    }
}

//find upcoming event index
export function getUpcomingEventIndex(eventList, nextEvent) {
    return eventList.findIndex(
        (event) => event.raceName === nextEvent?.raceName
    );
}