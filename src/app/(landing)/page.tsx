import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center">
            <main>
                {/* TODO: create landing page */}

                <Hero />
                {/* <Feature />
                <HowItWorks />
                <Pricing />
                <CallToAction /> */}
            </main>
        </div>
    )
}

const Hero = () => {
    return (
    <div className="mx-4 mb-14 mt-6 flex flex-1 flex-col items-center text-center sm:mb-12 md:mb-32 md:mt-20">
        <h1 className="max-w-5xl text-2xl font-bold sm:text-4xl md:text-6xl">
            Convert Content Into Customers With {""}
            <span className="bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent">
                AI Lead Magnets {""}
            </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm text-gray-600 sm:text-md md:text-xl">
            LeadConvert helps creators turn regular content into
            interactive AI experiences,effortlessly capturing leads
            interactive AI experiences,effortlessly.
        </p>

        <div className="mt-3 flex max-w-4xl flex-col flex-wrap items-center justify-center sm:w-full sm:flex-row">
            <Link href="/lead-magnets">
                <Button variant="default" className="md:text-xl">
                    Create Yout first AI Lead Magnet
                </Button>
            </Link>

        </div>
    </div>
    
    
    )
}