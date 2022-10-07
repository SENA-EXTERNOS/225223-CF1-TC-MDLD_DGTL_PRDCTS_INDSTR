<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Dibujo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7 
        p.mb-3(data-aos='fade-right') El dibujo surge gracias a la necesidad de comunicación entre los seres humanos, cuando aún no estaban establecidos los lenguajes conocidos hoy en día, este ha evolucionado debido a la facilidad que presenta para transmitir una idea, además, ha sido valioso para realizar el registro de eventos históricos. A lo largo del tiempo, y con la aparición de las primeras máquinas y herramientas se ha dado lugar, por un lado, al dibujo artístico y por otro al dibujo técnico.
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #ffefd9')
          p El dibujo técnico es un sistema de representación gráfica de diversos tipos de objetos, cuyo propósito es proporcionar información suficiente para facilitar su análisis, ayudar a mejorar su diseño y permitir la futura construcción del mismo, una o varias veces. Con este contenido se adquiere la destreza para la creación de bocetos, según los requerimientos del cliente y las especificaciones técnicas del producto, haciendo énfasis en la representación de ideas.
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema1/1.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .infografia-editada
          ImagenInfograficaB.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/2.svg', alt='Texto que describa la imagen')

            div(x="4%" y="60%" tooltip="tooltip de max 35 caracteres" numero="1")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/2.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n1.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 2144 a. C.] Aparece la primera manifestación conocida del dibujo técnico.
            div(x="13%" y="24%" tooltip="tooltip de max 35 caracteres" numero="2")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/3.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n2.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 1650 a. C.] Aparece en Egipto, el papiro de Ahmes, una obra con contenido geométrico dividida en cinco partes que abarcan: la aritmética, la estereotomía, la geometría y el cálculo de pirámides. En este papiro se llega a dar un valor aproximado del número pi.
            div(x="32%" y="10%" tooltip="tooltip de max 35 caracteres" numero="3")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/4.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n3.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 600 a. C.] Aparecen las obras de Tales de Mileto. Se dice de él, que introdujo la geometría en Grecia, ciencia que aprendió en Egipto. Sus conocimientos le sirvieron para descubrir importantes propiedades geométricas.
            div(x="49%" y="23%" tooltip="tooltip de max 35 caracteres" numero="4")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/5.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n4.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 262 a. C.] Arquímedes, notable matemático e inventor griego, que escribió importantes obras sobre geometría plana y del espacio, aritmética y mecánica. Demostró que el volumen de una esfera es dos tercios del volumen del cilindro que la circunscribe.
            div(x="46%" y="69%" tooltip="tooltip de max 35 caracteres" numero="5")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/6.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n5.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 1430 d. C.] Leonardo da Vinci, quien fuera un ingeniero, pintor, escultor, anatomista y músico vino a revolucionar el dibujo técnico, al emplear instrumentos de precisión para conformar los planos en sus construcciones y maquinarias de su propia invención. 
            div(x="65.7%" y="85%" tooltip="tooltip de max 35 caracteres" numero="6")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/7.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n6.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 1799 d. C.] Gaspar Monge inventa la geometría descriptiva, con la cual se puede lograr la representación de superficies tridimensionales de los objetos, sobre una superficie bidimensional.
            div(x="84%" y="70%" tooltip="tooltip de max 35 caracteres" numero="7")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/8.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n7.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 1813 d. C.] Jean Víctor Poncelet, quien fuera un matemático y un ingeniero francés, realizó grandes investigaciones que renovaron de forma considerable la geometría proyectiva. 
            div(x="92%" y="34%" tooltip="tooltip de max 35 caracteres" numero="8")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/9.png', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n8.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b 1965 d. C.] Sale al mercado el primer programa CAD, el cual cambiaría el dibujo técnico para siempre, puesto que se ahorraba tiempo de trabajo y aumentaba la calidad del mismo (Esime, 2022).
    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1 Teoría del color 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Para comprender cómo el uso de los colores permite la adecuada comunicación de las ideas a través del dibujo, primero se debe conocer la teoría del color, la rueda de colores; además, cómo usar colores complementarios para crear un esquema de color impactante y los efectos psicológicos que producen esos colores. La teoría del color ayuda a los diseñadores y dibujantes a determinar qué colores se ven bien juntos. No obstante, esta va más allá de simples combinaciones de colores, hay un lado científico asociado
        .cajon.color-primario.p-4.mb-4(style='background-color: #e5e9eb')
          p.mb-0 En la teoría del color se encuentra la rueda de colores, que fue creada por sir Isaac Newton, mejor conocido por sus avances en física, Newton mapeó el espectro de color en un círculo.
    p.mb-5(data-aos='fade-right') La teoría del color tiene una multitud de definiciones, conceptos y aplicaciones de diseño. Existen tres categorías de la teoría del color que son útiles y fácilmente aplicables:
    .tarjeta.p-5.mb-5(style='background-color: #dee5e8')
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p La #[b armonía del color] es una técnica de la teoría del color para combinar colores. Esta técnica propone relaciones posibles entre colores que pueden ser utilizadas para transmitir un mensaje y crear sensaciones; conocerla es importante para orientar lo que se quiere comunicar.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/11.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p La #[b rueda de color], también llamada círculo cromático, muestra la gráfica ordenada y circular de los colores. Está compuesta de 12 colores basados en el sistema RGB Red, Green and Blue (rojo, verde y azul).  Al visualizar la rueda del color se puede identificar como los colores primarios (rojo, azul y amarillo), se sitúan en ciertas distancias entre sí y que los colores secundarios están situados entre ellos.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p #[b Guías especializadas] para el uso del color en proyectos, se presentan diferentes apartados, como predicción y tendencias cromáticas, preferencias cromáticas personales y su significado, mensajes cromáticos, proporciones correctas y efectos especiales.
              br
              br
              |El uso adecuado del color, crea diferentes ambientes para los proyectos o productos o el mercado. Una de las guías que se puede tomar como referencia es el libro Armonía cromática. Edición Pantone, que es una guía completa con información especializada sobre el uso del color para resultados profesionales. Sin embargo, existen muchas referencias y artículos en la web, donde se encuentran recomendaciones acerca del uso del color en proyectos específicos.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')
    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.2 Materiales e instrumentos para el dibujo
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p En los inicios, el dibujo se hacía con una vara de madera sobre la arena o con tintas naturales en las cavernas, luego se comenzó a usar una mesa donde se grababan dibujos con grafito; después, empezó a utilizarse el lápiz y posteriormente, este fue pintado por encima con tinta para que los dibujos no se borraran, sobre todo en las aplicaciones referentes a planos .  
          br
          br
          |El lápiz es el utensilio perfecto para un trabajo preciso con la regla, los ángulos y los compases, hasta ahora se ha mantenido y sigue vigente para el dibujo técnico y artístico.
          br
          br
          |El papel es otro material indispensable para el dibujo técnico, el siguiente documento anexo contiene algunos aspectos relevantes acerca de él.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/14.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-gradiente.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Importancia del papel
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/doc1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    p.mb-5(data-aos='fade-right') A continuación, se enumeran las principales herramientas usadas actualmente para el dibujo. 
    .row.justify-content-center.mb-5
      .col-lg-11
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/16.svg', alt='Texto que describa la imagen')
          .tarjeta.p-3.rounded-0(x="5%" y="70%" numero="" style='background-color: #e5e9eb')
            h5 Portaminas y lápices
            .row.justify-content-center.mb-5
              .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/17.jpg', alt='')
              .col-lg-8
                p Los lápices están compuestos de grafito que es un mineral de carbono de color negruzco. Generalmente, se utilizan 3. Un lápiz H o 2H, un HB y un B o 2B, dependiendo de lo intensa y oscura que se quiera la línea. También se usan los portaminas que dispone de un compartimiento para almacenar minas de recambio, puede fabricarse con plástico, madera o metal y las minas de recambio tienen la misma denominación según la intensidad del trazo que se desee.     
          .tarjeta.p-3.rounded-0(x="18%" y="25%" numero="" style='background-color: #e5e9eb')
            h5 Estilógrafos de tinta
            .row.justify-content-center.mb-5
              .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/18.jpg', alt='')
              .col-lg-8
                p Los dibujantes técnicos dependen de los estilógrafos de tinta para dibujar y crear profesionalmente. Antes se usaba tinta china, ahora hay plumas técnicas con punteras tubulares para conseguir más precisión.
          .tarjeta.p-3.rounded-0(x="39%" y="2.5%" numero="" style='background-color: #e5e9eb')
            h5 Compás
            .row.justify-content-center.mb-5
              .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/19.jpg', alt='')
              .col-lg-8
                p Es un instrumento para dibujar que se usa principalmente en geometría para los siguientes ejercicios:
                ul.lista-ul--color
                  li
                    i.fas.fa-angle-right
                    | Crear un círculo desde un punto.
                  li
                    i.fas.fa-angle-right
                    | Trasladar distancias de forma precisa.
          .tarjeta.p-3.rounded-0(x="60%" y="2.5%" numero="" style='background-color: #e5e9eb')
            h5 Reglas
            .row.justify-content-center.mb-5
              .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/20.jpg', alt='')
              .col-lg-8
                p La regla es útil para trazar líneas rectas. Para ello, se coloca en puntos específicos de un dibujo o una superficie, después, se pasa un lápiz o un estilógrafo para hacer una línea recta sobre el papel.
          .tarjeta.p-3.rounded-0(x="85%" y="35%" numero="" style='background-color: #e5e9eb')
            h5 Escuadras
            .row.justify-content-center.mb-5
              .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/21.jpg', alt='')
              .col-lg-8
                p Son triángulos rectángulos isósceles, que se usan en el diseño técnico. Se puede usar una escuadra en geometría para los siguientes usos:
                ul.lista-ul--color
                  li
                    i.fas.fa-angle-right
                    | Dibujar líneas rectas paralelas
                  li
                    i.fas.fa-angle-right
                    | Medir ángulos
          .tarjeta.p-3.rounded-0(x="95%" y="70%" numero="" style='background-color: #e5e9eb')
            h5 Plantillas de rotulación y curvas
            .row.justify-content-center.mb-5
              .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/22.jpg', alt='')
              .col-lg-8
                p Las plantillas de rotulación de letras y de dibujo son indispensables. Muchas personas las usan para medir y rotular sus proyectos de trabajo. También son utilizadas cuando se requieren formas predeterminadas y repetitivas.
















      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.infografia-editada
  .infografica-b__item__dot:after ,,.img-infografica-b__item__dot:before
    opacity: 1 !important
  .img-infografica-b__item
    opacity: 1 !important
    transform: scale(2)
  .img-infografica-b__item:hover .img-infografica-b__item__tooltip
    display: none
  .img-infografica-b__modal
    background-color: #dee5e8

    h1,h2,h3,h4,h5,h6, p ,div
      color: $color-sistema-texto !important
  .img-infografica-b__modal__btn-cerrar
    background-color: $color-acento-botones
    margin: 1.5rem
    padding: 0.5rem
    border-radius: 50%
</style>
