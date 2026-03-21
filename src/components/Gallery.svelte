<script lang="ts">
    import AccordionItem from "./AccordionItem.svelte";
    import type { Artwork as DataArtwork } from "../data/artworks-cdn";
    import { artworks as importedArtworks } from "../data/artworks-cdn";

    let selectedImage: string | null = null;
    let loadedIds = new Set<string | number>();

    function markLoaded(id: string | number): void {
        loadedIds.add(id);
        loadedIds = new Set(loadedIds);
    }

    function getConnectionQuality(): "slow" | "fast" {
        const conn = (navigator as any).connection;
        if (!conn) return "fast";

        const slowTypes = ["slow-2g", "2g", "3g"];
        const isSlow = slowTypes.includes(conn.effectiveType) || conn.saveData;
        return isSlow ? "slow" : "fast";
    }

    const artworks: DataArtwork[] = importedArtworks;

    function openImage(image: string): void {
        selectedImage = image;
    }

    function closeImage(): void {
        selectedImage = null;
    }

    function handleKeyDown(event: KeyboardEvent): void {
        if (event.key === "Escape") {
            closeImage();
        }
    }

    // Tiny SVG placeholder (solid gray) as base64 — used for blur-up effect
    const placeholder = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'><rect width='10' height='10' fill='%23e5e7eb'/></svg>`;

    // Svelte action to lazy-load images with IntersectionObserver and blur-up
    export function lazy(
        node: HTMLImageElement,
        params: {
            src: string;
            thumb?: string;
            fetchpriority?: "auto" | "high" | "low";
            id?: string | number;
        },
    ) {
        const quality = getConnectionQuality();
        const realSrc = params?.src;
        if (!realSrc) return;

        const lowResSrc = params.thumb ?? placeholder;
        const rootMargin = quality === "slow" ? "500px" : "200px";

        node.src = quality === "slow" ? lowResSrc : placeholder;
        node.classList.add("lazy-img");
        node.setAttribute("decoding", "async");

        if (params.fetchpriority) {
            node.setAttribute("fetchpriority", params.fetchpriority);
        }

        const onLoad = () => {
            node.classList.add("loaded");
            node.removeEventListener("load", onLoad);
        };

        node.addEventListener("load", onLoad);

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        node.src = realSrc;
                        io.unobserve(node);
                    }
                });
            },
            { rootMargin },
        );

        io.observe(node);

        return {
            update(newParams: {
                src: string;
                thumb?: string;
                fetchpriority?: "auto" | "high" | "low";
                id?: string | number;
            }) {
                // allow updating the src if the bound param changes
                if (newParams?.src && newParams.src !== realSrc) {
                    node.src = placeholder;
                    node.classList.remove("loaded");
                    io.observe(node);
                }

                if (newParams?.fetchpriority) {
                    node.setAttribute("fetchpriority", newParams.fetchpriority);
                }
            },
            destroy() {
                io.disconnect();
                node.removeEventListener("load", onLoad);
            },
        };
    }
</script>

