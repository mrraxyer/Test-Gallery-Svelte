<script lang="ts">
    import { slide } from "svelte/transition";

    export let title: string;
    let isOpen: boolean = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<div class="border-t border-gray-200/80">
    <button
        type="button"
        class="flex items-center gap-3 py-3.5 w-full text-left font-bold text-sm md:text-[15px] text-gray-900 bg-transparent border-none cursor-pointer hover:text-gray-600 transition-colors focus:outline-none"
        on:click={toggle}
        aria-expanded={isOpen}
    >
        <span
            class="text-[10px] leading-none transition-transform duration-300 {isOpen
                ? 'rotate-90'
                : ''}"
        >
        </span>
        <span>{title}</span>
    </button>

    {#if isOpen}
        <div
            class="pl-6 pr-4 pb-5 text-gray-600 text-sm md:text-base leading-relaxed"
            transition:slide={{ duration: 300 }}
        >
            <slot>
                Información adicional sobre {title}...
            </slot>
        </div>
    {/if}
</div>
