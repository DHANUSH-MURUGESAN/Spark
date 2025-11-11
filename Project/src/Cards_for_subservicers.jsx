import { memo, useState } from "react";
import live from "./assets/livedashboard.png"
import lock from "./assets/lockicon.webp"

const Cards_for_subservicers = memo(({bold, details, image}) => {
    return(
        <div className="mt-20 mr-5 py-5 text-white border border-green-700 bg-green-700 hover:scale-105 rounded-3xl">
            <h1 className="text-2xl font-bold text-center pb-5">{bold}</h1>
            <img src={image} className="mt-4 mb-5 w-30 h-20 place-self-center" />
            <p className="px-5">{details}</p>
        </div>
    )
})

const Listandkeys_for_subservicers = () => {
    const Details = [
        {
            image : live,
            bold : "Real-Time Visibility",
            details : "Monitor portfolio performance with live dashboards.",
        },
        {
            image : lock,
            bold : "Compliance Built-In",
            details : "Stay ahead of evolving regulations with built-in compliance tools."
        },
        {
            image : lock,
            bold : "Actionable Intelligence",
            details : "Leverage borrower insights to drive smarter decisions."
        }
    ]
    const [list_sub, setListSub] = useState(Details);


    return(
        <div className="grid grid-cols-3">
            {list_sub.map(({bold, details, image}) => (
                <Cards_for_subservicers image={image} bold={bold} details={details} handle={setListSub}/>
            ))}
        </div>
    )
}

export default Listandkeys_for_subservicers;