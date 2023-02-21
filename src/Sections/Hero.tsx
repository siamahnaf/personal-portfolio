import TopHeader from "@/Components/Hero/TopHeader";

//Components
import Content from "@/Components/Hero/Content";
import Transition from "@/Components/Hero/Transition";
import Features from "@/Components/Hero/Features";

const Hero = () => {
    return (
        <div>
            <TopHeader />
            <div className="flex flex-wrap">
                <div className="basis-7/12">
                    <Content />
                </div>
                <div className="basis-5/12 w-screen overflow-hidden">
                    <Transition />
                </div>
            </div>
            <Features />
        </div>
    );
};

export default Hero;