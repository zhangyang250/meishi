
<template>
    <div class="parent">
        <div class="guan"><span><img :src="require('../assets/img/guanbi.png')" alt=""></span></div>
        <div class="nei">
            <p>生活不只诗和远方，还有眼前的肉和汤</p>
        </div>
        <div class="tu">
            <div>
                <div><router-link to="/Shai"><img :src="require('../assets/img/meishi1.png')" alt=""></router-link>
                </div>
                <div class="wen">传菜谱</div>
            </div>
            <div>
                <div><router-link to="/Shai"><img :src="require('../assets/img/meishi2.png')" alt=""></router-link>
                </div>
                <div class="wen">晒美食</div>
            </div>
            <div>
                <div><router-link to="/Shai"><img :src="require('../assets/img/meishi3.png')" alt=""></router-link>
                </div>
                <div class="wen">写图文</div>
            </div>
        </div>
    </div>
</template>


<script>
import Shai from "./Shai"
export default {
    data(){
        return{

        }
    },
    components:{
        "shai":Shai
    }
}
</script>


<style scoped>
/* 父元素 */
.parent{
    width:100%;
    height:100%;
}
/* 关闭 */
.guan{
    width:100%;
    height:50px;
    display:flex;
    padding:8px;
}
.nei{
    width:100%;
    height:300px;
    display:flex;
    flex-wrap:wrap;
     align-content: flex-start;
     padding:8px;
}
/* 内容 */
.nei>p{
    font-size:30px;
    font-weight: 500;
    margin:0;
    text-align: left;
}
.tu{
    width:100%;
    height:200px;
    display:flex;
    justify-content: space-around;
    padding:8px;
}
.tu>div{
    height:100px;
}
 .tu img{
     width:70px;
 }
 .tu .wen{
     font-size:12px;
     margin-top:5px;
 }
</style>


