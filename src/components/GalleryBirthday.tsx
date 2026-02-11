import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

function GalleryBirthday() {
    const [showMessage, setShowMessage] = useState(false);

    const galeria = [
        { id: 1, src: "/assets/IMG_20230125_193152_097.jpg"},
        { id: 2, src: "/assets/IMG_20250301_155756414_HDR_AE.jpg"},
        { id: 3, src: "/assets/IMG_20250329_222847944_MF_PORTRAIT.jpg" },
        { id: 4, src: "/assets/IMG-20230623-WA0046.jpg" },
        { id: 5, src: "/assets/IMG-20240314-WA0062.jpg" },
        { id: 6, src: "/assets/IMG-20250216-WA0011.jpg" },
        { id: 7, src: "/assets/IMG-20250218-WA0002.jpg" },
        { id: 8, src: "/assets/IMG-20260210-WA0045.jpg" },
        { id: 9, src: "/assets/WhatsApp Image 2026-02-10 at 8.49.40 PM.jpeg" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-white to-rose-100 py-12 px-4">

            {/* HEADER DINÁMICO */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="inline-block p-2 bg-white rounded-full shadow-md mb-4">
                    <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-rose-600 tracking-tight">
                    Para la persona más especial
                </h1>
            </motion.header>

            {/* GALERÍA TIPO POLAROID */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {galeria.map((foto, index) => (
                    <motion.div
                        key={foto.id}
                        whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                        className="bg-white p-4 shadow-xl border border-rose-50 rounded-sm"
                    >
                        <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                            <img
                                src={foto.src}
                                alt="Nosotros"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Button of hidden message */}
            <div className="text-center max-w-2xl mx-auto">
                {!showMessage ? (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowMessage(true)}
                        className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg flex items-center gap-3 mx-auto transition-colors"
                    >
                        <Sparkles /> Haz clic aquí, amor
                    </motion.button>
                ) : (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-rose-200 relative"
                        >
                            <div className="absolute -top-6 -left-6 bg-rose-400 text-white p-3 rounded-full">
                                <Heart fill="white" />
                            </div>

                            <h2 className="text-3xl font-bold text-rose-600 mb-6 italic">
                                ¡Feliz día, hermosa!
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Desde que llegaste a mi vida, todo tiene más color. Eres mi equipo, mi mejor amiga y el amor de mi vida. Gracias por cada risa y por construir este camino juntos. ¡Te amo muchísimo! ❤️
                            </p>
                            <p className="text-rose-400 font-semibold tracking-widest uppercase text-sm">
                                Siempre tuyo, Walter Gómez.
                            </p>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>

        </div>
    );
};

export { GalleryBirthday }