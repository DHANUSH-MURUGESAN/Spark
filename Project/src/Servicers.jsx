import { Link } from "react-router"
import for_servicers_hero from "./assets/forservicershero.webp"
import Listandkeys_for_servicers from "./Cards_for_servicers"
import boxplant from "./assets/boxplant.webp"
import building from "./assets/buildingsite.webp"
import understand from "./assets/understandicon.webp"
import house from "./assets/house.webp"
import map from "./assets/mapicon.webp"
import valley from "./assets/valley.webp"
import customise from "./assets/customize.webp"
import apartment from "./assets/apartment.webp"
import prefil from "./assets/prefilicon.webp"
import { FaChevronRight, FaRegCheckCircle } from "react-icons/fa"
import unified from "./assets/unifiedhomebuying.webp"
import vip from "./assets/viploanlogo.png"
import { useEffect } from "react"
import integrate from "./assets/integratedoorway.svg"

const Servicers = () => {
    useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // or "auto" if you don't want animation
            });
    }, []); 
    return (
        <div className="w-full h-full bg-yellow-50 px-20 pt-10 pb-20">
            <section title="Capture more">
                <div className="border border-orange-100 bg-orange-100 p-20 rounded-3xl">
                    <div className="grid grid-cols-2">
                        <div className="pl-10 pr-25">
                            <h1 className="text-6xl font-bold font-serif">Capture more value from your MSR</h1>
                            <p className="text-xl mt-5 mb-25">We're creating a new marketing channel to accelerate origination and upsell that works across your existing systems.</p>
                            <Link to="/demo-request" className="bg-green-700 hover:bg-green-900 text-white text-2xl px-25 py-3 font-sans rounded-lg">Get a Demo</Link>
                        </div>
                        <div>
                            <img src={for_servicers_hero} alt="For-Servicers"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-40">
                <h1 className="text-4xl font-bold font-serif">The digital engagement platform <br/>purpose-built for servicer retention.</h1>
                <p className="text-xl mt-5">Generate more value from your servicing book with a digital <br/>platform configurable for your recapture and cross-sell strategy.</p>
                <div><Listandkeys_for_servicers/></div>
            </section>
            <section title="A track record" className="mt-40">
                <div className="border border-orange-100 bg-orange-100 p-20 rounded-3xl">
                    <h1 className="text-4xl text-center mb-20 font-bold font-serif">A track record of success - <br/>results from 1 large client</h1>
                    <div className="grid grid-cols-5">
                        <div className="text-center">
                            <h1 className="text-5xl text-green-700 font-bold">315,000+</h1>
                            <p className="text-xl mt-3">solicitable logins</p>
                        </div>
                        <div className="border-0 bg-orange-300 w-1 h-15 mx-auto"></div>
                        <div className="text-center">
                            <h1 className="text-5xl text-green-700 font-bold">34,000+</h1>
                            <p className="text-xl mt-3">high intent, qualified <br/>leads</p>
                        </div>
                        <div className="border-0 bg-orange-300 w-1 h-15 mx-auto"></div>
                        <div className="text-center">
                            <h1 className="text-5xl text-green-700 font-bold">19,000+</h1>
                            <p className="text-xl mt-3">application starts</p>
                        </div>
                    </div>
                    <img className="absolute w-40 h-35 right-40 top-500" src={boxplant} alt="Box-Plant" />
                </div>
            </section>
            <section title="What Haven looks" className="mt-40">
                <h1 className="text-4xl text-center mb-20 font-bold font-serif">What Spark looks like for you</h1>
                <section title="1">
                    <div className="grid grid-cols-2 mx-20">
                        <div>
                            <img src={building} alt="Building-Site" />
                        </div>
                        <div className="grid grid-rows-2 pl-20">
                            <div>
                                <img className="w-25" src={understand} alt="Unterstand-Icon"/>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-5">Anticipate intent before anyone else</h1>
                                <p className="text-xl">Get real-time prepayment signals that no one else has, generated directly from borrower interaction data. Get ahead of the trigger data that everyone else buys and be first to win your borrowers' next business.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section title="2" className="mt-50">
                    <div className="grid grid-cols-2 mx-20">
                        <div>
                            <img src={house} alt="House" />
                        </div>
                        <div className="grid grid-rows-2 pl-20">
                            <div>
                                <img className="w-25" src={map} alt="Map-Icon"/>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-5">Educate to build loyalty and referrals</h1>
                                <p className="text-xl">Personalize financial education for all of your borrowers, helping them reach their goals and increasing conversions across verticals.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section title="3" className="mt-50">
                    <div className="grid grid-cols-2 mx-20">
                        <div>
                            <img src={valley} alt="Valley" />
                        </div>
                        <div className="grid grid-rows-2 pl-20">
                            <div>
                                <img className="w-25" src={customise} alt="Customise"/>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-5">Drive retention via personalized digital offers</h1>
                                <p className="text-xl">Supplement your other channels with digital offers that empower your clients to come to you — directly integrated into their existing servicing experience.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section title="4" className="mt-50">
                    <div className="grid grid-cols-2 mx-20">
                        <div>
                            <img src={apartment} alt="Apartment" />
                        </div>
                        <div className="grid grid-rows-2 pl-20">
                            <div>
                                <img className="w-25" src={prefil} alt="Prefil-Icon"/>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-5">Differentiate from other lenders with prefill</h1>
                                <p className="text-xl ">Collect and maintain income, asset, liability, and credit data. See who’s qualified for a mortgage even before they ask, and approve them before they apply for a mortgage with another lender.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section title="Unified homebuying">
                <div className="mt-50">
                    <div className="grid grid-cols-2 mx-20">
                        <div className="pr-20 mt-10">
                            <p className="text-green-700 font-medium mb-5">Unified homebuying</p>
                            <h1 className="text-4xl font-bold font-serif mb-5">Connect homebuying activities in one place</h1>
                            <p className="text-xl">Route borrowers to your call center, or bring in your retail LOs and/or wholesale broker partners. Link borrowers directly with realtors – putting you in control of the homebuying journey and increasing conversion.</p>
                            <ul className="pt-10 text-xl font-serif font-semibold space-y-5">
                                <li className="inline-flex"><FaRegCheckCircle className="w-15 mt-1 text-green-700"/>Multi-brand support for realtors, correspondent / wholesale partners, etc.</li>
                                <li className="inline-flex"><FaRegCheckCircle className="w-15 mt-1 text-green-700"/>Own the whole home journey to reach the satisfied destination with happiness.</li>
                            </ul>
                        </div>
                        <div>
                            <img src={unified} alt="Unified-Home-Buy" />
                        </div>
                    </div>
                </div>
            </section>
            <section title="4" className="mt-50">
                <div className="grid grid-cols-2 mx-20">
                    <div>
                        <img src={vip} alt="Loan-Care" />
                    </div>
                    <div className="pl-20 mt-15">
                        <p className="text-green-700 font-medium mb-5">Distribution partnership</p>
                        <h1 className="text-4xl font-bold font-serif mb-5">Joint clients of VIP Loan offered priority integration</h1>
                        <p className="text-xl mb-10">VIP Loan clients can leverage Spark's marketing capabilities and measure increased origination and cross-sell in a matter of weeks.</p>
                        <Link to="/viploan">
                            <button className="text-xl text-green-700 py-3 font-medium inline-flex hover:text-white hover:border hover:border-green-700 hover:bg-green-700 hover:rounded-4xl hover:px-5">Learn more
                                <FaChevronRight className="mt-1 pt-2 ml-1"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section title="Haven integrates" className="mt-40">
                <div className="border border-green-900 bg-green-900 text-white px-20 py-20 rounded-3xl">
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-green-500 font-medium mb-5">Integration</p>
                            <h1 className="text-4xl font-bold font-serif">Spark integrates into your existing servicing experience</h1>
                            <p className="py-10 mb-5 text-xl">Whether you service in-house or use a subservicer, launch deeper engagement with your borrowers in weeks (not months) with a platform that integrates into your existing servicing stack.</p>
                            <Link to="/how-it-works">
                                <button className="text-xl py-3 font-medium inline-flex hover:border hover:border-green-700 hover:bg-green-700 hover:rounded-4xl hover:px-5">See how it works
                                    <FaChevronRight className="mt-1 pt-2 ml-1"/>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <img className="mx-auto" src={integrate} alt="Integrate-doorway"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicers