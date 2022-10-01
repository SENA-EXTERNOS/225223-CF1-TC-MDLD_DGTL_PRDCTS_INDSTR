<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Planos
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p El dibujo mecánico requiere la elaboración de planos para la representación de piezas o partes de máquinas o maquinarias. Dichos planos deben estar en el marco de una norma técnica, ya sea norma colombiana como #[b ICONTEC] o internacional como #[b ISO] o #[b DIN.] 
        h4 Entre los principales planos que deben integrar el diseño de un producto se resaltan los siguientes:
        ul.lista-ul--color
          li
            i.fas.fa-circle.fa-xs
            | Planos mecánicos de conjunto, con una vista general del ensamblaje.
          li
            i.fas.fa-circle.fa-xs
            | Planos mecánicos de explosiones.
          li
            i.fas.fa-circle.fa-xs
            | Planos mecánicos de superficies.
          li
            i.fas.fa-circle.fa-xs
            | Planos mecánicos de despiece.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/1.png', alt='')
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #ffefd9')
          p.mb-0 El Técnico Mecánico está capacitado para leer, interpretar, modificar, actualizar y elaborar dibujos técnicos mecánicos en el tablero de dibujo. Con dichas competencias adquiridas se facilita el uso de software CAD. 
    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.1 Información contenida
    p.mb-5(data-aos='fade-right') La información básica, que debe estar presente en la elaboración de un plano mecánico, debe estar alineada con la norma técnica que se aplique, entre los elementos más destacados se tiene :
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/2.png', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Líneas y curvas").ps-5
            p Son los elementos que dan forma al objeto. Pueden tener distintos aspectos: 
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-square.fa-xs
                | Punto
              li.mb-0
                i.fas.fa-square.fa-xs
                | Línea
              li.mb-0
                i.fas.fa-square.fa-xs
                | Semirrecta
              li.mb-0
                i.fas.fa-square.fa-xs
                | Segmento
              li.mb-0
                i.fas.fa-square.fa-xs
                | Plano
              li.mb-0
                i.fas.fa-square.fa-xs
                | Ángulo
          div(titulo="Cotas").ps-5
            p.mb-0 Representan las dimensiones reales del objeto representado. 

          div(titulo="Simbología").ps-5
            p.mb-0 Elementos con significado universalmente aceptado.

          div(titulo="Anotaciones").ps-5
            p.mb-0 Observaciones o información adicional . 

          div(titulo="Escala").ps-5
            p.mb-0 Relación dimensional entre los dibujos y la realidad.

          div(titulo="Leyendas").ps-5
            p.mb-0 Cuadros de características técnicas o leyendas. 

          div(titulo="Cuadro de rotulación o carátula").ps-5
            p Partes de la carátula o cuadro de rotulación del plano
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-square.fa-xs
                | Título del plano, número o identificación y versión 
              li.mb-0
                i.fas.fa-square.fa-xs
                |Título del proyecto y referencia del autor y versión 
              li.mb-0
                i.fas.fa-square.fa-xs
                | Ubicación del proyecto dirección o coordenadas
              li.mb-0
                i.fas.fa-square.fa-xs
                | Datos relativos al autor o autores del proyecto y de los colaboradores

              li.mb-0
                i.fas.fa-square.fa-xs
                | Firma del autor o autores
              li.mb-0
                i.fas.fa-square.fa-xs
                | Logotipos, sellos de calidad y publicidad
    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-left')
      h2 3.2 Cotas anotaciones, simbología, escala, formatos
    .bloque-img-derecha.mb-5
      .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style='background-color: #c6dbe1')
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/3.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Se denomina cota a la norma establecida para indicar las dimensiones de una pieza. En el dibujo técnico sirven para mostrar una descripción completa de sus componentes definiendo su proceso de fabricación, características, tamaño, posición, control geométrico, texturas, etc. El objeto diseñado debe poderse fabricar, sin tener que hacer mediciones adicionales, ni intuir medidas. Es por esto que, las cotas en los diseños deben ser lo suficientemente claras, bien definidas y visibles en el plano del proyecto. La disposición de estas debe ser precisa y tener claridad, ya que, en caso contrario, producirán errores y costos excesivos en la fabricación.
    p.mb-5(data-aos='fade-right') Algunos puntos a tener en cuenta sobre las cotas son: 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/4.png', alt='')
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Dibujo de producto").ps-5
            p.mb-0 Es aquel que define el producto (pieza, objeto, mecanismo, etc.) en su estado de utilización, en el que se expresa para que se diseñó.      
          div(titulo="Elemento").ps-5
            p.mb-0 Es una parte característica de una pieza, tal como una superficie cilíndrica, nervadura, roscado, chaflanes, contornos, etc.   
          div(titulo="Elemento funcional").ps-5
            p.mb-0 Es aquel que desempeña un papel esencial en el funcionamiento o en las posibilidades de empleo de la pieza a la que pertenece.      
          div(titulo="Cota funcional").ps-5
            p.mb-0 Es aquella que posee una valía esencial en las funciones atribuidas a la misma o en las posibilidades de empleo de la pieza.  Para determinar las cotas funcionales es preciso conocer el mecanismo al que pertenece, el lugar que ocupa, sus condiciones de montaje dentro del conjunto, superficies contiguas de contacto, así como los posibles movimientos de la misma. 
          div(titulo="Cota no funcional").ps-5
            p.mb-0 Son aquellas que no siendo funcionales son precisas para la fabricación de la pieza, no es fundamental para el desempeño de la función a la que ha sido destinada y no influyen en su funcionamiento. Ejemplos: profundidad de agujeros roscados, longitud de tuercas, longitud o diámetros de gargantas, etc.      
          div(titulo="Cota auxiliar").ps-5
            p.mb-0 Son aquellas que no precisan tolerancias, únicamente son precisas para su mecanización y para control de las medidas máximas para efectos de preparación de material. 
    .titulo-dot.d-flex.mb-4(data-aos='fade-right')
      i.fas.fa-circle.me-2 
      h4.mb-0 Simbolos mas utilizados en el dibujo
    .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style='background-color: #c6dbe1').mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/5.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 A veces, sobre todo por falta de espacio, se utilizan símbolos (junto con abreviaturas) en los dibujos. Los símbolos son básicamente pequeños pictogramas y a menudo se asemejan a los elementos reales u objetos que representan. Para evitar confusiones y malas interpretaciones por diferentes autores, los significados de varios símbolos y abreviaturas son estandarizados y documentados. Esto asegura que el técnico realice la interpretación precisa de un dibujo determinado, según lo previsto por el diseñador.
    p.mb-5(data-aos='fade-right') En el dibujo de ingeniería existen varios símbolos y abreviaturas, estos pueden clasificarse en varias categorías dependiendo del campo donde se suelen utilizar. Las categorías incluyen: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/6.svg', alt='')
      .col-lg-4(data-aos="fade-left")
        ul.lista-ul--color.lista-ul--separador
          li.mb-0
            i.fas.fa-circle.fa-xs
            | Símbolos eléctricos

          li.mb-0
            i.fas.fa-circle.fa-xs
            | Símbolos de ingeniería civil
          li.mb-0
            i.fas.fa-circle.fa-xs
            | Símbolos de arquitectura
          li.mb-0
            i.fas.fa-circle.fa-xs
            | Símbolos mecánicos e industriales
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #ffefd9')
          p.mb-0 El dibujo mecánico abarca una gama de representaciones gráficas con las cuales se realizan los planos para las máquinas, herramientas, ensambles, etc. Se dibuja el proyecto con la simbología referente a procesos de fabricación, materiales, elementos mecánicos u otros. Este es útil para precisar y acelerar el proceso de fabricación del objeto, ya que, sabiendo medidas, materiales y pasos a seguir, se tiene la base para trabajar más rápido. También sirve para analizar la pieza y como forma de expresar una idea de un objeto.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/7.png', alt='')
</template>

<script>
export default {
  name: 'Tema3',
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
