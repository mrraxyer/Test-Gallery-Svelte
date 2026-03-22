<script lang="ts">
    import logoTecNM from "../assets/logos/logoTecNM-Blanco.png";
    import logoITC from "../assets/logos/logoITC.webp";
    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[#1a1a1a] text-gray-100 font-sans mt-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div
            class="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left"
        >
            <div class="md:col-span-2">
                <h3
                    class="text-base sm:text-lg font-bold text-white mb-2 leading-snug"
                >
                    Galería del Acervo Cultural del<br />
                    Tecnológico Nacional de México en Celaya
                </h3>
                <p class="text-gray-300 text-sm leading-relaxed max-w-lg">
                    Preservando e inspirando el patrimonio cultural de nuestra
                    institución académica. Explora la riqueza artística y
                    cultural que forma parte de la identidad del TecNM en Celaya
                    a través de esta galería virtual, un espacio dedicado a
                    mostrar la diversidad de obras y expresiones culturales que
                    enriquecen nuestro entorno educativo.
                </p>
            </div>

            <nav
                aria-label="Instituciones relacionadas"
                class="flex items-center justify-center md:justify-end gap-5"
            >
                <a
                    href="https://www.tecnm.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visitar sitio del Tecnológico Nacional de México"
                    class="flex items-center justify-center p-2 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg transition-opacity duration-200"
                >
                    <img
                        src={logoTecNM}
                        alt="Tecnológico Nacional de México"
                        class="h-10 w-auto object-contain"
                        width="1080"
                        height="489"
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                    />
                </a>
                <div class="w-px h-10 bg-gray-600" aria-hidden="true"></div>
                <a
                    href="https://celaya.tecnm.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visitar sitio del Instituto Tecnológico de Celaya"
                    class="flex items-center justify-center p-2 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg transition-opacity duration-200"
                >
                    <img
                        src={logoITC}
                        alt="Instituto Tecnológico de Celaya"
                        class="h-10 w-auto object-contain"
                        width="956"
                        height="1161"
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                    />
                </a>
            </nav>
        </div>

        <div
            class="border-t border-gray-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-300"
        >
            <p>
                Hecho con ❤️ por <strong class="text-gray-100"
                    ><a
                        href="https://onlinces.net"
                        target="_blank"
                        rel="noopener noreferrer">On Linces</a
                    ></strong
                >
            </p>
            <p>
                &copy; {currentYear} Acervo Cultural del TecNM en Celaya. Todos los
                derechos reservados.
            </p>
        </div>
    </div>
</footer>
