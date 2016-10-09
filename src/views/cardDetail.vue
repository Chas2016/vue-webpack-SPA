
<template>
    <section class="img-wrap">
        <h4>智慧餐厅</h4>
        <img src="http://attach.bbs.miui.com/forum/201409/05/164828g71ar48xlpy8xzfl.jpg"  alt="">

    </section>
    <section class="info-wrap">
        <div class="refund-info">
            随时退 过期退  已售20000
        </div>

    </section>
    <section class="info-wrap">
        <a href="">
            <h4 class="d-h4 d-h4-link ">使用门店(10家)</h4>
        </a>
    </section>
    <section class="info-wrap">
        <a href="">
            <h4 class="d-h4 d-h4-link ">图文介绍</h4>
        </a>
        <dl class="d-dl">
            <dt>优惠说明</dt>
            <dd>
                价值100.0元代金券一张;到店出示，由服务员核销;可与其他优惠共享
            </dd>
        </dl>
    </section>
    <section class="info-wrap">
        <h4 class="d-h4">购买须知</h4>
        <dl class="d-dl">
            <dt>有效日期</dt>
            <dd>
                2017.7.1-2017.7.31/领取后2天内有效/
                领取后3天生效，有效天数2天
            </dd>
        </dl>
        <dl class="d-dl">
            <dt>可用时段</dt>
            <dd>
                周一至周五，12：00-13：00
            </dd>
        </dl>
        <dl class="d-dl">
            <dt>使用须知</dt>
            <dd>
                1、代金券有效日期：自领取日起1个月内有效
                2、使用积分消费不与其它优惠活动同时享用
                3、会员卡长期有效
                4、会员卡最终解释权归XXX所有
            </dd>
        </dl>
    </section>
 </template>
<script type="text/ecmascript-6">
    import cardBuyData from '../../jsonData/cardBuyData';  //模拟数据

    export default {
        data() {
            return {

            }
        },
        events: {

        },
        methods: {

        },
        compiled() {

        },
        components: {

        }

    }
</script>
<style lang="sass">
    .img-wrap {
        width: 100%;
        position: relative;
    }
    .img-wrap h4 {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        font-size: 1.8rem;
        color: #fff;
    }
    .img-wrap img {
        width: 100%;
    }
    .info-wrap {
        background: #fff;
        margin-bottom: .5rem;
    }
    .info-wrap a {
        color: #444;
    }
    .d-h4 {
        padding: .7rem 1rem;
        border-bottom: solid 1px #eee;
        font-size: 1.5rem;
        font-weight: normal;
    }
    .d-h4-link {
        position: relative;
    }
    .d-h4-link:after {
        content: '';
        display: block;
        box-sizing: content-box;
        right: 1rem;
        top: 1.2rem;
        width: 6px;
        height: 6px;
        border-top: solid 2px #bbb;
        border-right: solid 2px #bbb;
        transform: rotate(45deg);
        position: absolute;
    }
    .d-dl {
        padding: .7rem 1rem;
    }
    .d-dl dt {
        font-size: 1.4rem;
        color: #888;
        margin-bottom: .4rem;
    }
    .d-dl dd {
        font-size: 1.3rem;
        color: #444;
        width: 20rem;
    }
</style>