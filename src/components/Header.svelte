<script lang="ts">
    import logoTecNM from "../assets/logos/logoTecNM.webp";
    import logoITC from "../assets/logos/logoITC.webp";
</script>

<header class="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
    <div
        class="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3"
    >
        <a
            href="/"
            class="text-emerald-900 font-extrabold text-xl sm:text-2xl tracking-tight no-underline"
            >Acervo Cultural</a
        >
        <nav class="flex flex-wrap gap-3 md:gap-6 items-center justify-end">
            <a
                href="https://www.tecnm.mx"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
            >
                <img
                    src={logoTecNM}
                    class="h-8 w-auto"
                    alt="Tecnológico Nacional de México logo"
                />
            </a>
            <a
                href="https://www.itcelaya.edu.mx"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
            >
                <img
                    src={logoITC}
                    class="h-8 w-auto"
                    alt="Instituto Tecnológico de Celaya logo"
                />
            </a>
        </nav>
    </div>
</header>
