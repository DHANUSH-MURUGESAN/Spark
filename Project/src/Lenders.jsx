import { Link } from "react-router"
import for_lenders_hero from "./assets/forlendershero.webp"
import unified from "./assets/unifiedhomebuying.webp"
import { FaRegCheckCircle } from "react-icons/fa"
import oneminus from "./assets/oneminus.png"
import uplus from "./assets/uplus.png"
import funny from "./assets/funny.png"
import ibi from "./assets/ibi.jpg"
import thewonk from "./assets/thewonk.png"
import boxplant from "./assets/boxplant.webp"
import { useEffect, useState } from "react"
import casestudy from "./assets/Analysis.gif"


const Lenders = () => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    window.scrollTo({
    top: 0,
    behavior: "smooth", // or "auto" if you don't want animation
  });
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  }, 5000);
  return () => clearInterval(interval);
}, []);

    return (
        <div className="w-full h-full bg-yellow-50 px-20 pt-10 pb-20">
            <section title="Capture more">
                <div className="border border-orange-100 bg-orange-100 p-20 rounded-3xl">
                    <div className="grid grid-cols-2">
                        <div className="pl-10 pr-25">
                            <h1 className="text-6xl font-bold font-serif">Capture more value from your MSR</h1>
                            <p className="text-xl mt-5 mb-25">Use servicing connectivity to power origination and new product upsell from your existing borrowers, supercharging your LOs along the way.</p>
                            <Link to="/demo-request" className="bg-green-700 hover:bg-green-900 text-white text-2xl px-25 py-3 font-sans rounded-lg">Get a Demo</Link>
                        </div>
                        <div>
                            <img src={for_lenders_hero} alt="For-Servicers"/>
                        </div>
                    </div>
                </div>
            </section>
            <section title="Unified homebuying">
                <div className="mt-50">
                    <div className="grid grid-cols-2 mx-20">
                        <div className="pr-20 mt-10">
                            <p className="text-green-700 font-medium mb-5">Unified homebuying</p>
                            <h1 className="text-4xl font-bold font-serif mb-5">Connect the Homebuying Journey, Your Way</h1>
                            <p className="text-xl">Seamlessly route borrowers to your call center, LOs, wholesale partners, or realtors—centralizing control and maximizing conversion. Multi-brand support lets you tailor experiences based on borrower profile.</p>
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
            <section title="How haven elevates lender experience" className="mt-40">
                <h1 className="text-4xl text-center font-bold font-serif mb-10">How Spark Elevates Lender Experience</h1>
                <div className="grid grid-cols-4 mt-20">
                    <div className="border border-orange-100 bg-orange-100 py-5 px-5 mr-10 rounded-3xl transition-transform hover:scale-110">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-437 left-17">
                            <p>🔔</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Anticipate Borrower Intent</h1>
                        <p className="pt-5">Harness real-time prepayment signals—outpace competitors by anticipating borrower needs.</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-100 py-5 px-5 mr-10 rounded-3xl transition-transform hover:scale-110">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-437 left-102">
                            <p>📘</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Educate to Build Loyalty & Referrals</h1>
                        <p className="pt-5">Offer personalized financial education to deepen engagement beyond servicing tasks.</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-100 py-5 px-5 mr-10 rounded-3xl transition-transform hover:scale-110">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-437 left-187">
                            <p>🏷️</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Drive Retention with Personalized Offers</h1>
                        <p className="pt-5">Embed tailored digital offers directly in servicing portals—convert interest into revenue.</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-100 py-5 px-5 mr-10 rounded-3xl transition-transform hover:scale-110">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-437 left-272">
                            <p>📝</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Prefill for LO Enablement</h1>
                        <p className="pt-5">Pre-collect borrower income, asset, and credit data—empower LOs to reach out before competitors.</p>
                    </div>
                </div>
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
                <img className="absolute w-40 h-35 right-40 top-620" src={boxplant} alt="Box-Plant" />
              </div>
            </section>
            <section className="py-20 bg-green-900 mt-40 rounded-3xl">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl text-white text-center font-bold font-serif mb-10">Resources & Social Proof – See the Benefits, Up Close</h2>
                    <p className="text-lg text-white mb-12">Real-world results and trusted partners show Spark’s impact.</p>
                    {/* Case Study / Download */}
                    <div className="grid grid-cols-2 gap-10 items-center mb-20">
                        <div className="bg-white shadow-lg rounded-2xl p-8 text-left">
                            <h3 className="text-2xl font-semibold mb-4">See how IBI Bank boosted cross-sell by 35% using Spark.</h3>
                            <p className="text-gray-600 mb-6">Discover how lenders are driving retention, loyalty, and revenue lift through digital borrower engagement.</p>
                            <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-transform hover:scale-95">
                                Download Case Study <span className="text-lg">→</span>
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img src={casestudy}
                                alt="Case Study Illustration"
                                className="w-80 h-auto rounded-2xl" 
                            />
                        </div>
                    </div>
          {/* Logos Carousel */}
          <div className="overflow-hidden mb-16">
            <div className="flex animate-scroll-x space-x-12">
              <img
                src={oneminus}
                alt="Client logo 1"
                className="h-12 grayscale bg-white hover:grayscale-0 transition"
              />
              <img
                src={uplus}
                // src="/logos/logo2.png"
                alt="Client logo 2"
                className="h-12 grayscale hover:grayscale-0 transition"
              />
              <img
                src={ibi}
                alt="Client logo 3"
                className="h-12 grayscale hover:grayscale-0 transition"
              />
              <img
                src={funny}
                alt="Client logo 4"
                className="h-12 grayscale hover:grayscale-0 transition"
              />
              <img
                src={thewonk}
                alt="Client logo 5"
                className="h-12 grayscale hover:grayscale-0 transition"
              />
            </div>
          </div>

          {/* Testimonials Rotator */}
          <div className="max-w-3xl mx-auto transition-all duration-700">
            {currentIndex === 0 && (
              <div className="bg-white shadow-md rounded-2xl p-8">
                <p className="text-xl italic mb-4">
                  “Spark helped us reduce churn by 20% while empowering our loan
                  officers to deepen client relationships.”
                </p>
                <p className="text-gray-700 font-semibold">
                  — VP of Servicing, IBI Bank
                </p>
              </div>
            )}

            {currentIndex === 1 && (
              <div className="bg-white shadow-md rounded-2xl p-8">
                <p className="text-xl italic mb-4">
                  “Cross-sell opportunities increased by 35% within the first
                  quarter of using Spark.”
                </p>
                <p className="text-gray-700 font-semibold">
                  — Director of Lending, Jandha Credit Union
                </p>
              </div>
            )}

            {currentIndex === 2 && (
              <div className="bg-white shadow-md rounded-2xl p-8">
                <p className="text-xl italic mb-4">
                  “Our borrower engagement scores improved drastically—Spark
                  made retention effortless.”
                </p>
                <p className="text-gray-700 font-semibold">
                  — Chief Growth Officer, Bluthoot Finance
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
        </div>
    )
}

export default Lenders