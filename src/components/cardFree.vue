<template>
    <div class="card-free" >
        <h3>·免费领券</h3>
        <div class="cardfree-tpl" v-for = "item in cardfree.data">
            <div class="cardfree-wrap">
                <h4>{{item.name}}</h4>
                <span class="ab-time">有效日期:{{item.time}}</span>
                <card-type-tag :type="item.type"></card-type-tag>
                <span class="ab-btn">立即购买</span>
            </div>
            <div class="circle-box">
                <ul class="circle-line">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import CardTypeTag from '../components/cardTypeTag.vue';

    export default {
        props: {
            cardfree: Object
        },
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
            CardTypeTag
        }
    }
</script>
<style lang="sass">
    @import '../assets/share.scss';
    .card-free {
        padding: 0.5rem 1rem;
    }
    .card-free h3 {
        color: $orange;
        font-size: $f13;
        padding: 0.5rem 0;
    }
    .cardfree-tpl {
        background: #fff;
        -webkit-border-radius: 0.8rem;
        -moz-border-radius: 0.8rem;
        border-radius: 0.8rem;
        padding: 0.8rem;
        margin-bottom: 0.8rem;
        overflow: hidden;
        position: relative;
        z-index: 1;
    }
    .cardfree-wrap {
        position: relative;
        height: 7rem;
        z-index: 3;
    }
    .cardfree-wrap h4 {
        font-size: 2.2rem;
        color: $orange;
        line-height: 5rem;

    }
    .cardfree-wrap .ab-time {
        color: #888;
        font-size: $f14;
        position: absolute;
        left: 0;
        bottom: 0;
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
    .circle-box {
        position: absolute;
        left: 68%;
        z-index: 2;
        top: 0;
        height: 100%;
    }
    .circle-box:before {
        position: absolute;
        content: '';
        width: .7rem;
        height: .7rem;
        background: #ddd;
        top: -.3rem;
        left: -.1rem;
        border-radius: 100%;
    }
    .circle-box:after {
        position: absolute;
        content: '';
        width: .7rem;
        height: .7rem;
        background: #ddd;
        bottom: -.3rem;
        left: -.1rem;
        border-radius: 100%;
    }
    .circle-line {
        position: absolute;
        list-style-type: none;
        top: .9rem;
        left: 0;
        bottom: .9rem;
        overflow: hidden;
    }

    .circle-line li {
        display: block;
        width: .5rem;
        height: .5rem;
        background: #ddd;
        margin-bottom: .4rem;
        border-radius: 100%;
    }
</style>