"use client"
import Link from "next/link"
import png1 from "../assets/png1.png"
import { useQuery, gql } from '@apollo/client';

export function MainHome() {
    const GET_INFO_POST = gql`
    query MyQuery {
        posts(last: 10) {
          id
          title
          slug
          img
        }
      }      
    `
    const { data} = useQuery(GET_INFO_POST)
  
    return (
        <main className="mb-10 flex flex-col gap-16 md:gap-20">
            <div className="flex gap-20 flex-col md:flex-row">
                <h1 className="text-black dark:text-white text-6xl md:text-8xl  p-4">Blog de <br /> Tecnologia</h1>
               <div className="mr-10 m-3">
               <img src={png1.src} alt="imagem de undraw" className="max-w-[100%] md:max-w-[400px]"/>
               </div>
            </div>
            <div  className="m-4 bg bg-gray-300 dark:bg-[#1E1E1F] dark:text-white rounded-2xl p-8 flex flex-col gap-6">
                <h1 className="text-4xl font-bold">Recentes</h1>
            {
                data && data.posts.map((post:{ img:string, slug:string,title:string,id:string}) => {
                    return (
                       
                        <Link key={post.id} href={""} className="p-4 flex flex-col md:flex-row border-t-0 border-l-0 border-r-0 border-b border-black dark:border-white gap-4">
                            <img src={post.img} alt={post.title} className="max-w-[200px]" />
                            <p>{post.title}</p>
                        </Link>
                    )
                })
            }
             <Link href="/list-posts" className="self-end dark:bg-white dark:text-button bg-button text-white hover:bg-gray-300 hover:text-button dark:hover:bg-[#1E1E1F] dark:hover:text-white transition-all py-1 px-6 rounded-lg flex justify-center items-center">Ver lista de postagem</Link>
            </div> 
        </main>
    )
}