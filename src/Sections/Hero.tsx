import TopHeader from "@/Components/Hero/TopHeader";

//Components
import Content from "@/Components/Hero/Content";
import Transition from "@/Components/Hero/Transition";

const Hero = () => {
    return (
        <div>
            <TopHeader />
            <div className="flex flex-wrap">
                <div className="basis-2/4">
                    <Content />
                </div>
                <div className="basis-2/4 w-screen overflow-hidden">
                    <Transition />
                </div>
            </div>
        </div>
    );
};

export default Hero;