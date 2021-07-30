<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo
      h2 Unir pareja
    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0.mb-lg-5(data-aos="fade-right")
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure.px-lg-4
            img.px-lg-5.py-lg-4(src="@/assets/curso/actividad-didactica.svg", alt="Unir pareja")
      .col-12.col-md-8.col-lg-9.mb-lg-5(data-aos="fade-left")
        .col-lg-6
          p.mb-4.mb-lg-5 Afianzar algunos de los conceptos más importantes sobre las tiendas de publicación para aplicaciones móviles.
        .tarjeta.tarjeta-secundario.p-2
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0.px-lg-2.text-white Unir la pareja que corresponda. 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


       

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
