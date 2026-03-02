import Card from "@/components/Card";
export default function Projects() {
    return (
        <main className="h-screen w-screen bg-red-950 flex items-center flex-col gap-4">
            <h1 className="text-6x1 mt-4">Meus projetos</h1>
            <Card href="https://github.com/patriciaacarvalho8-oss/lp-forja-tarde" src="/antartida.png"
                title="Lp"
                description="Uma pagina com 4 seções" />
            <Card href="https://github.com/lauraesilva-design/stylecar" src="/carro6 (1).webp"
                title="carstyle"
                description="Empresa de carros" />
            <Card href="https://github.com/patriciaacarvalho8-oss/lista.c" src="/images.jpg"
                title="lista C"
                description="lista de exercicios na linguagem C" />

        </main>
    )
} 