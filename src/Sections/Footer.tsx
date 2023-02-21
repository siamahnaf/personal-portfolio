import { SettingsIcon } from "@/Icons/IconPack";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="text-center py-3">
            <p>
                <SettingsIcon size={22} className="inline mx-auto mr-2 -mt-0.5" />
                <span className="text-base font-medium">My site is under maintenance.{" "}
                    <Link href="https://old.siamahnaf.com" className="text-main hover:underline">
                        Old Version
                    </Link>
                </span>
            </p>
        </div>
    );
};
export default Footer;