'use client'
import './_style/globals.css'
import Header from './_components/common/header/Header'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <main className="error">
                    <Header />
                    <h2>Something went wrong!</h2>
                    <button className="btn" onClick={() => reset()}>Try again</button>
                </main>
            </body>
        </html>
    )
}