import TopHeader from "@/Components/Hero/TopHeader";

//Components
import Content from "@/Components/Hero/Content";
import Transition from "@/Components/Hero/Transition";
import Features from "@/Components/Hero/Features";

const Hero = () => {
    return (
        <div className="xl:container xl:mx-auto">
            <TopHeader />
            <div className="flex flex-wrap lg:py-0 lg:pt-0 msm:py-14 sm:py-10 xxs:py-7">
                <div className="smd:basis-7/12 xxs:basis-full">
                    <Content />
                </div>
                <div className="basis-5/12 w-screen overflow-hidden smd:block xxs: hidden">
                    <Transition />
                </div>
            </div>
            <Features />
        </div>
    );
};

export default Hero;