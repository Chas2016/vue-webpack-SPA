<template>
    <div class="card-tab">
        <ul>
            <li v-bind:class = "{'cur-li': type === 'CardBuy'}" v-on:click="toggle('CardBuy')" >
                优惠购券
            </li>
            <li v-bind:class = "{'cur-li': type === 'CardFree'}" v-on:click="toggle('CardFree')">
                免费领券
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                type: 'CardBuy'
            }
        },
        methods: {
            toggle: function(cardType) {
                this.type = cardType;
                this.$dispatch('type',this.type);
            }
        },
    }
</script>
<style lang="sass">
    @import '../assets/share.scss';
    .card-tab {
        width: 100%;
        background: #fff;
    }
    .card-tab ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        width: 100%;

    }
    .card-tab ul:after {
        display: block;
        content: '';
        clear: both;
    }
    .card-tab ul li {
        width: 50%;
        overflow: hidden;
        display:  block;
        float: left;
        text-align: center;
        padding: 0.8rem 0;
        line-height: 2rem;
        border-bottom: solid 1px #ddd;
        color: $grey;
        font-size: $f13;
    }
    .card-tab ul li.cur-li {
        border-bottom: solid 1px $orange;
        font-size: $f14;
        color: $orange;
    }
</style>