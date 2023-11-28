import { Link } from "react-router-dom";
import { Button } from "./Components/Navbar/Button";

export function Subscribe(){
    return (
    <footer className="flex justify-end items-end h-[100%] bottom-right">
        <div className="flex items-end h-">
            <input className="text-2xl px-5 py-3 content-center focus:outline-none focus:text-black " type="text" placeholder="Enter Email" required/>
            <Button><Link to="/signup">Subscribe</Link></Button>
        </div>
    </footer>
    )
}