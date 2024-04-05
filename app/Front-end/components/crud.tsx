import { useState } from "react";
import { insert } from "@/app/Back-end/crud/service" 

export default function Crud(props:{itens:any[]}) {

    let [itens, setItens] = useState(props.itens)
 return(
    <>
        <section className="flex items-center justify-center bg-[#262626] h-screen w-screen">
            <div className="w-[55%] h-[70%] p-6 px-8 rounded bg-[#F2F2F2]">
                <div className="px-6">
                    <div className="flex gap-5">
                        <h1>Obras</h1>
                        <span>Autor</span>
                    </div>
                </div>
                <div className="flex items-center px-6 justify-between h-[15%] rounded-lg bg-[#F25A38] bg-opacity-35">
                    <div className="flex gap-5">
                        <h1>Nome livro</h1>
                        <span>Autor</span>
                    </div>
                    <div className="flex gap-3">
                        <p>Ja terminei?</p>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </section>
    </>
 );
}