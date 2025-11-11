import { useEffect } from "react";
import satisfaction from "./assets/satisfactionbadge.png"
import Listandkeys_for_subservicers from "./Cards_for_subservicers";
import vijay from "./assets/thalapathyvijay.jpg"
import dhanush from "./assets/dhanush.png"
import ivana from "./assets/ivana.png"
import jayamravi from "./assets/jayamravi.jpg"
import sridivya from "./assets/sridivya.jpg"
import thewonk from "./assets/thewonk.png"
import funny from "./assets/funny.png"
import oneminus from "./assets/oneminus.png"
import uplus from "./assets/uplus.png"
import coma from "./assets/coma.jpg"

const Subservicers = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // or "auto" if you don't want animation
        });
    }, []); 
    return (
        <div className="w-full h-full bg-yellow-50 px-20 pt-20 pb-20">
            <h1 className="text-7xl text-center font-serif font-bold">Welcome to the Future of Subservicing</h1>
            <section title="Welcome to the Future of Subservicing" className="pt-20">
                <div className="border border-orange-100 bg-orange-100 py-20 rounded-3xl">
                    <div className="grid grid-cols-2">
                        <div className="mx-20">
                            <h1 className="text-4xl font-bold font-serif">Empower Your Subservicing with Precision & Transparency</h1>
                            <p className="text-xl mt-5">Unlock operational efficiency, borrower satisfaction, and real-time portfolio control.</p>
                            <img src={satisfaction} className="h-30 mt-5 mx-40" />
                            <button className="bg-green-700 hover:bg-green-900 text-white text-xl px-5 py-3 mt-5 font-sans rounded-lg">Schedule Free Consultation</button>
                        </div>
                        <div>
                            <iframe
                                src="https://www.youtube.com/embed/VIDEO_ID"
                                title="YouTube video"
                                className="absolute w-150 h-90 mt-5 rounded-3xl"
                            ></iframe>
                            <h1 className="text-2xl text-center text-white font-bold absolute top-140 pl-55">Watch Demo</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section title="Why Top Subservicers Choose Haven" className="mt-40">
                <h1 className="text-4xl text-center font-bold font-serif mb-10">Why Top Subservicers Choose Spark 🤔</h1>
                <Listandkeys_for_subservicers/>
            </section>
            <section title="See how it works" className="mt-40">
                <h1 className="text-4xl text-center font-bold font-serif mb-10">See How It Works</h1>
                <div className="grid grid-cols-5 mt-20">
                    <div className="border border-orange-100 bg-orange-100 py-5 px-1 mr-10 rounded-3xl">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-445 left-17">
                            <p>1</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Loan <br></br>Onboarding</h1>
                        <p className="pt-5">Seamlessly onboard loans with accurate data capture and instant portfolio setup.</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-100 py-5 px-1 mr-10 rounded-3xl">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-445 left-85">
                            <p>2</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Data Synchronization</h1>
                        <p className="pt-5">Keep every stakeholder in sync with real-time updates and secure integrations.</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-100 py-5 px-2 mr-10 rounded-3xl">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-445 left-153">
                            <p>3</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Borrower Engagement</h1>
                        <p className="pt-5">Enhance borrower experience through personalized communication and portals.</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-100 py-5 px-2 mr-10 rounded-3xl">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-445 right-150">
                            <p>4</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Performance Monitoring</h1>
                        <p className="pt-5">Track key performance metrics and portfolio health in a live dashboard.</p>
                    </div>
                    <div className="border border-orange-100 bg-orange-100 py-5 px-2 mr-10 rounded-3xl">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white font-bold absolute top-445 right-82">
                            <p>5</p>
                        </div>
                        <h1 className="text-2xl font-medium text-center">Reporting & Compliance</h1>
                        <p className="pt-5">Generate detailed reports and ensure regulatory compliance effortlessly.</p>
                    </div>
                </div>
            </section>
            <section title="Proven Success with Real Clients" className="mt-40">
                <h1 className="text-4xl text-center font-bold font-serif mb-15">Proven Success with Real Clients</h1>
                <div className="relative w-[400px] h-[450px] mx-auto perspective-[1200px]">
                <div className="carousel-3d absolute inset-0">
                {/* 1st card */}
                <section className="absolute inset-0 flex justify-center items-center [transform:rotateY(0deg)_translateZ(500px)]">
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={vijay} alt="Joseph" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold text-lg">Joseph</h4>
                                <p className="text-sm text-gray-500">Founder, The Wonk</p>
                            </div>
                            <img src={thewonk} alt="The Wonk" className="ml-auto w-12 h-12 object-contain" />
                        </div>
                        <p className="italic text-gray-700 mb-4">“Since moving to Spark, our resolution times dropped by 45% and customer satisfaction shot up.”</p>
                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">-45% Resolution Time</div>
                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">+30% Customer Satisfaction</div>
                        </div>
                    </div>
                </section>
                {/* 2nd card */}
                <section className="absolute inset-0 flex justify-center items-center [transform:rotateY(72deg)_translateZ(500px)]">
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={dhanush} alt="Ram" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold text-lg">Ram</h4>
                                <p className="text-sm text-gray-500">Managing Director, Funny</p>
                            </div>
                            <img src={funny} alt="Funny" className="ml-auto w-12 h-12 object-contain" />
                        </div>
                        <p className="italic text-gray-700 mb-4">“Since moving to Spark, our resolution times dropped by 25% and customer satisfaction shot up.”</p>
                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">-25% Resolution Time</div>
                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">+50% Customer Satisfaction</div>
                        </div>
                    </div>
                </section>
                {/* 3rd card */}
                <section className="absolute inset-0 flex justify-center items-center [transform:rotateY(144deg)_translateZ(500px)]">
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={ivana} alt="Nikitha" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold text-lg">Nikitha</h4>
                                <p className="text-sm text-gray-500">Founder, One Minus Mobiles</p>
                            </div>
                            <img src={oneminus} alt="One Minus" className="ml-auto w-12 h-12 object-contain" />
                        </div>
                        <p className="italic text-gray-700 mb-4">“Since moving to Spark, our resolution times dropped by 40% and customer satisfaction shot up.”</p>
                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">-40% Resolution Time</div>
                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">+75% Customer Satisfaction</div>
                        </div>
                    </div>
                </section>
                {/* 4th card */}
                <section className="absolute inset-0 flex justify-center items-center [transform:rotateY(216deg)_translateZ(500px)]">
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={jayamravi} alt="Karthik" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold text-lg">Karthik</h4>
                                <p className="text-sm text-gray-500">Co-Founder, U Plus Laptops</p>
                            </div>
                            <img src={uplus} alt="U Plus" className="ml-auto w-12 h-12 object-contain" />
                        </div>
                        <p className="italic text-gray-700 mb-4">“Since moving to Spark, our resolution times dropped by 30% and customer satisfaction shot up.”</p>
                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">-30% Resolution Time</div>
                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">+85% Customer Satisfaction</div>
                        </div>
                    </div>
                </section>
                {/* 5th card */}
                <section className="absolute inset-0 flex justify-center items-center [transform:rotateY(288deg)_translateZ(500px)]">
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={sridivya} alt="Dhivya" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold text-lg">Dhivya</h4>
                                <p className="text-sm text-gray-500">Founder, Coma Land Promoters</p>
                            </div>
                            <img src={coma} alt="Coma" className="ml-auto w-12 h-12 object-contain" />
                        </div>
                        <p className="italic text-gray-700 mb-4">“Since moving to Spark, our resolution times dropped by 22% and customer satisfaction shot up.”</p>
                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">-22% Resolution Time</div>
                            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">+55% Customer Satisfaction</div>
                        </div>
                    </div>
                </section>
                <style>{`@keyframes flip {
                    0%, 100% { transform: rotateY(0); }
                    20% { transform: rotateY(-72deg); }
                    40% { transform: rotateY(-144deg); }
                    60% { transform: rotateY(-216deg); }
                    80% { transform: rotateY(-288deg); }
                }

                .carousel-3d {
                    animation: flip 45s infinite linear;
                    transform-style: preserve-3d;
                }`}</style>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Subservicers