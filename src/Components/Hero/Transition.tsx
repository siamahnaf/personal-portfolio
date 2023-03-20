import { Fade } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css"

//Slide Show Images
import image3 from '@/Assets/background/hero-bg-3.png';

//Data
const fadeImages = [
    {
        url: image3,
        alt: "image-3"
    }
];

const Transition = () => {
    return (
        <div>
            <Fade
                arrows={false}
                pauseOnHover={false}
                duration={8000}
            >
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <Image src={fadeImage.url} alt={fadeImage.alt} />
                    </div>
                ))}
            </Fade>
        </div>
    );
};
export default Transition;