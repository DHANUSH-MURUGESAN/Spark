import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import sparkwhite from "./assets/sparkwhite.png"


const Footer = () => {
    return (
        <div className="w-full bg-green-800 py-10 px-20">
            <div className="border-1 rounded-2xl border-white w-auto py-20 px-50 space-y-15">
                <h1 className="text-6xl font-medium text-white text-center">Unlock a new chapter - make home ownership make sense</h1>
                <button className="text-white text-2xl font-medium hover:bg-green-900 bg-green-700 text-center mx-75 px-25 py-2 rounded-lg">Get a Demo</button>
            </div>
            <div className="grid grid-cols-3 mt-10">
                <div>
                    <h1 className="text-emerald-500">We're Spark</h1>
                    <ul className="text-white">
                        <li><Link to="/how-it-works">How it Works</Link></li>
                        <li>For Services</li>
                        <li>For Subservices</li>
                        <li>For Lenders</li>
                    </ul>
                </div>
                <div className="grid grid-cols-3">
                    <div className="">
                        <ul>
                            <li className="text-emerald-500">Resources</li>
                            <li className="text-emerald-500">Blog <span className="badge border border-amber-300 bg-amber-300 rounded-2xl p-1 text-[10px] font-medium text-green-900">Coming soon</span></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-emerald-500">Support</h1>
                        <ul className="text-white">
                            <li><Link to="/security">Security & Compliance</Link></li>
                            <li>Why is Spark involved?</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-emerald-500">Company</h1>
                        <ul className="text-white">
                            <li><Link to="/about">About</Link></li>
                            <li>Pressroom</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="ml-95">
                    <Link to="/"><img src={sparkwhite} className="h-20"/></Link>
                </div>
            </div>
            <div className="mt-10 w-full text-center grid grid-rows-2">
                <h1 className="text-white text-2xl font-medium">Get the latest in customer retention</h1>
                <div className="flex space-x-5 mx-auto items-center">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email your email address"
                            className="bg-white text-black pl-5 pr-30 py-2 ml-15 rounded-lg placeholder:font-medium placeholder:text-gray-400"
                        />
                    </form>
                    <button className="bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded-lg">Subscribe</button>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-40">
                <div className="flex text-2xl space-x-5">
                    <FaFacebook className="text-white"/>
                    <FaTwitter className="text-white"/>
                    <Link to="https://www.linkedin.com/in/dhanush-murugesan-stm/"><FaLinkedin className="text-white"/></Link>
                </div>
                <div className="grid-cols-3 inline-flex space-x-5">
                    <p className="text-white">Privacy Policy</p>
                    <p className="text-white">Terms of Use</p>
                    <p className="text-white"><Link to="/coordinated-disclosure-policy">Coordinated Disclosure Policy</Link></p>
                </div>
                <div>
                    <p className="text-white text-center">© {new Date().getFullYear()} Spark. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer