import React, { useEffect, useState } from 'react'
import rollercoaster from "./assets/homehero.mp4"
import { Link } from 'react-router';
import soc2 from "./assets/soclogo.webp"
import vip from "./assets/viploanlogo.png"
import lock from "./assets/lockicon.webp"
import analytics from "./assets/analytics.png"
import cloudapi from "./assets/cloudapi.png"
import pcidss from "./assets/pcidss.webp"

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // or "auto" if you don't want animation
        });
    }, []);
    const Counter = ({ end }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const duration = 10000; // 10s
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
                start += 1; // increase speed by 1 step
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setCount(start);
            }, stepTime);
            return () => clearInterval(timer);
        }, [end]);

        return <span>{count.toLocaleString()}</span>;
    }
    return (
        <>  
            <section className="relative w-full h-screen flex items-center justify-center bg-green-900 overflow-hidden">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                >
                <source src={rollercoaster} type="video/mp4" />
                </video>

                {/* Overlay Content */}
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Reinventing Loan Servicing for the Digital Era</h1>
                    <p className="text-lg md:text-2xl mb-6">Borrower-first, lender-empowered solutions that drive retention and growth</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/demo-request" className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-transform hover:scale-95">Request a Demo</Link>
                        <button 
                            className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-transform hover:scale-95"
                            onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
                        >Learn More</button>
                    </div>
                </div>
            </section>
            <div className="w-full h-full bg-yellow-50 px-20 pt-10 pb-20">
                <section title="Why Choose Spark" id="features" className="pt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl font-bold font-serif mb-10">Why Choose Spark 🤔</h2>
                        <p className="text-lg text-gray-600 mb-12">We transform servicing into origination, retention, and growth through modern digital engagement.</p>
                        {/* Feature 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                                    <div className="text-green-700 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 4h6v6H5v-6h6z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Anticipate Borrower Intent</h3>
                                    <p className="text-gray-600 text-sm">
                                        Detect prepayment signals early and empower LOs to engage borrowers before competitors do.
                                    </p>
                                </div>
                                {/* Feature 2 */}
                                <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                                    <div className="text-green-700 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Educate & Build Loyalty</h3>
                                    <p className="text-gray-600 text-sm">
                                        Provide personalized borrower education, increasing trust, referrals, and long-term retention.
                                    </p>
                                </div>
                                {/* Feature 3 */}
                                <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                                    <div className="text-green-700 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm0 0V4m0 11v5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Personalized Offers</h3>
                                    <p className="text-gray-700 text-sm">
                                        Deliver in-context digital offers within the servicing platform to boost cross-sell opportunities.
                                    </p>
                                </div>
                                {/* Feature 4 */}
                                <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                                    <div className="text-green-700 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Smart Prefill</h3>
                                    <p className="text-gray-600 text-sm">
                                        Streamline origination by pre-collecting borrower data, enabling faster, smoother loan processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
                <section title="A track record" className="mt-40">
                    <div className="border border-orange-100 bg-orange-100 p-20 rounded-3xl">
                        <h1 className="text-4xl text-center mb-20 font-bold font-serif">A track record of success - <br/>results from 1 large client</h1>
                        <div className="grid grid-cols-5">
                            <div className="text-center">
                                <h1 className="text-5xl text-green-700 font-bold"><Counter end={315}/>K+</h1>
                                <p className="text-xl mt-3">solicitable logins</p>
                            </div>
                            <div className="border-0 bg-orange-300 w-1 h-15 mx-auto"></div>
                            <div className="text-center">
                                <h1 className="text-5xl text-green-700 font-bold"><Counter end={34}/>K+</h1>
                                <p className="text-xl mt-3">high intent, qualified <br/>leads</p>
                            </div>
                            <div className="border-0 bg-orange-300 w-1 h-15 mx-auto"></div>
                            <div className="text-center">
                                <h1 className="text-5xl text-green-700 font-bold"><Counter end={19}/>K+</h1>
                                <p className="text-xl mt-3">application starts</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section title='VIP Loan Integration' id="integrations" className="mt-40 bg-green-900 border border-green-900 rounded-3xl">
  <div className="max-w-7xl mx-auto px-6 py-10 lg:px-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">

    {/* LoanCare Callout */}
    <div className="bg-green-50 border border-green-200 rounded-3xl p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-green-900 mb-5">
        Seamless VIP Loan Integration
      </h2>
      <p className="text-gray-700">
        Spark integrates natively with <span className="font-semibold">VIP Loan</span>, 
        ensuring lenders can deliver a streamlined borrower experience while 
        maintaining compliance and operational efficiency.
      </p>
      <div className="flex flex-col items-center">
        <img src={vip} alt="LoanCare Logo" className="h-50" />
        <h1 className="text-lg text-gray-600 leading-none">Trusted Partner</h1>
        {/*leading-none : removes extra line spacing so text sits close to the logo */}
      </div>
    </div>

    {/* Ecosystem Map */}
    <div className="relative">
      {/* Central Circle */}
      <div className="w-40 h-40 bg-green-800 text-white rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
        <div className="w-30 h-30 bg-green-700 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-lg">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-4xl font-serif mx-auto relative z-10 shadow-lg">Spark</div>
            </div>
        </div>
      </div>

      {/* Integration Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 text-white">
          <div className="flex flex-col items-center pt-10 pl-15 transition-transform hover:scale-120">
            <img src={pcidss} alt="PCI DSS" className="h-12" />
            <p className="text-sm mt-2">PCI DSS</p>
          </div>
          <div className="flex flex-col items-center pb-20 transition-transform hover:scale-120">
            <img src={soc2} alt="SOC 2" className="h-12" />
            <p className="text-sm mt-2">SOC 2</p>
          </div>
          <div className="flex flex-col items-center pt-10 pr-15 transition-transform hover:scale-120">
            <img src={cloudapi} alt="Cloud API" className="h-12" />
            <p className="text-sm mt-2">Cloud APIs</p>
          </div>
          <div className="flex flex-col items-center pt-5 pl-15 transition-transform hover:scale-120">
            <img src={vip} alt="LoanCare" className="h-20" />
            <p className="text-sm">VIP Loan</p>
          </div>
          <div className="flex flex-col items-center pt-20 transition-transform hover:scale-120">
            <img src={lock} alt="Security" className="h-12" />
            <p className="text-sm mt-2">Encryption</p>
          </div>
          <div className="flex flex-col items-center pt-10 pr-15 transition-transform hover:scale-120">
            <img src={analytics} alt="Analytics" className="h-12" />
            <p className="text-sm mt-2">Analytics</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        </>
    )
}

export default Home
