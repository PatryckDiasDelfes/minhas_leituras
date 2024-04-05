"use client"

import { useState } from "react";
import { select, insert } from "@/app/Back-end/crud/service" 
import { Iobras, } from "@/app/types";

export default function Crud(props:{itens:any[]}) {

    let [itens, setItens] = useState(props.itens)
    
    const obrasDefault = {
        id: "",
        titulo: "",
        autor: "",
        resenha: "",
    }

    const [newObra, SetNewObra] = useState(obrasDefault)

 return(
    <>
        <section className="flex items-center justify-center gap-10 bg-[#262626] h-screen w-screen">
            <div className="w-[55%] h-[70%] p-6 px-8 rounded bg-[#F2F2F2]">
                <div className="flex items-center px-6 justify-between h-[15%] rounded-lg bg-[#F25A38] bg-opacity-35">
                    <div className="flex gap-5">
                        {itens.map((i) => (
                            <div className="flex gap-5">
                                <h1>{i.titulo}</h1>
                                <span>{i.autor}</span>
                            </div>
                        ))}
                </div>
                    <div className="flex gap-3">
                        <p>Ja terminei?</p>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
            <button className="bg-white p-3 rounded-xl">
                adcionar obra
            </button>
        </section>
    </>
 );
}