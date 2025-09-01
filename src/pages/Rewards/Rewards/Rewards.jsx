import Badges from "../Badges/Badges";
import Champs from "../Champs/Champs";
import Points from "../Points/Points";


const Rewards = () => {
    return (
        <div className="mt-10 bg-[#F6F6F6] ">
            <Badges></Badges>
            <Champs></Champs>
            <Points></Points>
        </div>
    );
};

export default Rewards;