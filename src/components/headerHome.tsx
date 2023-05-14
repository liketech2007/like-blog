"use client"
import Link from "next/link";
import { List, X } from "@phosphor-icons/react"
import { useState } from "react"

export function HeaderHome() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="p-4 flex justify-between  lg:w-[80%]">
      <div>
        <h1 className="text-4xl">
          Like Blog
        </h1>
      </div>
      <div>
        <nav className="hidden md:block">
          <ul className="flex gap-6 justify-between">
            <li>
              <Link href="/blog" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Blog</Link>
            </li>
            <li>
              <Link href="/sobre-nos" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Sobre nós</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Política de <br /> Privacidade</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">tema</Link>
            </li>
            <li>
              <Link href="/" className="dark:bg-white dark:text-button bg-button text-white hover:bg-white hover:text-button dark:hover:bg-button dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Aplicação</Link>
            </li>
          </ul>
        </nav>
        <div className={openMenu === false ? "z-50 flex justify-end items-end gap-4 flex-col md:hidden" :  "fixed top-2 right-2 flex justify-end items-end gap-4 flex-col md:hidden bg-gray-300 dark:bg-[#1E1E1F] p-4 rounded-lg drop-shadow-2xl"}>
          <div>
          { 
            openMenu === true ? ( <X size={64} className="text-button dark:text-white transition-all" onClick={() => setOpenMenu(false)}/>) : ( <List size={64} className="text-button dark:text-white transition-all" onClick={() => setOpenMenu(true)}/>)
          }
          </div>
          {
            openMenu && <ul className="flex gap-4 flex-col">
                    <li>
                    <Link href="/blog" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Blog</Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Sobre nós</Link>
                  </li>
                  <li>
                    <Link href="/politica-de-privacidade" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">Política de <br /> Privacidade</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:bg-button hover:text-white dark:hover:bg-white dark:hover:text-button transition-all py-1 px-6 rounded-lg flex justify-center items-center">tema</Link>
                  </li>
                  <li>
                    <Link href="/" className="dark:bg-white dark:text-button bg-button text-white hover:bg-white hover:text-button dark:hover:bg-button dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Aplicação</Link>
                  </li>
            </ul>
          }
        </div>
      </div>
    </header>
  )
}