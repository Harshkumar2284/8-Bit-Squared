import Login from "../components/auth/Login";
import Wizard from "../assets/sprites/Wizard.png"
import Register from "../components/auth/Register";
export default function Auth() {
    return (
        <div className="w-screen flex flex-col justify-center items-center ">
            <div className="w-3/5 border-2 border-black p-2 h-96 bg-[#7E83A0] rounded-xl mt-8">
                <div className="border-2 border-black w-full h-full rounded-xl bg-[#2B2A3A] flex flex-col items-center">
                    <div className="border-2 border-black -mt-8.75 w-fit px-1 bg-[#717592] py-1  rounded-lg h-fit">
                        <div className= "border-2 border-[#454964] px-2 rounded-lg bg-[#4B4C6A] w-full h-full">
                            <h1 className=" font-heading text-6xl text-[#e0e0e0] font-semibold tracking-wide">Create your profile</h1>
                        </div>
                        
                    </div>
                    <div className="flex justify-between w-full mt-5 px-10">
                        <Login />
                        <div className="w-1/3 flex items-end justify-end px-8">
                            <img src={Wizard} alt="Wizard" className="w-45 h-50 " />
                            <div className="h-full border-2 border-black"></div>
                            <div className="h-full border-2 border-zinc-600"></div>
                        </div>
                        <Register />
                    </div>
                </div>
            </div>
            <h1 className="text-2xl font-heading text-[#e0e0e0]">Forgot Password?  <span className="underline text-blue-300 hover:cursor-pointer">Recover Password</span></h1>
        </div>
    )
}