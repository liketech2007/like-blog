"use client"
import { FooterHome } from "@/components/footerHome";
import { HeaderHome } from "@/components/headerHome";
import { MainHome } from "@/components/mainHome";

export default function Home() {
    return (
        <>
            <HeaderHome />
            <MainHome />
            <FooterHome />
        </>
    )
}