<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 7
      h1 Herramientas para el escalado
    .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style='background-color: #aadfed').mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Para entrar en el tema de las herramientas de escalado, se deber decir que la escala hace referencia a los dos números que tienen la relación entre el dibujo y el objeto en la realidad, por ejemplo, escala de 1 a 20, indica que una unidad, por ejemplo, el metro del dibujo es correspondiente a 20 unidades en la realidad. Otra forma de expresarlo, es decir que el objeto es 20  veces más grande en la realidad que como lo expresa el dibujo.
    p.mb-5(data-aos='fade-right') A continuación, se exponen las principales herramientas para el escalado:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Escalímetro")
        .row.justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/2.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p La herramienta principal para realizar el escalado es el Escalímetro. Es una regla de carácter especial, con forma triangular y que presenta diferentes escalas en el mismo cuerpo de la regla, su utilización es para #[b medir dibujos que utilizan diferentes escalas], en sus bordes tiene un rango que expresa escalas calibradas; para su funcionamiento o manipulación solo se debe ir girando el escalímetro, identificando la escala apropiada a utilizar.
              br
              br
              |Al tener forma triangular, el Escalímetro tiene en correspondencia tres caras y, cada una de ellas, contiene o suministra 2 escalas diferentes, así que, esta herramienta tiene un total de 6 escalas distintas. En su funcionamiento práctico se utiliza de la misma manera que una regla convencional, iniciando con el número o valor cero, con la cara de la escala escogida y se cuenta hasta donde llegue la línea, o lo que se desee medir en el objeto. 
      .py-3.py-md-4(titulo="Acotado")
        .row.justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/3.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Es el proceso de expresar por medio de palabras, números, con signos, si se requiere, #[b líneas o símbolos], lo correspondiente al contenido de un objeto dentro de un dibujo, que se hace antes de su realización; para ello se siguen unas convenciones determinadas y reglas preestablecidas, siguiendo las normativas que se refieren al dibujo. Las principales normas que se enmarcan y disponen en el área de las acotaciones son: la ISO 2595-1973 y la UNE 1-133-75.
              br
              br
              |La acotación dentro del área de dibujo, es la labor más dispendiosa, debido a que, para llegar a tener una correcta acotación de cierto dibujo, es pertinente, fuera de conocer las normas como un tema esencial en esta, también se deben conocer las características del dibujo a acotar o el plano.
              br
              br
              |La acotación no se debe de realizar a la ligera, debido a que, la información expresada en ella debe ser o tener una lectura fácil y eficaz. Con lo anterior se puede considerar que el dibujo o plano, está acotado de una manera, #[b cuando lo que expresan las cotas sean suficientes, mínimas y adecuadas, para poder realizar la fabricación de esta;] de tal manera, que la persona que la realizará no se tenga que ver forzada a hacer medidas sobre el plano, ni efectuar algunas operaciones que puedan tener riesgo de errores y reprocesos en la fabricación del objeto.
      .py-3.py-md-4(titulo="Vistas")
        .row.justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/4.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Las vistas principales que contiene un objeto son las #[b proyecciones ortogonales] (líneas y ángulo) que este tiene sobre el plano, dispuestos en forma de cubo. De manera similar, se puede expresar este concepto del dibujo como las proyecciones ortogonales de un objeto, según la distancia desde donde se le mire.
      .py-3.py-md-4(titulo="Representación volumétrica")
        .row.justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema7/5.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p La representación volumétrica es una actividad gráfica donde se hace una #[b expresión o representación visual de un objeto en sus tres dimensiones], es decir, que el dibujo tiende a verse como se observa en la realidad, de manera #[b tridimensional]. También se puede indicar que es la expresión de la imagen de un objeto, que se dibuja de manera plana y tiene unas pantallas que simulan profundidad, gracias a diferentes efectos visuales. Además, los dibujos que se realizan con esta representación de volumen crean movimiento en tres dimensiones, gracias a la dispersión de la iluminación en regiones bien específicas en el espacio, en los ejes X, Y, Z respectivamente.
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #ffefd9')
          p.mb-0 Recuerde  realizar la actividad de aprendizaje y ver los otros recursos disponibles en el menú principal, estos le ayudarán a ampliar sus conocimientos. 
        
</template>

<script>
export default {
  name: 'Tema7',
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
