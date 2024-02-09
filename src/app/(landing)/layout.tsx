import React from "react"
import LandingPageNavbar from "./components/LandingPageNavbar"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex min-h-screen flex-col overflow-x-clip">
        <LandingPageNavbar />   
        <div className="flex-grow">{children}</div> 
      </section>
    )
  }