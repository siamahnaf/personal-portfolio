import { PhoneIcon, MailIcon } from "@/Icons/PhoneIcon";
import { DarkModeSwitch } from "animated-toggle-button";
import { useTheme } from "next-themes";

const TopHeader = () => {
    //Next Themes
    const { systemTheme, theme, setTheme } = useTheme();
    const currentColor = theme === "system" ? systemTheme : theme;
    const onThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div className="flex">
            <div>
                <PhoneIcon />
                <span>+8801611994403</span>
            </div>
            <div className="">
                <MailIcon />
                <span>mail@siamahnaf.com</span>
            </div>
            <div className="flex-1 text-right overflow-hidden select-none">
                <DarkModeSwitch
                    style={{ marginLeft: "auto" }}
                    checked={currentColor === "light"}
                    onChange={onThemeChange}
                    size={40}
                    moonColor={currentColor == "light" ? "black" : "white"}
                    sunColor={currentColor == "light" ? "black" : "white"}
                />
            </div>
        </div>
    );
};

export default TopHeader;