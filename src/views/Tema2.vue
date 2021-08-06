<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Play Store

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.jpg", alt="Play Store")

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Se posiciona como la tienda de aplicaciones con más descargas por año a nivel mundial, además de ser la que tiene mayor cantidad de nuevos desarrolladores, y la segunda con más beneficios. En el 2012 fue lanzada con el nombre de 
          italic Google Play Store. 
        p Los recursos de 
          italic Google Play 
          | también se encuentran disponibles en el sitio web de 
          italic Google Play 
          a(:href="('https://play.google.com/store?hl=es_CO&gl=US')" target="_blank")
            strong.etiqueta (https://play.google.com/store?hl=es_CO&gl=US).
        p Entre las aplicaciones más descargadas en la historia de 
          italic Google Play 
          | se encuentran: 
          italic WhatsApp, Instagram, Snapchat 
          | y en el último trimestre de 2020: 
          italic TikTok.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2-img1.jpg", alt="Imagen decorativa") 
    
    
    h3(data-aos="fade-right") Características

    p.mb-4(data-aos="fade") A continuación, se indican algunas características principales de 
      italic Google Play.

    .row(data-aos="fade-down")
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/tema2-ico1.svg", alt="Apertura")
                h4 Apertura
          .face.face2.p-3
            .content.text-center
              h4 Apertura
              p Una de sus características principales es que 
                italic Google Play 
                | está abierto a cualquier desarrollador, esto quiere decir que su código fuente se pone a disposición para uso o modificación que otro desarrollador considere conveniente.
      .col-lg-4.container
        .cards(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/tema2-ico2.svg", alt="Sencillez")
                h4 Sencillez
          .face.face2.p-3
            .content.text-center
              h4 Sencillez
              p La forma para hacer parte de 
                italic Google Play 
                | es muy sencilla solo hay que realizar el registro, subir la 
                italic app 
                | y realizar la publicación.
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/tema2-ico3.svg", alt="Comunidad")
                h4 Comunidad
          .face.face2.p-3
            .content.text-center
              h4 Comunidad
              p Los usuarios de 
                italic Android 
                | pueden comentar y darles valor a las aplicaciones.
        
    .row(data-aos="fade-down")
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/tema2-ico4.svg", alt="Elección")
                h4 Elección
          .face.face2.p-3
            .content.text-center
              h4 Elección
              p Presenta la opción de escoger entre distribuir aplicaciones de pago y gratuitas.
      .col-lg-4.container
        .cards(@mouseover="mostrarIndicador = false", onclick="")
          .indicador--click(v-if="mostrarIndicador")
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/tema2-ico5.svg", alt="Administración")
                h4 Administración
          .face.face2.p-3
            .content.text-center
              h4 Administración
              p Permite realizar una gestión de aplicaciones, así como ver estadísticas de descargas, comentarios y puntuaciones.
      .col-lg-4.container
        .cards
          .face.face1.p-3
            .content.text-center
              .icon
                img(src="@/assets/curso/tema2-ico6.svg", alt="Cuenta desarrollador")
                h4 Cuenta desarrollador
          .face.face2.p-3
            .content.text-center
              h4 Cuenta desarrollador
              p Solo tiene que hacer un pago único para subir las aplicaciones.    

    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
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

<style lang="sass" scoped>
.cards .icon
  top: 0
  left: 0
  width: 100%
  height: 100%
  transition: 0.7s
  z-index: 1
.container .cards .icon img
  position: absolute
  top: 40%
  left: 50%
  transform: translate(-50%, -50%)
  transition: 0.7s
.container .cards .icon h4
  position: absolute
  top: 75%
  left: 50%
  transform: translate(-50%, -50%)
  transition: 0.7s
  width: 90%

.container .cards .face
  width: 100%
  height: 200px
  transition: 0.5s

.container .cards .face.face1
  position: relative
  background: #F6F6F6
  display: flex
  justify-content: center
  align-items: center
  z-index: 1
  transform: translateY(100px)

.container .cards:hover .face.face1
  background: #FFF6DB;
  transform: translateY(0px)

.container .cards .face.face1 .content
  opacity: 1
  transition: 0.5s

.container .cards:hover .face.face1 .content
  opacity: 1

.container .cards .face.face1 .content img
  max-width: 80px

.container .cards .face.face2
  position: relative
  background: #4DD0E1
  display: flex
  justify-content: center
  align-items: center
  padding: 20px
  box-sizing: border-box
  transform: translateY(-100px)

.container .cards:hover .face.face2
  transform: translateY(0)

@media (max-width: $bp-max-lg)
  .container .cards .face.face2 p
    font-size: 0.8em
@media (max-width: $bp-max-md)
  .container .cards .face.face2 p
    font-size: 1em
</style>
