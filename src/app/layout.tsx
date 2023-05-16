"use client"
import './globals.css'
import { useState,useEffect } from "react"
import { ContextTheme } from '../contexts/contextTheme'
import { client } from "../utils/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { Ads } from '@/components/ads'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme,setTheme] = useState("")
  useEffect(() => {
    const getTheme = localStorage.getItem("theme")
    setTheme(getTheme === null ? theme : getTheme)
  },[])
  return (
    <ApolloProvider client={client}>
      <ContextTheme.Provider value={{theme,setTheme}}>
      <html lang="en" className={theme}>
      <head>
        <title>Model</title>
      </head>
      <body className='bg-primary text-textP dark:bg-secondary dark:text-textS flex flex-col lg:justify-center lg:items-center'>
          {children}
          <Ads />
      </body>
    </html>
    </ContextTheme.Provider>
    </ApolloProvider>
  )
}
