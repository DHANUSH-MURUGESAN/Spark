import { useEffect } from "react";

const Loancare =  () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // or "auto" if you don't want animation
        });
    }, []); 
    return (
        <div>Loancare</div>
    )
}

export default Loancare