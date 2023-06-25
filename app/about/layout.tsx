import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'ABOUT US',
  description: 'Welcome to our home',
}



export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <nav>ABOUT NAV BAR</nav>
            {children}
        </>
    )
  }