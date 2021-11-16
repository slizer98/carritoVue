<template>
<div>
    <th scope="row" colspan="2">
        Total de productos
    </th>
    <td>{{ totalCantidad }}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="Vaciar-carrito" @click="vaciar">
            <!-- <i class="fa fa-shopping-cart"></i> -->
            Vaciar carrito
        </button>
    </td>
    <td class="font-weight-bold"><span>{{ totalPrecio }}</span></td>
</div>
</template>

<script>
export default {
    methods: {
        vaciar() {
            console.log('Vaciar carrito');
            this.$store.commit('vaciarCarrito');
        }
    },
    computed:{
        totalCantidad(){
            this.$store.getters.totalCantidad
        },
        totalPrecio(){
            this.$store.getters.totalPrecio
        }
    }
}
</script>