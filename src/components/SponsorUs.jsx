import {contactEmail} from "@/eventConfig";
import {EnvelopeIcon} from '@heroicons/react/20/solid'
import {Button} from "@/components/Button";

export default function SponsorUs() {
    return (
        <div className="relative bg-dodblue-800">
            <div className="h-56 bg-dodblue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                    className="h-full w-full object-cover"
                    src="./sponsor-hero.jpg"
                    alt=""
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-lg font-semibold text-dodblue-300">Support our community</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Become a Sponsor</p>
                    <p className="mt-3 text-lg text-dodblue-300">
                        Sponsoring our devopsdays conference gives your organization an opportunity to speak with practitioners, managers, and executives from companies of all sizes and industries. Whether your goals include recruiting new talent, opening new markets, or connecting with your existing customers, this event will be the place to have those conversations with experts and leaders in tech innovation.
                    </p>
                            <Button href="mailto:birmingham-uk@devopsdays.org" textColour="dodblue-900" bgColour="white" hoverColour="dodblue-200" >Email us</Button>
                </div>
            </div>
        </div>
    )
}
