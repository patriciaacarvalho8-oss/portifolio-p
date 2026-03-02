"use client";

import { useEffect, useMemo, useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const error = useMemo(() => {
        return !email.includes("@")
    }, [email]);
    //const[error, setError] = useState(false);

    /*useEffect(() => {
        if (email.includes("@")){
            setError(false);
        }else{
            setError(true);
        }
    }, [email]);*/

    function getEmail (){
           if(!error){
             const mensagem = `Gostaria de entrar em contato! \n\nemail: ${email}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5541992791114?text=${msg}`)
           }

    }


    return (
        <main className="w-screen h-screen flex flex-col gap-16 items-center justify-center">
            <h1 className="text-6xl">Contato</h1>


            <div>
                <p>Digite seu email para eu entrar em contato</p>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    className="border border-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                {error && <p>Email invalido</p>}
            </div>
            <button className="cursor-poiter border border-white py-2 px-10 rouded-full
            disabled:cursor-not-allowed"
            onClick={() => getEmail()}
            disabled={error}
            >Enviar</button>

        </main>

    )
}