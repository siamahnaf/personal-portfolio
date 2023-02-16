import { Fade } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css"

//Slide Show Images
import image1 from '@/Assets/background/hero-bg-1.png';
import image2 from '@/Assets/background/hero-bg-2.png';

//Data
const fadeImages = [
    {
        url: image1,
        alt: "image-1"
    },
    {
        url: image2,
        alt: "image-2"
    },
];

const Transition = () => {
    return (
        <div>
            <Fade
                arrows={false}
                pauseOnHover={false}
                duration={3000}
            >
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <Image src={fadeImage.url} width={600} height={600} alt={fadeImage.alt} />
                    </div>
                ))}
            </Fade>
        </div>
    );
};
export default Transition;