import security from "./assets/security.webp"
import { TiTick } from "react-icons/ti";
import soc from "./assets/soclogo.webp"
import disclosure from "./assets/disclosure.webp"
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect } from "react";

const Security = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // or "auto" if you don't want animation
        });
    }, []); 

    return(
        <div className="w-full h-full bg-yellow-50 px-20 py-10">
            <section>
                <div className="grid grid-cols-2 pt-20">
                    <div>
                        <p className="text-green-700 font-medium mb-5">Security & Compliance</p>
                        <h1 className="text-6xl font-bold font-serif pr-25">We keep your homeowners’ data safe, at every step</h1>
                        <p className="text-xl mt-10 mb-15 pr-38">Your homeowners’ financial information is both personal and powerful — that’s why security is one of the first things we think about when designing our products, policies, and practices. Our information security program is designed to exceed industry standards, and we use multiple tiers of controls to keep your homeowners’ personal information safe.</p>
                    </div>
                    <div>
                        <img src={security} alt="Security"/>
                    </div>
                </div>
            </section>
            <section className="mt-40 mb-20">
                <div className="border border-orange-100 bg-orange-100 px-20 py-20 rounded-3xl">
                    <div className="grid grid-cols-3 mb-20">
                        <div>
                            <h1 className="text-[30px] font-medium">We take your security seriously</h1>
                        </div>
                        <div>
                            <ul className="space-y-5">
                                <li className="inline-flex"><TiTick className="mt-1 mr-2 text-green-700"/>Encryption safeguards your homeowners’ data with Spark</li>
                                <li className="inline-flex"><TiTick className="mt-1 mr-2 text-green-700"/>Our products are built on secure cloud infrastructure</li>
                                <li className="inline-flex"><TiTick className="mt-1 mr-2 text-green-700"/>Around-the-clock monitoring protects homeowner information</li>
                            </ul>
                        </div>
                        <div className="ml-20">
                            <ul className="space-y-5">
                                <li className="inline-flex"><TiTick className="mt-1 mr-2 text-green-700"/>3rd party security audits</li>
                                <li className="inline-flex"><TiTick className="mt-1 mr-2 text-green-700"/>Regular network penetration testing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mr-15">
                        <div className="inline-flex">
                            <div className="px-10 py-5 mr-10">
                                <img className="w-45 ml-10" src={soc} alt="SOC Logo"/>
                            </div>
                            <div className="py-5">
                                <h1 className="text-3xl mb-2 font-serif font-medium">SOC2</h1>
                                <p className="text-xl">Spark is a SOC 2 Type 2 certified provider. Further information about our SOC 2 compliance is available upon request to current and prospective customers.</p>
                            </div>
                        </div>
                        <div className="inline-flex">
                            <div className="px-10 py-5 mr-10">
                                <img className="w-25 ml-10" src={disclosure} alt="Disclosure Logo"/>
                            </div>
                            <div className="py-5">
                                <h1 className="text-3xl mb-2 font-serif font-medium">Coordinated Disclosure</h1>
                                <p className="text-xl mb-3">Data security is a top priority for Spark, and we are proud to work with skilled researchers to improve our security.</p>
                                <Link to="/coordinated-disclosure-policy" className="text-[15px] text-green-700 font-medium inline-flex transition-transform hover:translate-x-2">Read our policy<FaChevronRight className="mt-1 ml-1 px-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Security;