<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Publicación

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema5.jpg", alt="Publicación")

    .row.mb-4
      .col-lg-7.mb-4(data-aos="fade-right")
        p Para la publicación el tamaño máximo admitido de un único archivo 
          italic APK 
          | es 50 MB; para subir archivos adicionales como, por ejemplo, imágenes se pueden usar archivos de expansión. Si un único archivo 
          italic APK 
          | no es suficiente para todos los dispositivos en los que se quiere ejecutar la aplicación, se pueden subir varios archivos 
          italic APK 
          | en la misma entrada de aplicación, para que cada uno se encargue de la configuración de un dispositivo diferente.
        p Una vez se genere el 
          italic APK 
          | firmada ya se puede subir a 
          italic Play Store 
          | con el fin de lanzarla.
      .col-lg-5.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5-img1.jpg", alt="Imagen decorativa") 

    p.mb-4(data-aos="fade") A continuación, se enumeran los pasos para la publicación.
    
    .row.tarjeta-acento-botones-suave.p-lg-5.py-4.mb-5
      SlyderE(indicadores="izquierda" data-aos="fade-down")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 A continuación encontrará una guía relacionada con la publicación en 
              italic Play Store 
              | de tu 
              italic APK 
              | firmada.
            p Una vez se genere el 
              italic APK 
              | firmada ya se puede subir a la 
              italic Play Store 
              | con el fin de lanzarla.
            p Para esto debe seguir estos pasos.
          .col-md-7
            figure
              img.mb-2(src='@/assets/curso/tema5-slider-1.jpg', alt='El proceso para firmar una app')
              figcaption https://cmsphoto.ww-cdn.com/superstatic/81328/art/grande/34325105-31402787.jpg?v=1559324698.5693283&force_webp=1 
        .row
          .col-md-5.mb-4.mb-md-0
            h4 1. Crear aplicación en la 
              italic PlayStore
            p Abrir la 
              italic Play Console 
              | y seleccionar Todas las 
              italic apps > 
              | Crear aplicación.
          .col-md-7
            figure
              img(src='@/assets/curso/tema5-slider-2.jpg', alt='1. Crear aplicación en la PlayStore')   
        .row
          .col-md-5.mb-4.mb-md-0
            h4 2. Creación de la aplicación
            p Registra la información como se muestra a continuación:
          .col-md-7
            figure
              img(src='@/assets/curso/tema5-slider-3.jpg', alt='2. Creación de la aplicación')         
        .row
          .col-md-5.mb-4.mb-md-0
            h4 2. Creación de la aplicación
            ul.lista-ul--color.color-secuendario
              li 
                i.fas.fa-play
                p 
                  strong Nombre de la aplicación: 
                  | se debe seleccionar un idioma predeterminado y agregar un título para la 
                  italic app. 
                  | El nombre que se escriba es como se mostrará en 
                  italic Google Play, este nombre se puede modificar.
              li 
                i.fas.fa-play
                p 
                  strong Aplicación o juego: 
                  | define si la aplicación es una 
                  italic app 
                  | o un juego; este parámetro es modificable.
              li 
                i.fas.fa-play
                p 
                  strong Gratis o pago: 
                  | especifica si se trata de una aplicación pagada o gratuita.
              li 
                i.fas.fa-play
                p 
                  strong Declaraciones: 
                  | se selecciona las declaraciones “Leyes de exportación de EE. UU.” y “Lineamientos de contenido”.        
          .col-md-7
            figure
              img(src='@/assets/curso/tema5-slider-4.jpg', alt='2. Creación de la aplicación')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 3. Ficha 
              italic Play Store
            p Después haz clic en el botón crear aplicación y allí nos mostrará la siguiente ventana que es la Ficha de 
              italic Play Store.
            .tarjeta-amarillo-border.py-2.px-3
              p Para estas opciones se deben tener los recursos gráficos como iconos o imágenes que se quiera aparezcan en la 
                italic Play Store 
                | para la publicidad, cada icono o imagen debe cumplir con los tamaños que se especifican en los campos.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5-slider-5.jpg', alt='3. Ficha Play Store')    
        .row
          .col-md-6.mb-4.mb-md-0
            h4 4. Crear Versión 
            p Subir el 
              italic APK: 
              | para subir el 
              italic APK 
              | seleccionar del menú lateral izquierdo la opción Resumen de Versiones.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5-slider-6.jpg', alt='4. Crear Versión')         
        .row
          .col-md-5.mb-4.mb-md-0
            h4 5. Seleccionar 
              italic APK 
            p Después se selecciona la opción lanzar y la opción producción y le damos clic en crear Versión.
          .col-md-7
            figure
              img(src='@/assets/curso/tema5-slider-7.jpg', alt='5. Seleccionar APK ')
        .row
          .col-md-5.mb-4.mb-md-0
            h4 6. Seleccionar 
              italic APK 
            p En la opción 
              italic App bundles 
              | y 
              italic APKs 
              | clic en subir y se busca la ubicación de la 
              italic APK 
              | firmada.
          .col-md-7
            figure
              img(src='@/assets/curso/tema5-slider-8.jpg', alt='6. Seleccionar APK ')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 7. Clasificación de contenido
            p Una vez subida la 
              italic app 
              | seguimos con el proceso y nos pedirá la clasificación de contenido.
            .tarjeta-amarillo-border.p-3.p-lg-4.mb-4
              h5 Clasificación de contenido
              p.mb-0 Consiste en completar el cuestionario, con el fin de configurar para qué públicos es apta la 
                italic app. 
                | Este paso aparecerá después de subir el código fuente. Si se omite este paso, la 
                italic app 
                | de 
                italic Play Store 
                | no estará clasificada y 
                italic Google 
                | podría eliminarla. Para esto, se debe ingresar a 
                italic Play Console, 
                | seleccionar la aplicación y, en el menú lateral de la izquierda, seleccionar la opción “Presencia en 
                italic Google Play Store”, 
                | seguido de “Clasificación de contenido”.
            p Después de finalizar el cuestionario se selecciona la categoría de la 
              italic app 
              | y allí se registran los datos de: nombre, correos electrónicos y países donde se quiere que se muestre la aplicación.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5-slider-9.jpg', alt='7. Clasificación de contenido')      
        .row
          .col-md-6.mb-4.mb-md-0
            h4 8. Revisar y lanzar la aplicación
            p Por último, seleccionamos la opción panel de control para revisar y lanzar la aplicación.
            .tarjeta-amarillo-border.p-3.p-lg-4.mb-4
              p.mb-0 Después de lanzada la aplicación, se pasa por un proceso de revisión por parte del personal de 
                italic Google 
                | para que sea publicada, esto puede tardar entre 4 a 24 horas.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5-slider-10.jpg', alt='8. Revisar y lanzar la aplicación') 

    .row.justify-content-center 
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2.mb-3
              img.px-lg-4(src="@/assets/curso/tema5-llamado.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Llamado a la acción
                  p.text-small A continuación, puede ampliar información sobre el proceso de publicación de una app. Video sobre Google Play Store. Cómo publicar tu primera app Android. https://www.youtube.com/watch?v=vBHmJHp8Ldo
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=vBHmJHp8Ldo')" target="_blank")
                    span Enlace web
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass" scoped></style>
