"use client"

import { useState } from "react";
import { select, insert } from "@/app/Back-end/crud/service" 
import { Iobras, } from "@/app/types";
import Shetet from "./Sheet";

export default function Crud(props:{itens:any[]}) {

    let [itens, setItens] = useState(props.itens)

    const [modalState, setModalState] = useState()
    
    const obrasDefault = {
        id: parseInt(itens[itens.length-1]?.id) + 1 || 0,
        titulo: "",
        autor: "",
        resenha: "",
    }

    const [newObra, SetNewObra] = useState(obrasDefault)

    function addPost() {
        insert({id: newObra.id, titulo: newObra.titulo})
        setItens([...itens, newObra])
        SetNewObra({...obrasDefault, id: parseInt(itens[itens.length-1]?.id) + 1 || 0})
    }

 return(
    <>
        <section className="bg-[#FDF5A3] w-[100vw] h-[100vh] flex p-10">

            <header className="bg-[#B4D27A] w-[150px] h-[150px] absolute top-0 right-0 flex justify-center items-center">
                <div className="bg-red-300 w-[120px] h-[120px] rounded-full flex justify-center items-center">
                    perfil
                </div>
            </header>

            <div className="outline flex-col absolute top-48 right-8">
                <button onClick={() => addPost()} className="bg-[#7CBB63] w-[90px] h-[60px] rounded-xl">add nova obra</button>
                <input onChange={(e) => (SetNewObra ({...newObra, titulo: e.target.value}))} type="text" className="outline" /> 
            </div>
                
                <div className="grid gap-y-36 gap-x-8 grid-cols-6">
                    {itens.map((i) => (
                        <article className="bg-[#FEF4DA] w-[212px] h-[235px] flex items-end rounded-2xl border-2 border-gray-600">
                            <section key={i.id} className="bg-[#F2C894] w-[212px] h-[67px] rounded-b-[14px] flex justify-center items-center">
                                <div>  
                                    <h1>{i.titulo} - {i.id}</h1>
                                </div>
                            </section>
                      </article>
                    ))}
                </div>

        </section>
    </>
 );
}