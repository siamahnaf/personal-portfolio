import { useState, useEffect, Fragment } from "react";
import FeaturesData from "@/Data/Hero/Features.data";
import Image from "next/image";
import { useTheme } from "next-themes";

const Features = () => {
    //State
    const [mounted, setMounted] = useState<boolean>(false);
    //Next Themes
    const { systemTheme, theme, setTheme } = useTheme();
    const currentColor = theme === "system" ? systemTheme : theme;
    //Lifecycle hook
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <div className="py-6">
            <h6 className="text-2xl font-semibold">
                Languages/frameworks
            </h6>
            <p className="text-[17px] mb-8">
                These are a few of the languages/frameworks I&apos;ve used in projects and am most familiar with.
            </p>
            <div className="grid grid-cols-8 xxl:grid-cols-11 xl:grid-cols-9 lg:grid-cols-8 md:grid-cols-6 smd:grid-cols-5 msm:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3 xxs:grid-cols-2 gap-4">
                {FeaturesData.map((item, i) => (
                    <div key={i}>
                        <div className={item.background + " bg-opacity-20 relative after:bg-main after:backdrop-blur-[10px] after:backdrop-saturate-[180%] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-opacity-10 rounded-md after:rounded-md px-[25px] py-[35px]"}>
                            <div className="relative z-10">
                                {mounted &&
                                    <Fragment>
                                        {currentColor === "light" &&
                                            <Image src={item.image} alt={item.figure} />
                                        }
                                        {currentColor === "dark" &&
                                            <>
                                                {item.dark &&
                                                    <Image src={item.dark} alt={item.figure} />
                                                }
                                                {!item.dark &&
                                                    <Image src={item.image} alt={item.figure} />
                                                }
                                            </>
                                        }
                                    </Fragment>
                                }
                            </div>
                        </div>
                        <p className="text-center mt-[5px] text-base font-medium">{item.figure}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};
export default Features;

