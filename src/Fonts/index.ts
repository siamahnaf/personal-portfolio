import { Quicksand, Rubik } from '@next/font/google';

export const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: 'swap'
})

export const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    weight: ["600"],
    display: 'swap'
})