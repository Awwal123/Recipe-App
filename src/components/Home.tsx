import { CheckOut } from "./CheckOut"
import { Kitchen } from "./FromKitchen"
import { HeroSection } from "./HeroSection"
import { Navbar } from "./Navbar"

 
 export const Home = () => {
   return (
     <div>
        <Navbar />
        <HeroSection />
        <CheckOut />
        <Kitchen />
     </div>
   )
 }
 