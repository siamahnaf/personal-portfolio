import TopHeader from "@/Components/Hero/TopHeader";

//Components
import Content from "@/Components/Hero/Content";
import Transition from "@/Components/Hero/Transition";
import Features from "@/Components/Hero/Features";
import Sidebar from "@/Components/Hero/Sidebar";

const Hero = () => {
    return (
        <div className="xxl:container xxl:mx-auto">
            <TopHeader />
            <div className="flex flex-wrap xxl:pt-28 lg:py-0 lg:pt-0 lsm:py-14 ">
                <div className="smd:basis-7/12 xxs:basis-full">
                    <Content />
                </div>
                <div className="basis-5/12 w-screen overflow-hidden smd:block xxs: hidden">
                    <Transition />
                </div>
            </div>
            <Features />
            <Sidebar />
        </div>
    );
};

export default Hero;