import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"
function Navbar() {
    const navigate = useNavigate()
    return (
        <nav>
            <div className=" top-0 w-full h-auto lg:h-28 justify-between flex flex-col lg:flex-row  items-center px-4 lg:px-10 gap-3 lg:gap-0">
                <h1 className="text-4xl lg:text-6xl  bg-linear-to-t from-yellow-500  to-yellow-200 bg-clip-text text-transparent  tracking-wider font-heading font-bold">8-Bit <span className="bg-linear-to-t from-blue-700 to-blue-100 bg-clip-text text-transparent">Squared</span></h1>
                <div className="border-2  border-[#1c1c1c] rounded-lg shadow-sm shadow-black">
                    <div className="border flex border-t-blue-200 text-[10px]  lg:text-xl  bg-linear-to-tr  from-[#22126a] to-[#1f45ac] border-l-blue-200 border-r-zinc-600 border-b-zinc-600 h-full w-full px-2 lg:px-5 py-2 lg:py-3 rounded-lg gap-2 lg:gap-0">
                        <Button className="lg:mr-10 ">
                            Home
                        </Button>
                        <Button className="lg:mr-10 ">
                            Features
                        </Button>
                        <Button className="lg:mr-10 ">
                            About
                        </Button>
                        <Button variant="secondary" onClick={() => navigate("/join")}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}
export default Navbar