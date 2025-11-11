import { FaChevronRight, FaRegCheckCircle } from "react-icons/fa";
import Plan from './assets/Plan.webp';
import techstack from './assets/techstack.svg';
import datamanagement from './assets/datamanagement.svg';
import boxplant from './assets/boxplant.webp';
import velocify from './assets/velocify.svg';
import equifax from './assets/equifax.svg';
import tavant from './assets/tavant.svg';
import finastra from './assets/finastra.svg';
import corelogic from './assets/corelogic.svg';
import encompass from './assets/encompass.svg';
import totalexpert from './assets/totalexpert.svg';
import lock from './assets/lock.webp';
import { Link } from "react-router";
import Security from "./Security";
import Listandkeys from "./Cards_how_it_works";
import { useEffect } from "react";

const How = () => {
    useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // or "auto" if you don't want animation
            });
    }, []); 
    return (
        <div className="w-full h-full bg-yellow-50 px-20 pt-28 pb-20">
            <section title="Turn engagement">
                <h1 className="text-6xl font-bold font-serif">Turn engagement into <br/> revenue</h1>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="text-xl pt-8 font-sans">Spark's digital platform empowers homeowners to <br/> be in the driving seat of their home finances. And <br/> the more they learn, the better you can predict and <br/> meet their needs.</p>
                        <p className="text-xl pt-20 font-sans font-medium">We help you:</p>
                        <ul className="text-xl pt-5 mb-15 font-sans grid grid-rows-4 space-y-3">
                            <li className="inline-flex"><FaRegCheckCircle className="mt-1 mr-3 text-green-700" />Educate through interaction</li>
                            <li className="inline-flex"><FaRegCheckCircle className="mt-1 mr-3 text-green-700" />Understand your customers</li>
                            <li className="inline-flex"><FaRegCheckCircle className="mt-1 mr-3 text-green-700" />Personalize offers</li>
                            <li className="inline-flex"><FaRegCheckCircle className="mt-1 mr-3 text-green-700" />Increase retention and cross-sell</li>
                        </ul>
                        <Link to="/demo-request" className="bg-green-700 hover:bg-green-900 text-white text-2xl px-5 py-3 font-sans rounded-lg">Get a Demo</Link>
                    </div>
                    <div>
                        <img className="w-full h-120" src={Plan} alt="Plan"/>
                    </div>
                </div>
            </section>
            <section title="Haven integrates" className="mt-40">
                <div className="border border-green-900 bg-green-900 text-white px-20 py-20 rounded-3xl">
                    <h1 className="text-4xl text-center font-bold font-serif">Spark integrates into your <br/>existing tech stack</h1>
                    <p className="py-10 mb-5 text-center text-xl">Launch deeper engagement with your borrowers in weeks (not <br/>months) with a front-door across surfaces and use cases.</p>
                    <img className="mx-auto" src={techstack} alt="Tech-Stack"/>
                </div>
            </section>
            <section className="mt-40"></section>
            <section title="Offers and Insights" className="mt-40">
                <div className="border border-orange-100 bg-orange-100 px-20 pt-20 rounded-3xl">
                    <p className="text-center text-green-700 font-medium mb-5">Offers and Insights</p>
                    <h1 className="text-4xl text-center font-bold font-serif">Designed to make <br/>marketing and data easy</h1>
                    <p className="text-xl text-center mt-5 mb-20">Manage campaigns and user reports all in one place. Offer uploads <br/>and event webhooks support omni-channel campaigns. Pull real-<br/>time reports for insights and analytics via Management Portal, API, <br/>or flat file export.</p>
                    <img className="mx-auto" src={datamanagement} alt="Data Management"/>
                </div>
                <img className="h-30 absolute right-45 top-648" src={boxplant} alt="boxplant"/>
            </section>
            <section title="Integrations" className="mt-40">
                <p className="text-center text-green-700 font-medium mb-5">Integrations</p>
                <h1 className="text-4xl text-center font-bold font-serif">Connected seamlessly to <br/>your existing systems</h1>
                <p className="text-xl text-center mt-5">We unify servicing and originations with a single platforms that <br/>integrates with your POS, LOS, CMS, pricing engine, and more – <br/>reducing time investment from your IT team.</p>
                <div class="overflow-hidden w-full my-30">
                    <div className="flex animate-scroll-left gap-30 w-max items-center">
                        <img src={velocify} alt="Velocify" className="h-7 object-contain" />
                        <img src={equifax} alt="Equifax" className="h-7 object-contain" />
                        <img src={tavant} alt="Tavant" className="h-7 object-contain" />
                        <img src={finastra} alt="Finastra" className="h-10 object-contain" />
                        <img src={corelogic} alt="CoreLogic" className="h-10 object-contain" />
                        <img src={encompass} alt="Encompass" className="h-7 object-contain" />
                        <img src={totalexpert} alt="TotalExpert" className="h-8 object-contain" />
                    </div>
                </div>
            </section>
            <section title="Security and Compliance" className="mt-40">
                <div className="border border-green-900 bg-green-900 text-white px-20 pt-20 rounded-3xl">
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-green-500 font-medium mb-5">Security & Compliance</p>
                            <h1 className="text-4xl font-bold font-serif pr-30">We take your security seriously</h1>
                            <p className="text-xl mt-5 mb-15 pr-30">We follow the most rigorous security standards in the industry and take additional measures to make sure sensitive data from our customers and homeowners is always protected and never compromised.</p>
                            <Link to="/security">
                                <button className="text-xl py-3 font-medium inline-flex hover:border hover:border-green-700 hover:bg-green-700 hover:rounded-4xl hover:px-5">Learn more
                                    <FaChevronRight className="mt-1 pt-2 ml-1"/>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <img className="h-150 pl-30" src={lock} alt="Lock"/>
                        </div>
                    </div>
                </div>
            </section>
            <section title="How haven" className="mt-40">
                <h1 className="text-4xl text-center font-bold font-serif px-90">How Spark accelerates your business</h1>
                <div>
                    <Listandkeys />
                </div>
            </section>
        </div>
    )
}

export default How;