import { TextLoop } from "react-text-loop-ts";
import Link from "next/link";

//Data
const Professions = [
    'MERN Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'NodeJs Developer',
    'NestJs Developer',
    'GraphQL Developer',
    'ExpressJs Developer',
    'NextJs Developer',
    'ReactJs Developer',
]

const Content = () => {
    return (
        <div className="pt-48 xxl:pt-60 xl:pt-80 lg:pt-48 md:pt-24 xs:pt-8 xxs:pt-5">
            <h6 className="text-xl font-medium">Hi there 👋 My name is</h6>
            <h2 className="text-[80px] lg:text-[80px] md:text-7xl xs:text-5xl xxs:text-[45px] font-bold -ml-1 lg:-ml-1 xxs:ml-0 font-mono leading-tight my-2">Siam Ahnaf</h2>
            <h4 className="h-[20px] text-[26px] xs:text-[26px] xxs:text-[22px] font-semibold mb-8 xs:mb-8 xxs:mb-6 text-main relative">
                <TextLoop
                    texts={Professions}
                />
            </h4>
            <p className="text-[17px] xs:text-[17px] xxs:text-[15px] font-medium mb-10 w-11/12 xxl:w-9/12 sm:w-11/12 xxs:w-full">
                I&apos;m Siam Ahnaf, a passionate developer who loves to learn new things and create awesome projects. I enjoy working on both front-end and back-end development and have experience with various programming languages and frameworks.
            </p>
            <Link href="/" className="bg-black text-white py-2.5 px-5 rounded-md text-base font-medium dark:bg-main transition-all duration-200 ease-in-out">
                Download CV
            </Link>
        </div>
    );
};

export default Content;