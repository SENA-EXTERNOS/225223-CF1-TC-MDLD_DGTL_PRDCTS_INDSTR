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
        p Bienvenido a este recurso educativo, a continuación, conocerá sobre la fundamentación de los principios y leyes físicas del modelado 3D de productos industriales; para ello, se abordan temas sobre la teoría del color, técnicas de representación del volumen, escala, dibujo vectorial, estilo libre y geometría, además de dar a conocer los materiales e instrumentos para dibujar y crear planos, entre otras cosas más.
        p El siguiente video presenta una introducción a las principales técnicas y herramientas para desarrollar el dibujo técnico.
        p.mb-0
          b ¡Muchos éxitos en este proceso de aprendizaje!
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
