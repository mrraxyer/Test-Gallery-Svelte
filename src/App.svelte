<script>
  import Header from "./components/Header.svelte";
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
  <div class="text-center mb-10 sm:mb-12 px-0 sm:px-4">
    <h1
      class="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 leading-tight"
    >
      Acervo Cultural del TecNM en Celaya
    </h1>
    <hr class="w-20 sm:w-24 border-t-4 border-orange-500 mx-auto mt-4 mb-6" />
  </div>
  <Gallery />
</main>

<Footer />
