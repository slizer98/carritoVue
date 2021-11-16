<template>
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3">
        <div class="card">
            <img :src="producto.thumaiUrl" alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ producto.title }}</h5>
                <p class="card-text">$<span>{{ producto.precio }}</span></p>
                <button class="btn btn-dark" @click="agregar(producto)">Comprar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['producto'],
    methods: {
        // agregar(item){
        //     // console.log(item)
        //     this.$store.dispatch('agregarAlCarrito',item)
        //     // console.log('carrito:',this.$store.state.carrito)
        // }
        agregar(producto){
            this.$store.dispatch('agregarAlCarrito',producto)
        }
    },
}
</script>