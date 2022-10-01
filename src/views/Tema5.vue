<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5 
      h1 Geometría
    .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style='background-color: #b3c2c9').mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La geometría es una rama que viene de las matemáticas y estudia las propiedades y las medidas de una figura, al expresarlas en un plano o también en el espacio, con ello se representan aspectos de la realidad. La geometría tiene una denominación específica para interpretarla y entenderla. Se denominan sistemas formales o axiomas que están compuestos por símbolos, que se unen respetando reglas y que forman cadenas que están vinculadas entre sí. Las nociones principales son: las rectas, los puntos y las curvas.
    p.mb-5(data-aos='fade-right') Existen diferentes clases o corrientes de la geometría, algunas de ellas son:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5
          .tarjeta.p-4(titulo="Algorítmica" style='background-color: #daf1f7')
            h4 Algorítmica
            p Usa el álgebra y los cálculos para resolver problemas asociados a la extensión de la figura.
          .tarjeta.p-4(titulo="Descriptiva" style='background-color: #daf1f7')
            h4 Descriptiva
            p Encargada de solucionar las circunstancias a nivel del espacio, por medio de operaciones que se realizan en un plano en donde están representadas las figuras.
          .tarjeta.p-4(titulo="Analítica" style='background-color: #daf1f7')
            h4 Analítica
            p Encargada de estudiar las figuras a partir de un sistema de coordenadas y utilizando metodologías con el análisis matemático.
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/2.png', alt='')
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.acordion__activo
  background-color: #e8e8e8
  .acordion__accion__btn--a
    background-color: #0ca4ca
    i
      color: #fff
.titulo-dot
  i
    color: $color-acento-botones
.tabs-a__tab
  background-color: #e9e9e9
</style>
