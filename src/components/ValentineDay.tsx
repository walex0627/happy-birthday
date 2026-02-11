import { useState } from 'react';
import { Heart } from 'lucide-react'; // Asegúrate de tener instalado lucide-react

function ValentineDay() {
    // Estado para saber si ya aceptó
    const [accepted, setAccepted] = useState(false);
    // Estado para contar los "No"
    const [noCount, setNoCount] = useState(0);

    // Frases para el botón "No" para hacerlo más divertido
    const phrases = [
        "No",
        "¿Segura?",
        "¿De verdad?",
        "Piénsalo bien...",
        "Me vas a romper el corazón 💔",
        "¡Mira el otro botón!",
        "No seas así...",
        "¡Por favor!",
        "¡Andaaaa!",
        "¡Di que sí!",
        "No acepto un no por respuesta",
    ];

    // Calculamos qué frase mostrar. Si se acaban, repetimos la última.
    const getNoButtonText = () => {
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    // Esta es la magia: calculamos el tamaño del botón "Sí" basado en los "No"
    // Empieza en tamaño normal (1) y crece un 20% por cada clic en "No".
    // Usamos 'transform' para que el crecimiento sea suave.
    const yesButtonScale = 1 + (noCount * 0.25);

    // RENDERIZADO CONDICIONAL: ¿Qué mostramos?
    if (accepted) {
        // === PANTALLA DE ÉXITO (Cuando dice SÍ) ===
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 text-center">
                {/* GIF de celebración/beso */}
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzhjNTZ5Z3p4Z3c5Z3o1Z3c5Z3o1Z3c5Z3o1Z3c5Z3o1Z3c5Z3o1Z3c5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/G6N0pDDgDpLjUvNshH/giphy.gif"
                    alt="Beso bear"
                    className="w-64 h-64 object-cover rounded-full shadow-xl mb-8 border-4 border-rose-400"
                />
                <h1 className="text-4xl md:text-6xl font-extrabold text-rose-600 animate-bounce mb-4 flex items-center gap-3">
                    ¡Te amo mi amor! <Heart fill="currentColor" />
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-rose-800">
                    Bésameeee 😘
                </p>
            </div>
        );
    }

    // === PANTALLA DE LA PREGUNTA ===
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-rose-50 to-pink-200 p-4 overflow-hidden relative">

            {/* GIF tierno preguntando */}
            <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFhY2QzY2QzY2QzY2QzY2QzY2QzY2QzY2QzY2QzY2QzY2QzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
                alt="Cute bear asking"
                className="w-48 h-48 mb-8 mix-blend-multiply"
            />

            <h1 className="text-3xl md:text-5xl font-bold text-rose-700 text-center mb-12 max-w-lg leading-tight z-10">
                ¿Quieres ser mi San Valentín? 🌹
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-8 z-20">
                {/* BOTÓN SÍ */}
                {/* Usamos inline styles para la propiedad 'transform' porque es un valor dinámico que Tailwind no puede predecir */}
                <button
                    onClick={() => setAccepted(true)}
                    style={{ transform: `scale(${yesButtonScale})` }}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-100 ease-in-out transform origin-center focus:outline-none focus:ring-4 focus:ring-green-300 text-xl"
                >
                    Sí, ¡obvio! 🥰
                </button>

                {/* BOTÓN NO */}
                <button
                    onClick={() => setNoCount(noCount + 1)}
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-colors text-lg focus:outline-none focus:ring-4 focus:ring-rose-300"
                >
                    {getNoButtonText()}
                </button>
            </div>
        </div>
    );
};

export { ValentineDay };