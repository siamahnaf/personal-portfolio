import { useState, useEffect, createElement } from "react";
import { DarkModeSwitch } from "animated-toggle-button";
import { useTheme } from "next-themes";
import Link from "next/link";

//Component
import Sidebar from "./Sidebar";

//Icons
import { PhoneIcon, MailIcon, UserIcon, SkillIcon, ContactIcon, MenuBarIcon } from "@/Icons/IconPack";


//Data
export const Navs = [
    { icon: UserIcon, text: "About" },
    { icon: SkillIcon, text: "Skill" },
    { icon: ContactIcon, text: "Contact" }
]

const TopHeader = () => {
    //State
    const [mounted, setMounted] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    //Next Themes
    const { systemTheme, theme, setTheme } = useTheme();
    const currentColor = theme === "system" ? systemTheme : theme;
    const onThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    //Handler
    const handleClose = () => {
        setOpen(false);
    };
    //Lifecycle hook
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <div className="flex items-center py-1 lg:py-1 smd:py-2 xxs:py-3">
            <div className="mr-5 smd:hidden xxs:block">
                <button onClick={() => setOpen(true)}>
                    <MenuBarIcon size={16} className="inline -mt-px" />
                </button>
            </div>
            <div className="msm:mr-10 xxs:mr-4">
                <Link href="mailto:mail@siamahnaf.com" className="group">
                    <PhoneIcon className="inline mr-2 mt-[-1px] fill-main group-hover:fill-dark dark:group-hover:fill-white transition-all duration-200 ease-in-out" size={17} />
                    <span className="text-base font-medium transition-all duration-200 ease-in-out group-hover:text-main msm:inline xxs:hidden">+8801611994403</span>
                </Link>
            </div>
            <div className="smd:flex-none xxs:flex-1">
                <Link href="tel:+8801611994403" className="group">
                    <MailIcon className="inline mr-2 mt-[-1px] fill-main group-hover:fill-dark dark:group-hover:fill-white transition-all duration-200 ease-in-out" size={18} />
                    <span className="text-base font-medium transition-all duration-200 ease-in-out group-hover:text-main msm:inline xxs:hidden">mail@siamahnaf.com</span>
                </Link>
            </div>
            <div className="flex-1 text-center smd:block xxs:hidden">
                <div className="flex items-center justify-center gap-1">
                    {Navs.map((item, i) => (
                        <Link href="/" className="relative group block w-14 text-center py-0.5" key={i}>
                            {createElement(item.icon, { size: 18, className: "fill-dark relative top-0 transition-all ease-in-out duration-[400ms]  group-hover:top-5 group-hover:opacity-0 group-hover:invisible mx-auto dark:fill-white" })}
                            <p className="text-[14px] font-medium absolute left-0 -top-6 opacity-0 w-full invisible transition-all ease-in-out duration-[400ms] group-hover:opacity-100 group-hover:visible group-hover:top-0">{item.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="text-right overflow-hidden select-none">
                {mounted &&
                    <DarkModeSwitch
                        style={{ marginLeft: "auto" }}
                        checked={currentColor === "dark"}
                        onChange={onThemeChange}
                        size={20}
                        moonColor={currentColor == "light" ? "black" : "white"}
                        sunColor={currentColor == "light" ? "#ffaa00" : "white"}
                    />
                }
            </div>
            <Sidebar
                open={open}
                onClose={handleClose}
            />
        </div>
    );
};

export default TopHeader;