import Link from 'next/link'

export default function NotFound() {
    return (
        <section className='notFound'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link className='btn' href="/">Return Home</Link>
        </section>
    )
}