import png1 from "../assets/png1.png"
export function MainHome() {
    return (
        <main className="mb-10">
            <div className="flex gap-4 flex-col md:flex-row">
                <h1 className="text-black dark:text-white text-6xl md:text-8xl  p-4">Blog de <br /> Tecnologia</h1>
               <div className="mr-10 m-3">
               <img src={png1.src} alt="imagem de undraw" className="max-w-[100%] md:max-w-[400px]"/>
               </div>
            </div>
            <div className="m-4 bg bg-gray-300 rounded-2xl p-8 flex flex-col gap-6 justify-center items-center">
                <h1 className="text-2xl font-bold">Recentes</h1>
              
           </div> 
           <div className="m-4">
             <h1 className="text-4xl">Artigos</h1>
             <ul>

             </ul>
           </div>
        </main>
    )
}