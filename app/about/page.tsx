import Link from "next/link";

function About() {
  // throw new Error('Not Today')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 >About</h1>

      <Link href='/'>Go to Home page</Link>
    </main>

  )
}

export default About
