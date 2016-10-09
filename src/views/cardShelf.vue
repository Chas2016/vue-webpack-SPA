
<template>
    <card-type-tab></card-type-tab>
    <!--<componet :is="currentView" transition="fade" transition-mode="out-in" keep-alive ></componet>-->
    <card-buy v-if="currentView === 'CardBuy' " :cardbuy="cardbuy"  ></card-buy>
    <card-free v-if="currentView === 'CardFree' " :cardfree="cardfree" ></card-free>
</template>
<script type="text/ecmascript-6">
    import CardTypeTab from '../components/cardTypeTab.vue';
    import CardBuy from '../components/cardBuy.vue';
    import CardFree from '../components/cardFree.vue';

    import cardBuyData from '../../jsonData/cardBuyData';  //模拟数据
    import cardFreeData from '../../jsonData/cardFreeData';  //模拟数据


    export default {
        data() {
            return {
                currentView: 'CardBuy',
                cardbuy: {},
                cardfree: {}
            }
        },
        events: {
          'type': function(type) {
              this.currentView = type;

          }
        },
        methods: {

        },
        compiled() {
            this.cardbuy = cardBuyData ;
            this.cardfree = cardFreeData ;
        },
        components: {
            CardTypeTab,
            CardBuy,
            CardFree
        }

    }
</script>
<style lang="sass">

</style>