<svelte:head>
    {#if artworks[0]}
        <link
            rel="preload"
            as="image"
            href={artworks[0].image}
            fetchpriority="high"
        />
    {/if}
</svelte:head>

<div
    class="p-4 sm:p-6 md:p-8 mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 my-8 sm:my-10 items-start gallery-grid"
>
    {#each artworks as work, i (work.id)}
        <article
            class="flex flex-col w-full text-left border-b border-gray-200/80 pb-6 mb-6"
        >
            <div
                class="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase font-black text-gray-900 mb-6"
            >
                {work.category}
            </div>

            <h2
                class="text-3xl lg:text-4xl text-black mb-6 font-normal tracking-tight leading-tight"
                style="font-family: 'Times New Roman', Times, serif;"
            >
                {work.title}
            </h2>

            <div class="flex flex-col mb-8 w-full border-b border-gray-200/80">
                <AccordionItem
                    title={work.category === "OBRA"
                        ? "Obra dentro del TecNM en Celaya"
                        : (work.location ?? "")}
                >
                    Detalles completos sobre la obra. Aquí puedes describir el
                    contexto histórico del recinto, la fecha de creación en este
                    lugar y las dimensiones exactas o técnicas empleadas.
                </AccordionItem>

                <AccordionItem
                    title={work.category === "OBRA"
                        ? "Autor: TecNM en Celaya"
                        : (work.author ?? "")}
                >
                    Breve biografía del autor. Conoce más sobre sus aportaciones
                    al movimiento artístico, su periodo de actividad y otros
                    datos relevantes sobre cómo conceptualizó este mural.
                </AccordionItem>
            </div>

            <button
                class="block w-full p-0 border-0 bg-transparent cursor-pointer overflow-hidden rounded-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                on:click={() => openImage(work.image)}
                aria-label="Abrir imagen"
            >
                <div
                    class="w-full aspect-4/3 sm:aspect-video bg-gray-100 rounded-md overflow-hidden relative"
                >
                    {#if !loadedIds.has(work.id)}
                        <div class="absolute inset-0 skeleton"></div>
                    {/if}

                    <picture>
                        {#if work.imageAvif}
                            <source srcset={work.imageAvif} type="image/avif" />
                        {/if}
                        {#if work.imageWebp}
                            <source srcset={work.imageWebp} type="image/webp" />
                        {/if}

                        {#if i === 0}
                            <img
                                src={work.image}
                                alt={work.title}
                                class="w-full h-full object-contain object-center shadow-sm"
                                on:load={() => markLoaded(work.id)}
                            />
                        {:else}
                            <img
                                src={placeholder}
                                use:lazy={{
                                    src: work.image,
                                    thumb: work.thumb,
                                    id: work.id,
                                }}
                                alt={work.title}
                                class="w-full h-full object-contain object-center shadow-sm"
                                on:load={() => markLoaded(work.id)}
                            />
                        {/if}
                    </picture>
                </div>
            </button>
        </article>
    {/each}

    {#if selectedImage}
        <div
            class="fixed inset-0 bg-black/85 z-999 flex justify-center items-center p-5"
            role="dialog"
            aria-modal="true"
            tabindex="0"
            on:click={closeImage}
            on:keydown={handleKeyDown}
        >
            <div
                class="w-[min(95vw,1200px)] max-h-[95vh] relative"
                role="presentation"
                on:click|stopPropagation
            >
                <button
                    class="absolute -top-12 right-0 bg-white border-0 w-10 h-10 rounded-full text-2xl font-bold cursor-pointer text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    on:click={closeImage}
                    aria-label="Cerrar imagen"
                >
                    &times;
                </button>
                <img
                    src={selectedImage}
                    alt="Imagen ampliada"
                    loading="eager"
                    decoding="async"
                    class="w-full h-auto max-h-[85vh] object-contain"
                />
            </div>
        </div>
    {/if}
</div>

<style>
    .gallery-grid {
        position: relative;
    }

    @media (min-width: 768px) {
        .gallery-grid::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 1px;
            background-color: rgba(229, 231, 235, 0.9); /* gray-200/90 */
            transform: translateX(-0.5px);
            pointer-events: none;
        }
        /* ensure spacing doesn't overlap the divider */
        .gallery-grid > article {
            padding-right: 1rem;
            padding-left: 1rem;
        }
    }

    /* Blur-up / placeholder transition for lazy images */
    :global(.lazy-img) {
        filter: blur(8px);
        transform: scale(1.01);
        transition:
            filter 400ms ease,
            transform 400ms ease;
        will-change: filter;
    }

    :global(.lazy-img.loaded) {
        filter: blur(0);
        transform: none;
    }

    :global(.skeleton) {
        background: linear-gradient(
            90deg,
            #e5e7eb 25%,
            #f3f4f6 50%,
            #e5e7eb 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
</style>
