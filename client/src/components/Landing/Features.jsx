import Chat from "../../assets/icons/Chat.png"
import Sound from "../../assets/icons/Sound.png"
import Guild from "../../assets/icons/Guild.png"
import Quest from "../../assets/icons/Quest.png"
export default function Features() {
    return(
        <div className="w-full flex flex-col items-center justify-center mt-20 ">
            <h1 className="text-[#e0e0e0] text-5xl font-heading">Features</h1>
            <div className="  flex justify-evenly w-3/5">
                <div className="p-4 flex flex-col items-center justify-center">
                    <img src={Chat} alt="Chat Feature" className="w-40 h-auto" />
                    <h1 className="font-heading text-3xl text-[#e0e0e0]  ">Real-Time Chat</h1>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <img src={Guild} alt="Chat Feature" className="w-40 h-auto" />
                    <h1 className="font-heading text-3xl text-[#e0e0e0]  ">Create Guilds</h1>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <img src={Quest} alt="Chat Feature" className="w-40 h-auto" />
                    <h1 className="font-heading text-3xl text-[#e0e0e0]  ">Complete Quests</h1>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <img src={Sound} alt="Chat Feature" className="w-40 h-auto" />
                    <h1 className="font-heading text-3xl text-[#e0e0e0]  ">Retro Sound FX</h1>
                </div>
            </div>
        </div>
    )
}