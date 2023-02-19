import FeaturesData from "@/Data/Hero/Features.data";
import Image from "next/image";

const Features = () => {
    return (
        <div>
            <h6>
                Languages/frameworks
            </h6>
            <p>
                These are a few of the languages/frameworks I&apos;ve used in projects and am most familiar with.
            </p>
            <div className="grid grid-cols-8 gap-4">
                {FeaturesData.map((item, i) => (
                    <div className={`bg-${item.background}`} key={i}>
                        <Image src={item.image} alt={item.figure} />
                        <p className="text-blue">{item.figure}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};
export default Features;