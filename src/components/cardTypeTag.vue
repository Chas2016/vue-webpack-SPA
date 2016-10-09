<template>
    <span   :class = "[ 'ab-tag', { bg1: type=== '1',bg2: type === '2',bg3: type === '3',bg4: type === '4',bg5: type === '5' }]">{{type | change}}</span>
</template>
<script type="text/ecmascript-6">
    export default {
        props: {
            type: String
        },
        filters: {
            change:  function(value) {
                if(value === '1') {
                    return '代';
                }
                if(value === '2') {
                    return '团';
                }
                if(value === '3') {
                    return '折';
                }
                if(value === '4') {
                    return '惠';
                }
                if(value === '5') {
                    return '礼';
                }
            }
        }

    }
</script>
<style lang="sass">
    .ab-tag {
        position: absolute;
        width: 1.6rem;
        height: 1.6rem;
        color: #fff;
        font-size: 12px;
        top: 0;
        right: 0;
        text-align: center;
        line-height: 1.6rem;
        border-radius: .2rem;
    }
    .bg1 {
        background: #ffa336;
    }
    .bg2 {
        background: #FF6336;
    }
    .bg3 {
        background: #CF6BFF;
    }
    .bg4 {
        background: #0AB763;
    }
    .bg5 {
        background: #36ADFF;
    }
</style>