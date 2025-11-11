import { memo, useState } from "react";
import partnership from "./assets/partnerships-Icon.webp";
import handshake from "./assets/handshake-colour-icon.webp";
import trees from "./assets/trees-colour-icon.webp";

const Cards_for_servicers = memo(({image, Bold, details}) => {
    return(
        <div className="mt-20 mr-5">
            <div className="p-10">
                <img src={image} className="mt-4 mb-5 w-30 h-20 place-self-center"/>  
                <div className="text-xl"><span className="font-semibold font-serif">{Bold}</span> {details}</div>
            </div>
        </div>
    )
})

const Listandkeys_for_servicers = () => {
    const Details = [
        {
            image : partnership,
            bold : "Unlock new purchase",
            details : "Get your borrowers to tell you when you are moving and connect them with realtors so you are there first.",
        },
        {
            image : handshake,
            bold : "Expand into new verticals",
            details : "2nd lien? Insurance? We come with an integrated marketplace of white-labeled providers that give you more revenue per borrower."
        },
        {
            image : trees,
            bold : "Predict prepayment",
            details : "Better model CPR based on borrower-permissioned data that no one else has."
        }
    ]
    const [list, setList] = useState(Details);


    return(
        <div className="grid grid-cols-3">
            {list.map(({bold, details, image}) => (
                <Cards_for_servicers Bold={bold} details={details} image={image} handle={setList}/>
            ))}
        </div>
    )
}

export default Listandkeys_for_servicers;