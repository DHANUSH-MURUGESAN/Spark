import { memo, useState } from "react";
import compass from "./assets/compass.webp";
import keys from "./assets/keys.webp";
import signature from "./assets/signature.webp";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";

const Card = memo(({name, details, image, button, path, colour}) => {
    return(
        <div className="mt-20 mr-5">
            <div className={`p-10 rounded-3xl shadow-2xl ${colour}`}>
                <p className="text-4xl font-medium font-serif">{name}</p>
                <p>{details}</p>
                <img src={image} className="mt-4 mb-5 w-50 h-40 place-self-center"/>  
                <Link to={path} className="inline-flex hover:border-amber-50 hover:bg-amber-50 hover:p-3 hover:rounded-3xl transition-transform hover:translate-x-2">{button}<FaChevronRight className="mt-1 ml-2 pt-1"/></Link>     
            </div>
        </div>
    )
})

const Listandkeys = () => {
    const Details = [
        {
            name : "For Servicers",
            details : "Improve yields on your MSR with technology that enables your recapture and cross-sell strategy.",
            image : compass,
            button : "For Servicers",
            locationPath : "/for-servicers",
            bgColour : "bg-teal-300"
        },
        {
            name : "For Subservicers",
            details : "Win more servicing deals by offering your clients best-in-class recapture functionality.",
            image : keys,
            button : "For Subservicers",
            locationPath : "/for-subservicers",
            bgColour : "bg-violet-300"
        },
        {
            name : "For Lenders",
            details : "Ensure your LOs focus to recapture the highest-intent leads from your portfolio.",
            image : signature,
            button : "For Lenders",
            locationPath : "/for-lenders",
            bgColour : "bg-orange-300"
        }
    ]
    const [list, setList] = useState(Details);


    return(
        <div className="grid grid-cols-3">
            {list.map(({name, details, image, button, locationPath, bgColour}) => (
                <Card name={name} details={details} image={image} button={button} path={locationPath} colour={bgColour} handle={setList}/>
            ))}
        </div>
    )
}

export default Listandkeys;