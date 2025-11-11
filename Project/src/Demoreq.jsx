// import meaningful from "./assets/meaningful.webp"
// import understand from "./assets/understand.webp"
// import customize from "./assets/customize.webp"

// const Demoreq = () => {
//     return (
//         <div className="w-full h-full bg-yellow-50 px-20 py-10">
//             <div className="grid grid-cols-2">
//                 <div className="py-50">
//                     <h1 className="text-4xl px-25 font-bold font-serif">Experience the Spark platform first-hand</h1>
//                     <p className="text-xl py-8 px-25 font-sans">The easiest way for lenders and servicers to build loyalty and retain customers starts with a demo.</p>
//                     <ul className="pt-10 pl-25 text-[22px] font-serif font-semibold space-y-5">
//                         <li className="inline-flex"><img className="w-15 pr-5" src={meaningful} alt="Meaningful"/>Engage meaningfully</li>
//                         <li className="inline-flex"><img className="w-15 pr-5" src={understand} alt="Understand"/>Understand your customers</li>
//                         <li className="inline-flex"><img className="w-15 pr-5" src={customize} alt="Customize"/>Customize offers, increase retention</li>
//                     </ul>
//                 </div>
//                 <div>Get in touch</div>
//             </div>
//         </div>
//     )
// }

// export default Demoreq;



import React, { useEffect } from "react";
import meaningful from "./assets/meaningful.webp";
import understand from "./assets/understand.webp";
import customize from "./assets/customize.webp";

const Demoreq = () => {

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-screen bg-yellow-50 pt-30 px-10 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 leading-tight">
            Experience the Spark Platform First-Hand
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-6 font-sans">
            The easiest way for lenders and servicers to build loyalty and retain customers starts with a demo.
          </p>

          <ul className="mt-10 space-y-5 text-lg md:text-xl font-serif font-semibold text-gray-800">
            <li className="flex items-center">
              <img className="w-10 h-10 mr-4" src={meaningful} alt="Meaningful" />
              Engage meaningfully
            </li>
            <li className="flex items-center">
              <img className="w-10 h-10 mr-4" src={understand} alt="Understand" />
              Understand your customers
            </li>
            <li className="flex items-center">
              <img className="w-10 h-10 mr-4" src={customize} alt="Customize" />
              Customize offers, increase retention
            </li>
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Enter your company"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Request Demo
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Demoreq;