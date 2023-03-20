import { createElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, TwitterIcon, LinkedInIcon, GithubIcon } from "@/Icons/IconPack";

//Logo Images
import Logo from "@/Assets/logo/logo.png";

//Data
import { Navs } from "./TopHeader";

//interface
interface Props {
    open: boolean;
    onClose: () => void;
    hideBackdrop?: boolean;
}

const Sidebar = ({ open, onClose, hideBackdrop }: Props) => {
    return (
        <div>
            <div className={`${hideBackdrop ? "" : "bg-black bg-opacity-50"} fixed top-0 right-0 bottom-0 left-0 z-40 transition-all duration-200 ease-in-out ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={onClose}></div>
            <div className={`bg-white dark:bg-dark fixed top-0 h-screen z-50 transition-all duration-[225ms] direction-ltl left-0 ease-[cubic-bezier(0, , 0.2, 1)] w-64 ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                <div className="relative h-screen w-full">
                    <div>
                        <div className="text-center pt-8">
                            <Image src={Logo} alt="Logo" style={{ width: "110px", height: "110px" }} className="mx-auto" />
                        </div>
                        <div className="mt-20 px-10">
                            {Navs.map((item, i) => (
                                <Link href="/" className="flex gap-2 my-2 items-center" key={i}>
                                    {createElement(item.icon, { size: 18, className: "fill-dark dark:fill-white" })}
                                    <span className="font-medium">{item.text}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="text-center absolute bg-dark text-white bottom-0 left-0 w-full py-5 dark:border-t dark:border-solid dark:border-white dark:border-opacity-25">
                        <h2 className="text-xl mb-3 font-semibold">Siam Ahnaf</h2>
                        <ul className="flex gap-2 items-center justify-center">
                            <li className="mx-2">
                                <Link href="https://www.facebook.com/siamahnaf198/" target="_blank"><FacebookIcon size={16} className="fill-main" /></Link>
                            </li>
                            <li className="mx-2">
                                <Link href="https://twitter.com/siamahnaf198" target="_blank"><TwitterIcon size={16} className="fill-main" /></Link>
                            </li>
                            <li className="mx-2">
                                <Link href="https://www.linkedin.com/in/siamahnaf198/" target="_blank"><LinkedInIcon size={16} className="fill-main" /></Link>
                            </li>
                            <li className="mx-2">
                                <Link href="https://github.com/siamahanf" target="_blank"><GithubIcon size={16} className="fill-main" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;