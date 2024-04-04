import { useState } from "react"; 

export default function Crud() {
 return(
    <>
        <section className="flex items-center justify-center bg-[#262626] h-screen w-screen">
            <div className="w-[55%] h-[70%] p-6 px-8 rounded bg-[#F2F2F2]">
                adsfasdf
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