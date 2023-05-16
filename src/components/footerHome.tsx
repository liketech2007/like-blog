"use client"
import logo from "../assets/logo.png"
import logoDark from "../assets/logo-dark.png"
import { ContextTheme } from "../contexts/contextTheme"
import { useContext } from "react";
import Link from "next/link";

export function FooterHeader() {
    const {theme,setTheme} = useContext(ContextTheme)
    return (
        <footer className="min-w-full p-4 border border-b-0 border-l-0 border-r-0 border-black dark:border-white flex flex-col md:flex-row gap-6">
            <div>
       {
        theme === "" ?  <img src={logo.src} className="max-w-[100px]" alt="Logo do like blog"/> :  <img src={logoDark.src} className="max-w-[100px]"  alt="Logo do like blog"/>
       }
      </div>
      
      <ul className="flex gap-6 flex-wrap  items-center justify-between">
            <li>
              <Link href="/list-posts" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Blog</Link>
            </li>
            <li>
              <Link href="/sobre-nos" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Sobre nós</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Instagram</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Youtube</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Tik Tok</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">linkedin</Link>
            </li>
          </ul>
    </footer>
    )
}