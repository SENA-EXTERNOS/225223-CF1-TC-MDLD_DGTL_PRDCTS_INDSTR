<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Unidades de medida
    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-5(data-aos='fade-right') Es una referencia convencional que se utiliza en diferentes áreas del conocimiento, en donde se usa para expresar la unidad de longitud a nivel mundial. Este estándar o referencia se establece fijando por convenciones, para expresar una cantidad de manera global, la cual permite calcular las dimensiones de la materia del conocimiento, que para este caso es el dibujo, expresado en la longitud.
          br
          br
          | Algunos aspectos relacionados con las unidades de medida son:
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema6/1.png', alt='')
    .tarjeta.p-5.mb-5(style='background-color: #dee5e8' data-aos='zoom-in')
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p Las unidades de medida se han utilizado desde hace mucho tiempo en la historia y varían no solamente por la época, sino también de una región a otra, según sus necesidades y áreas de investigación, por lo que las hay de diferentes tipos. La mayoría de los países del mundo utilizan, por ejemplo, el metro como unidad universal. Sin embargo, en otros países de habla inglesa como Estados Unidos, Canadá o Reino Unido, se adoptan otros sistemas como el pie". De ahí que existan también herramientas que ayudan a trabajar con diferentes unidades de medida y hacer más fácil su utilización. Observe a continuación algunos aspectos relacionados con los sistemas de unidades de medida, su conversión y sistemas coordenados.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema6/2.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Conversión
            p Como el pie es una unidad de longitud del sistema inglés, se realiza la siguiente operación para ser expresado en pies, la unidad de medida del metro del sistema internacional: pies =m/0.3048
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema6/3.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Sistema de coordenadas
            p Un sistema de coordenadas puede tener diferentes características, en dibujo para expresar un objeto que utiliza sistemas coordenados cartesianos o rectangulares, sirve para localizar elementos en el dibujo con precisión. Se distribuye con un eje horizontal denominado eje X, y otro vertical también conocido como el eje Y.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema6/4.svg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Los anteriores ejes Y y X, están expresados con valores desde el origen de coordenadas, tienen los valores desde (0,0), este par de valores se expresan o miden la distancia en X y Y del punto al origen de coordenadas.
    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      .col-md.tarjeta.p-5(style='background-color: #255065')
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/5.svg', alt='Texto que describa la imagen')
          p.text-center.p-5.text-white El valor de las coordenadas sobre el eje X se lee o expresa de la siguiente manera, es positiva hacia la derecha del origen.
      .col-md.tarjeta.p-5(style='background-color: #546e7a')
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema6/6.svg', alt='Texto que describa la imagen')
          
          p.text-center.text-white.p-5 Los valores del eje Y son positivos hacia arriba.
</template>

<script>
export default {
  name: 'Tema6',
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
</style>
