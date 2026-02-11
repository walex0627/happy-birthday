import { motion } from 'framer-motion';
import { Heart, MailOpen, Star } from 'lucide-react';

function BirthdayMessage() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-rose-100"
            >
                {/* Header de la carta */}
                <div className="bg-rose-500 p-8 text-center relative overflow-hidden">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 -right-10 text-rose-400 opacity-50"
                    >
                        <Star size={120} />
                    </motion.div>

                    <div className="inline-block p-3 bg-white/20 rounded-full backdrop-blur-sm mb-4">
                        <MailOpen className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-serif tracking-wide relative z-10">
                        Hola mi niña hermosa,
                    </h2>
                </div>

                {/* Contenido del mensaje */}
                <div className="p-8 md:p-16 bg-gradient-to-b from-white to-rose-50/30">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium text-justify">
                        Feliz día, feliz vida, feliz todo lo que tenga tu nombre.
                        Si tuviera que explicarte lo que siento por ti usando todo lo que hemos visto juntos, tendría que empezar diciendo que amarte ha sido como ir en one piece sin saber exactamente que me voy encontrar en ese tesoro, pero teniendo la certeza de que mientras estés tú, el viaje ya vale la pena.
                        Desde el primer día que te vi no imaginé que terminarías siendo mi nakama favorita, mi hogar, como Luffy buscando el One Piece, no sabía exactamente qué estaba buscando en ese momento, no lo tenia claro, sabia lo que quería pero no me imaginaba encontrarlo tan cerca y tan lindo como lo es, entonces empecé a hablar contigo de música, de cine, de series, entendí que no era un tesoro material. Era esa conexión rara, genuina, que no se fuerza, que no me importa si los demás piensan que somos raritos o lo que digan los demás, simplemente somos hermosamente raros y aun así siempre es bonito compartir mis gustos geeks contigo y que aunque no me entiendas amo que hagas como q si y me escuches, así como amo escucharte hablar de los tuyos, era reírnos por referencias que solo nosotros entendíamos, era sentir que podía contarte cosas que no le cuento a nadie.
                        Contigo entendí algo muy parecido a la historia de Akaza, pero no al demonio, me refiero a Hakuji. Antes de convertirse en lo que fue, él solo quería proteger, amar y ser suficiente para la persona que le dio luz a su vida. Y cuando la perdió, perdió el rumbo. Yo, en cambio, agradezco todos los días que el destino no me quitó a la persona que me hace querer ser más fuerte. Tú no despertaste oscuridad en mí; despertaste propósito. Me haces querer mejorar, crecer, proteger lo que tenemos y honrar lo que sentimos.
                        A veces pienso que lo nuestro también tiene algo de Stranger Things. Porque el mundo puede ponerse extraño, pesado, lleno de ruidos y problemas pero siempre terminamos encontrándonos como si tuviéramos nuestra propia versión del “Upside Down” donde solo existimos tú y yo. Como cuando estamos viendo algo juntos y el resto desaparece. Como cuando caminamos sin rumbo y todo parece una escena de película indie con soundtrack incluido.
                        Y si hablamos de cine, de lo dramático, de lo intenso lo nuestro tiene esa energía de historia que empieza simple y termina volviéndose épica sin que los protagonistas se den cuenta como si fuéramos dos personajes que comenzaron siendo secundarios en la vida del otro y ahora no pueden imaginar la trama sin esa presencia constante.
                        Ari, amarte se siente como ese momento en one piece cuando la tripulación levanta la bandera después de todo lo que ha sufrido, es una decisión diaria, no es solo emoción, es convicción, es decir: “aquí me quedo”, es elegirte incluso cuando el mar está movido.
                        Me acuerdo de cuando empezamos a hablar más, de lo nervioso que estaba, de cómo me sorprendía lo fácil que era contarte mi vida, me acuerdo del momento en que empecé a verte diferente, aunque no supiera ponerle nombre, me acuerdo del miedo que tenía de perder algo que todavía no era oficialmente mío, pero que ya sentía indispensable y aunque hice muchas estupideces con las cuales pude haber perdido lo que teníamos en su momento y por eso en esos momentos llore, me senti como la peor persona del mundo y lapeor chatarra porque simplemente no me cabia la idea de estar sin ti.
                        Y hoy, después de todo lo que hemos vivido, música de fondo, escenas improvisadas, referencias absurdas, risas que parecen capítulos especiales, olo quiero que sepas algo:
                        Te amo más que ayer y menos que mañana.
                        Te amo en la calma y en el caos.
                        Te amo cuando te ríes.
                        Te amo cuando te enojas.
                        Te amo cuando hablas de música con esa pasión que fue lo primero que me hizo mirarte diferente.
                        Te amo cuando estamos en silencio y aun así se siente lleno.
                        Te amo cuando hablamos de series.
                        Te amo cuando simplemente hablas de cosas que ni entiendo y no se que decirte pero simplemente te escucho porque me encanta verte hablar.
                        Te amo cuando hablas aunque digas que nunca te callas y que hablar por los codos, me gusta verte siempre.
                        Te amo cuando me quedo mirándote por mucho tiempo aunque te pongas incomoda cuando lo hago.
                        Te amo de todas las maneras posibles.
                        Si la vida fuera una serie, tú serías ese personaje que entra en la primera temporada sin hacer mucho ruido y termina siendo el corazón de toda la historia.
                        Gracias por ser mi lugar seguro.
                        Gracias por dejarme ser el tuyo.
                        Gracias por cada recuerdo que suena a canción.
                        Gracias por cada escena que parece sacada de un anime.
                        Gracias por existir en mi línea temporal.
                        Se que nunca podre agradecerte por todo lo que haz hecho por mi ni con palabras y por eso lo hago con actos para complementar porque simplemente tu eres demasiado, eres de todo lo bueno que hay en el mundo, gracias y nunca me cansare de agradecerete hasta por los mismo
                        Si tuviera que repetir un día de mi vida, también elegiría el día en que te conocí. Porque ahí empezó mi arco favorito.
                        Feliz Cumpleaños, Felices 22 mi amor.
                        Te amo infinitamente
                    </p>

                    <div className="mt-12 flex justify-center items-center gap-4">
                        <div className="h-px bg-rose-200 flex-1"></div>
                        <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={32} />
                        <div className="h-px bg-rose-200 flex-1"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export { BirthdayMessage }