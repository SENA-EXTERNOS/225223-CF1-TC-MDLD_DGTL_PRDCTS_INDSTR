<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Proyección de vistas y tipos de vistas
    .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style='background-color: #abdfec').mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La proyección de vistas es una forma de expresar una figura u objeto en el campo del dibujo y se emplea para representar un objeto en una superficie. El objeto o la figura se plasma en el dibujo utilizando líneas auxiliares, que se proyectan desde un punto  central llamado foco, reflejando el objeto en un plano, a modo de sombra.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-acento-botones(text-small)
            .row(titulo="Tipos de vistas").justify-content-center
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema4/2.png', alt='Texto que describa la imagen')
              .col-md-4.mb-4.mb-md-0
                p En el campo del dibujo se encuentran las principales vistas para plasmar o dibujar un objeto, se evidencia siempre en sus líneas de proyección el alto, el ancho y la profundidad que las compone.
            .row(titulo="Vista frontal").justify-content-center
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema4/3.png', alt='Texto que describa la imagen')
              .col-md-4.mb-4.mb-md-0
                p Este tipo de vista es de las más importantes, pues demuestra las dimensiones de ancho y alto de todos los perfiles que contenga la pieza que se piensa plasmar, por proyección de vista.
            .row(titulo="Vista horizontal").justify-content-center
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema4/4.png', alt='Texto que describa la imagen')
              .col-md-4.mb-4.mb-md-0
                p Esta proyección del objeto en el plano indica o evidencia el ancho y la profundidad del objeto que se dibuja.
            .row(titulo="Vista lateral").justify-content-center
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema4/5.png', alt='Texto que describa la imagen')
              .col-md-4.mb-4.mb-md-0
                p En este tipo de vista, se plasma la profundidad y altura de la figura u objeto. Esta debe tener relación exacta con las otras, es decir, el perfil debe encontrarse a la misma altura y su medida debe ser exacta y correspondiente con sus otras vistas. Además, como reconocimiento en el mundo del dibujo, la vista lateral derecha es la vista más utilizada.
            

</template>

<script>
export default {
  name: 'Tema4',
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
.linea-tiempo-c__header__btn--right, .linea-tiempo-c__header__btn--left
  background-color: $color-acento-botones
  border: 0px
</style>
