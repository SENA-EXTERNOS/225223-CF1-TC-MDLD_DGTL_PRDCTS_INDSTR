<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos='fade-right') 
        p Apreciado aprendiz, sea bienvenido, el presente componente formativo se propone orientarlo en la fundamentación de los principios y las leyes físicas del modelado 3D de productos industriales. Antes, el periodo transcurrido entre una idea y un producto era bastante largo, dado que la materialización de la misma, requería en la mayoría de las ocasiones, una gran dedicación de tiempo y altos niveles de inversión. Todo lo anterior solamente para desarrollar un prototipo con el cual se pudiera salir al mercado y realizar su validación; luego de esto, se debía regresar a la mesa de dibujo y transformar la idea inicial con el
          em 
            b feedback 
          | recibido, lo cual se convertía en mucho más tiempo e inversión.  
        p.mb-0 
          b El siguiente video presenta una introducción a las principales técnicas y herramientas para el dibujo técnico.
      .col-lg-5.col-8: img(src='@/assets/curso/temas/introduccion.png', alt='')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
