import hoodie from "./assets/Sweatshirt.jpeg";
import { Subscribe } from "./Footer";
export function Main(){
    return(
        <div className="relative flex text-white items-center justify-center ">
        <img src={hoodie} className='' alt="Hoodie" style={{width:'100%',height:'100%'}}/>
        <div className="centered fa-fade">Get the Best Deals and Styles at MOTUS</div>
        <Subscribe/>
      </div>
    )
}