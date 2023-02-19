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
        <div>
            <h6>Hi there, My name is</h6>
            <h2>Siam Ahnaf</h2>
            <h4 className="h-[20px]">
                <TextLoop
                    texts={Professions}
                />
            </h4>
            <p>
                I am Siam Ahnaf a MERN stack web application Developer. I am skillful in NodeJs, ExpressJs, GraphQL, NestJs, ReactJs, NextJs and almost all React UI-library & frameworks. Get quality full work at your desired time!
            </p>
            <Link href="/" className="bg-black text-white">Download CV</Link>
        </div>
    );
};

export default Content;