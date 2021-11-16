<template>
    <div class="my-5">
        <h4 class="text-center">My Carrito</h4>
        <table class="table">
            <thead>  
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Accion</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody id="items">
                <Item v-for="item in items" :key="item.id" :item="item"  />
                <!-- {{ items }} -->
            </tbody>
            <tfoot>
                    <tr id="footer-carrito">
                        <th scope="row" colspan="5" v-if="Object.keys(items).length === 0">
                            Carrito Vacio - Compra ya!!!
                        </th>
                        <Footer v-else/>
                    </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import Item from './Item.vue'
import Footer from './Footer.vue'

export default {
    data: () =>({

    }),
    components: {
        Item,
        Footer
    },
    computed:{
        items(){
        return this.$store.state.carrito
        }
  },
  watch:{
 
  },
}
</script>