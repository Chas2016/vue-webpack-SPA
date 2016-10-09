<template>
    <div class="card-buy">
        <h3>·优惠购券</h3>
        <div class="card-tpl" v-for="item in cardbuy.data">
            <img :src="item.image" alt="">
            <div class="card-info"  >
                <a v-link=" '/cardDetail' "><dl>
                    <dt>{{item.name}}</dt>
                    <dd class="d-middle">已售 {{item.sell}}</dd>
                    <dd>
                        <span>¥<strong>{{item.price}}</strong></span>
                        <span class="s-grey">¥{{item.originalPrice}}</span>
                    </dd>
                </dl></a>
                <card-type-tag :type="item.type"></card-type-tag>
                <span class="ab-btn">立即购买</span>
            </div>

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import CardTypeTag from '../components/cardTypeTag.vue';
    export default {
        props: {
            cardbuy: Object
        },
        data() {
            return {

            }
        },
        components: {
            CardTypeTag
        },
        methods: {

        },
    }

</script>
<style lang="sass">
    @import '../assets/share.scss';
    .card-buy {
        padding: 0.5rem 1rem;
    }
    .card-buy h3 {
        color: $orange;
        font-size: $f13;
        padding: 0.5rem 0;
    }
    .card-tpl {
        background: #fff;
        -webkit-border-radius: 0.8rem;
        -moz-border-radius: 0.8rem;
        border-radius: 0.8rem;
        padding: 0.8rem;
        margin-bottom: 0.8rem;
    }
    .card-tpl:after {
        display: block;
        content: '';
        clear: both;
    }
    .card-tpl img {
        width: 7rem;
        height: 7rem;
        float: left;
    }
    .card-tpl .img-link {
        
        float: left;
     }
    .card-info {
        position: relative;
        padding-left: 8rem;
        height: 7rem;
    }
    .card-info dl dt {
        font-size: $f15;
        color: $black;
    }
    .card-info dl dd {
        font-size: $f12;
        color: $grey;
    }
    .card-info dl dd.d-middle {
        margin: 1rem 0 .6rem;
    }
    .card-info dl dd span {
        color: $orange;
        font-size: $f15;
    }
    .card-info dl span strong {
        font-size: $f22;
        font-weight: normal;
    }
    .card-info dl span.s-grey {
        color: $grey;
        font-size: $f12;
        margin-left: .5rem;
        text-decoration: line-through;
     }
    .ab-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 7.5rem;
        height: 2.5rem;
        border-radius: 10rem;
        border: solid 1px #ffa336;
        text-align: center;
        color: #ffa336;
        font-size: $f12;
        line-height: 2.3rem;
    }
</style>