// import { ChevronDownIcon } from "@heroicons/react/16/solid";
// import spark from "./assets/spark.png"
// import { Link } from "react-router";

// const Nav = () => {
//     return (
//         <div className="w-full px-8 py-3 justify-self-start inline-flex">
//             <div className="text-3xl font-medium text-green-700 inline-flex items-center"><img src={spark} className="mt-1 mr-2 h-10" />Spark</div>
//             <div className="flex space-x-8 mx-auto items-center">
//                 <Link to="/"  className="text-1xl font-medium text-green-900">Home</Link>
//                 <Link to="/about"  className="text-1xl font-medium text-green-900">About</Link>
//                 <Link to="/how-it-works"  className="text-1xl font-medium text-green-900">How it Works</Link>
//                 <Link to="/security"  className="text-1xl font-medium text-green-900">Security & Compliance</Link>
//                 {/* <button className="text-1xl font-medium text-green-900 flex">Use Cases
//                     <ChevronDownIcon aria-hidden="true" className="size-5 mt-1" />
//                 </button>
//                 <button className="text-1xl font-medium text-green-900 flex">Company
//                     <ChevronDownIcon aria-hidden="true" className="size-5 mt-1" />
//                 </button> */}
//             </div>
//             <Link to="/demo-request" className="bg-green-700 hover:bg-green-900 text-white inline-flex items-center px-4 py-2 rounded-lg">Get a Demo</Link>
//         </div>
//     )
// }

// export default Nav;



import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Menu, X } from "lucide-react";
import spark from "./assets/spark.png";
import { Link } from "react-router";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md backdrop-blur-sm">
      <div className="px-6 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-semibold text-green-700 flex items-center">
          <img src={spark} alt="Spark Logo" className="h-10 mr-2 mt-1" />
          Spark
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-1xl font-medium text-green-900 hover:text-green-700 transition">
            Home
          </Link>
          <Link to="/about" className="text-1xl font-medium text-green-900 hover:text-green-700 transition">
            About
          </Link>
          <Link to="/how-it-works" className="text-1xl font-medium text-green-900 hover:text-green-700 transition">
            How it Works
          </Link>
          <Link to="/security" className="text-1xl font-medium text-green-900 hover:text-green-700 transition">
            Security & Compliance
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/demo-request"
            className="bg-green-700 hover:bg-green-900 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
          >
            Get a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-800 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-green-900 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-green-900 font-medium"
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            onClick={() => setMenuOpen(false)}
            className="block text-green-900 font-medium"
          >
            How it Works
          </Link>
          <Link
            to="/security"
            onClick={() => setMenuOpen(false)}
            className="block text-green-900 font-medium"
          >
            Security & Compliance
          </Link>
          <Link
            to="/demo-request"
            onClick={() => setMenuOpen(false)}
            className="block bg-green-700 text-white text-center py-2 rounded-lg font-semibold"
          >
            Get a Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;