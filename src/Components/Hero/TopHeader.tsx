import { useState, useEffect } from "react";
import { PhoneIcon, MailIcon } from "@/Icons/PhoneIcon";
import { DarkModeSwitch } from "animated-toggle-button";
import { useTheme } from "next-themes";
import Link from "next/link";

const TopHeader = () => {
    //State
    const [mounted, setMounted] = useState<boolean>(false)
    //Next Themes
    const { systemTheme, theme, setTheme } = useTheme();
    const currentColor = theme === "system" ? systemTheme : theme;
    const onThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <div className="flex">
            <div className="mr-10">
                <Link href="mailto:mail@siamahnaf.com">
                    <PhoneIcon className="inline mr-2 mt-[-1px] fill-crimson" size={17} />
                    <span className="text-base font-medium">+8801611994403</span>
                </Link>
            </div>
            <div>
                <Link href="tel:+8801611994403">
                    <MailIcon className="inline mr-2 mt-[-1px] fill-crimson" size={18} />
                    <span className="text-base font-medium">mail@siamahnaf.com</span>
                </Link>
            </div>
            <div className="flex-1 text-right overflow-hidden select-none">
                {mounted &&
                    <DarkModeSwitch
                        style={{ marginLeft: "auto" }}
                        checked={currentColor === "dark"}
                        onChange={onThemeChange}
                        size={25}
                        moonColor={currentColor == "light" ? "black" : "white"}
                        sunColor={currentColor == "light" ? "#ffaa00" : "white"}
                    />
                }
            </div>
        </div>
    );
};

export default TopHeader;