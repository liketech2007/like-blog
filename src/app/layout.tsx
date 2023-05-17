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
    <ApolloProvider client={client}>
      <ContextTheme.Provider value={{theme,setTheme}}>
      <html lang="pt" className={theme}>
      <head>
        <meta name="description" content="Like Blog é um blog de tecnologia e dicas, oferecendo informações atualizadas sobre as últimas tendências tecnológicas, gadgets e aplicativos. Com uma abordagem concisa e fácil de entender, nosso objetivo é ajudar os leitores a aproveitarem ao máximo a tecnologia em suas vidas diárias. De análises de produtos a guias passo a passo, nosso conteúdo abrange uma ampla gama de tópicos, incluindo smartphones, dispositivos domésticos inteligentes, segurança cibernética, inteligência artificial e muito mais" />
        <meta name="keywords" content="tecnologia, gadgets, aplicativos, análises, guias, smartphones, dispositivos domésticos inteligentes, segurança cibernética, inteligência artificial." />
        <link rel="icon" type="image/x-icon" href={logo.src} />
        <title>Like Blog - Aplicação</title>
      </head>
      <body className='bg-primary text-textP dark:bg-secondary dark:text-textS flex flex-col lg:justify-center lg:items-center md:justify-center md:items-center'>
        <Cookie />
          {children}
          <Ads />
      </body>
    </html>
    </ContextTheme.Provider>
    </ApolloProvider>
  )
}
