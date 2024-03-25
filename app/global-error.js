'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <main className="error">
                    <h2>Something went wrong!</h2>
                    <button className="btn" onClick={() => reset()}>Try again</button>
                </main>
            </body>
        </html>
    )
}