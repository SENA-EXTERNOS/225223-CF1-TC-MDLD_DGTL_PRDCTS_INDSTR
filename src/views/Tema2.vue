<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Perspectiva
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La perspectiva dentro del dibujo técnico se define como una serie de técnicas para representar objetos de tres dimensiones en una superficie plana. Se puede considerar también como la destreza de establecer "un ojo" en el dibujo, a través del cual el espectador ve. 
    p.mb-5(data-aos='fade-right') Se deben considerar algunos aspectos para representar un objeto 3D sobre un plano.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/2.png', alt='')
      .col-lg-8 
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Punto de estación") Es un punto fijo en el espacio que representa el ojo del espectador.
          p.text-small(numero="2" titulo="Centro de visión") Es la línea de visión que determina la dirección en la que el observador está mirando. Siempre es perpendicular al plano de la imagen.
          p.text-small(numero="3" titulo="Plano de imagen") Es un plano transparente imaginario sobre el que se proyecta la imagen.
          p.text-small(numero="4" titulo="Línea del horizonte") Es una línea horizontal que representa la intersección del plano de la imagen y el plano horizontal, a través del ojo del espectador.
          p.text-small(numero="5" titulo="Punto de fuga ") Es un punto o puntos en el horizonte. Línea donde todas las líneas ortogonales parecen converger.
          p.text-small(numero="6" titulo="Línea de tierra") El plano de tierra es el plano donde está estacionado el objeto. La línea de tierra es una línea horizontal representando la intersección del plano de tierra y el plano de la imagen.
    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.1 Técnicas de representación de volumen, escala, dibujo vectorial estilo libre
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p En el dibujo, el volumen es la capacidad de representar la escala definida de un objeto y el espacio ocupado por este. Para lograrlo se utiliza el modelado, que es la forma de dibujar degradados, sombras y luces en los objetos para simular su volumen, de ahí proviene la referencia de modelado 3D, ya que su objetivo es mostrar la profundidad de un objeto con luces y sombras.
        .cajon.color-acento-botones(style='background-color: #ffdaa6').p-4.mb-4
          .h5 Sombras 
          p Existen dos clases de sombras: las propias y las proyectadas. Sombras propias son las que se origina el volumen a sí mismo, y las proyectadas son las que, este produce en las superficies cercanas. También hay que tener en cuenta los reflejos producidos por la luz, que proyectan las superficies cercanas, ya que aclaran la sombra propia.
        .cajon.color-secundario(style='background-color: #e5e9eb').p-4.mb-4
          .h5 Escalas 
          p Cuando hay que representar un objeto muy grande o muy pequeño en un plano, no es viable dibujarlo con su tamaño real. En estos casos lo conveniente es dibujar el objeto en tamaño reducido o ampliado. 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/3.png', alt='')
    p.mb-5(data-aos='fade-right') Dicho esto, hay tres tipos de escalas a tener en cuenta cuando se lee un plano.
    .row.justify-content-center.mb-5
      .col-lg-2.col-8: img(src='@/assets/curso/temas/tema2/4.svg', alt='')
      .col-lg-8
        ul.lista-ul--color
          li
            i.fas.fa-circle.fa-xs
            p #[b Escala natural]
              br
              | Se utiliza para representar los objetos con un dibujo del mismo tamaño que en la realidad. Se  marca como escala 1:1.
          li
            i.fas.fa-circle.fa-xs
            p #[b  Escala de reducción ]
              br
              | Se utiliza cuando el tamaño del objeto es mayor que el tamaño de la hoja de papel. Una escala 1:10, significa que el dibujo tendrá un tamaño diez veces menor que el objeto real. 
          li
            i.fas.fa-circle.fa-xs
            p #[b Escala de ampliación ]
              br
              | Se utiliza para representar objetos pequeños. Una escala de ampliación 10:1, servirá para representar un objeto 10 veces menor al tamaño que se dibuja en el papel.
    p.mb-5(data-aos='fade-right') En el siguiente video se amplía el concepto de perspectiva, es importante visualizarlo atentamente:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qdO058f6hsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.2 Normativa
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/5.png', alt='')
      .col-lg-8
        div(style='background-color: #e5e9eb').p-3.mb-3
          p.mb-0 El Instituto Colombiano de Normas Técnicas y Certificación, #[b ICONTEC], es el organismo nacional de normalización, por tanto, es quien establece las normas para la realización de dibujo técnico y arquitectónico en el país. No obstante, dependiendo del usuario o cliente final podrán aplicarse normas internacionales como la #[b ISO] (International Organization for Standardization) o #[b DIN] abreviatura de Deutsche Industrie Normen (Normas Industriales Alemanas).
        p.mb-5(data-aos='fade-right') A continuación, algunas de las normas colombianas aplicables al dibujo técnico:
        ul.lista-ul--color
          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b NTC 1580:] dibujo técnico de las escalas.

          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b NTC 1594:] terminología.
          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b NTC 1687:] formato y plegado de los dibujos.
          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b NTC 1722:] tolerancia de dimensiones lineales y angulares.
          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b NTC 1777:] principios generales de presentación.
          li
            i.fas.fa-circle.fa-xs
            p.mb-0 #[b NTC 1831:] tolerancias geométricas: tolerancia de forma y alineación; generalidades, símbolos, definiciones, indicaciones en orientación, localización y dibujos.
        

</template>

<script>
export default {
  name: 'Tema2',
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
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title
  background-color: #e5e9eb
.linea-tiempo-d__item__content__slot
  background-color: #e5e9eb
</style>
