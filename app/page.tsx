import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'HOME',
  description: 'Welcome to our home',
}
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HOME</h1>
      <Link href='/about'>Go to about</Link>
      <Link href='/users'>Go to user</Link>
    </main>
  )
}
