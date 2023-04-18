import Image from "next/image";
import Link from "next/link";

//Components
import Socials from "@/Components/About/Socials";
import AboutList from "@/Components/About/AboutList";

//Images
import AboutImage from "@/Assets/about.png";

const About = () => {
    return (
        <div className="bg-white dark:bg-dark shadow-md rounded-2xl my-8">
            <div className="bg-main bg-[url('/shape.png')] bg-no-repeat bg-center bg-cover px-24 rounded-t-2xl">
                <div className="grid grid-cols-3 items-center">
                    <div>
                        <Image src={AboutImage} alt="About Me" width={400} height={400} className="w-64" />
                    </div>
                    <div className="text-center text-white col-span-2">
                        <h2 className="text-6xl font-mono font-bold mb-1">Siam Ahnaf</h2>
                        <p className="font-medium text-xl">MERN Stack Developer</p>
                        <Socials />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 px-10 py-5 gap-20">
                <div>
                    <h4 className="text-2xl font-bold mb-3">About <span className="text-main">Me</span></h4>
                    <p className="opacity-90 mb-3">I&apos;m a MERN stack Web Developer with over 6 years of experience. I&apos;m from Bangladesh. I code and create web elements for amazing people, agencies, and organizations around the world. I like working with new technologies. New Technology is a new Experience.</p>

                    <p className="opacity-90">My experience is a coding experience. And my languages/frameworks is also the latest one. My moral is Experience is the key to a Noble work. And passion is the best way to gather more and more Experience!</p>
                    <div className="mt-5">
                        <Link href="/" className="bg-black text-white py-2.5 px-5 rounded-md text-base font-medium dark:bg-main transition-all duration-200 ease-in-out">
                            Download Resumes
                        </Link>
                    </div>
                </div>
                <div>
                    <AboutList />
                </div>
            </div>
        </div>
    );
};

export default About;