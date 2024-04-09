export async function getData(api) {
    const res = await fetch(api, { next: { revalidate: 604800 } })
    //revalidate every week
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}