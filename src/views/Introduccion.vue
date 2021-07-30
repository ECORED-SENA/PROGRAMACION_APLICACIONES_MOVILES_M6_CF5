<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-intro.jpg", alt="Introducción")  

    p(data-aos="fade") Una de las características de 
      strong las aplicaciones móviles es que su distribución se realiza por medio de tiendas, y existen en el mercado una gran variedad de ellas. 
      | En el contenido de este módulo se describirán las tiendas más utilizadas, así como las características de cada una de ellas, específicamente la tienda de Play Store, porque, a nivel mundial, es la que presenta mayor número de descargas por parte de los usuarios.

 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
