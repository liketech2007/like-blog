"use client"
import './globals.css'
import { useState,useEffect } from "react"
import { ContextTheme } from '../contexts/contextTheme'
import { client } from "../utils/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { Ads } from '@/components/ads'
import logo from "../assets/logo.png"
import { Cookie } from '@/components/cookie'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme,setTheme] = useState("dark")
  useEffect(() => {
    const getTheme = localStorage.getItem("theme")
    setTheme(getTheme === null ? theme : getTheme)
  },[])
  return (
      <html lang="pt" className={theme}>
      <head>
         <meta name="google-site-verification" content="1lfwbI5iaZGzNLpAToU8l8xFTQX3Vli6rohjtGbT5dU" />
         <link rel="icon" type="image/x-icon" href={logo.src} /> 
      </head>
      <body className='bg-primary text-textP dark:bg-secondary dark:text-textS flex flex-col lg:justify-center lg:items-center md:justify-center md:items-center'>
      <ApolloProvider client={client}>
      <ContextTheme.Provider value={{theme,setTheme}}>
        <Cookie />
          {children}
          <Ads />
          </ContextTheme.Provider>
        </ApolloProvider>
      </body>
    </html>
  )
}