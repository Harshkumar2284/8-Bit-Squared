import HeroImage from "../../assets/images/HeroImage.png"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"
export default function Hero() {
    const navigate = useNavigate()
    return (
        <div className="w-full flex justify-center">
            <div className=" w-5/6 mt-14 flex flex-col lg:flex-row ">
                <div className=" w-full lg:w-1/2 h-full  flex flex-col items-center justify-center">
                    <h1 className="text-[#e0e0e0] text-4xl lg:text-8xl font-heading">Connect. Chat.</h1>
                    <h1 className="text-[#e0e0e0] text-4xl lg:text-8xl font-heading">Quest Together.</h1>
                    <h2 className="text-[#e0e0e0] text-xl text-center lg:text-4xl font-heading mt-2">Retro communication, leveled up!</h2>
                    <Button variant="secondary" className="tracking-tight lg:w-4/6 lg:text-3xl mt-6" onClick={() => navigate("/join")}>
                        Start Your Adventure
                    </Button>
                </div>
                <div className=" w-full lg:w-1/2 h-full flex items-center justify-center">
                    <img src={HeroImage} alt="Hero"  className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}