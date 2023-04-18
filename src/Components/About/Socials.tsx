import Link from "next/link";

//IconPack
import { FacebookIcon, TwitterIcon, LinkedInIcon, GithubIcon } from "@/Icons/IconPack";

const Socials = () => {
    return (
        <ul className="flex gap-3 items-center justify-center mt-6">
            <li>
                <Link href="https://www.facebook.com/siamahnaf198/" target="_blank" className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-center shadow-md"><FacebookIcon size={16} className="fill-main" /></Link>
            </li>
            <li>
                <Link href="https://twitter.com/siamahnaf198" target="_blank" className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-center shadow-md"><TwitterIcon size={16} className="fill-main" /></Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/siamahnaf198/" target="_blank" className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-center shadow-md"><LinkedInIcon size={16} className="fill-main" /></Link>
            </li>
            <li>
                <Link href="https://github.com/siamahanf" target="_blank" className="w-10 h-10 rounded-full bg-white flex justify-center items-center text-center shadow-md"><GithubIcon size={16} className="fill-main" /></Link>
            </li>
        </ul>
    );
};

export default Socials;