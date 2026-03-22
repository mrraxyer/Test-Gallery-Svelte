<script>
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import Gallery from "./components/Gallery.svelte";
  import Footer from "./components/Footer.svelte";
  import LogoITC from "./assets/logos/logoITC.webp";
</script>

<svelte:head>
  <title>Acervo Cultural del TecNM en Celaya</title>
  <link rel="icon" href={LogoITC} />
</svelte:head>

<Header />

<main class="p-4 sm:p-6 md:p-8 mx-auto w-full max-w-7xl min-h-screen">
  <Hero />

  <section id="galeria">
    <Gallery />
  </section>
</main>

<Footer />
