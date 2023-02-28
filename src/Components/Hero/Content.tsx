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
        <div className="pt-48">
            <h6 className="text-xl font-medium">Hi there 👋 My name is</h6>
            <h2 className="text-[80px] font-bold -ml-1 font-mono leading-tight my-2">Siam Ahnaf</h2>
            <h4 className="h-[20px] text-[26px] font-semibold mb-8 text-main relative">
                <TextLoop
                    texts={Professions}
                />
            </h4>
            <p className="text-[17px] font-medium mb-10 w-11/12">
                I am Siam Ahnaf a MERN stack web application Developer. I am skillful in NodeJs, ExpressJs, GraphQL, NestJs, ReactJs, NextJs and almost all React UI-library & frameworks. Get quality full work at your desired time!
            </p>
            <Link href="/" className="bg-black text-white py-2.5 px-5 rounded-md text-base font-medium dark:bg-main transition-all duration-200 ease-in-out">
                Download CV
            </Link>
        </div>
    );
};

export default Content;