<template>
<div>
    <!-- 搜索 -->
    <div class="sou">
        <div class="jia"><img :src="require('../assets/img/jia.png')" alt=""></div>
        <div class="mt"><mt-search placeholder="搜索百万免费菜谱"></mt-search></div>
        <div class="xin"><img :src="require('../assets/img/xin.png')" alt=""></div>
    </div>
    <!-- 导航栏 -->
    <div class="daohang">
        <mt-button data-id="tab1" @click="long">今日</mt-button>
        <mt-button data-id="tab2" @click="long">早餐</mt-button>
        <mt-button data-id="tab3" @click="long">午餐</mt-button>
        <mt-button data-id="tab4" @click="long">下午茶</mt-button>
        <mt-button data-id="tab5" @click="long">晚餐</mt-button>
        <mt-button data-id="tab6" @click="long">夜宵</mt-button>  
        <mt-tab-container v-model="active">
           <mt-tab-container-item id="tab1">
                <div class="zhuan">
                  <div class="img">
                      <img :src="require('../assets/img/dao1.jpg')" alt="">
                      <p>蛋炒饭</p>
                      <span>惊艳味蕾，好吃到爆</span>
                      
                      </div>
                  <div class="img">
                      <img :src="require('../assets/img/dao2.jpg')" alt="">
                      <p>麻辣香锅</p>
                      <span>惊艳味蕾，好吃到爆</span>
                      </div>
                      
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <div class="zhuan">
                  <div class="img">
                      <img :src="require('../assets/img/dao2.jpg')" alt="">
                      <p>蛋炒饭</p>
                      <span>惊艳味蕾，好吃到死</span>
                  </div>
                  <div class="img">
                      <img :src="require('../assets/img/dao1.jpg')" alt="">
                      <p>麻辣香锅</p>
                      <span>惊艳味蕾，好吃到死</span>
                      </div>  
                </div>           
            </mt-tab-container-item>            
        </mt-tab-container>      
    </div>
    <!-- 轮播图 -->
    <div class="a">
      <mt-swipe :auto="3000">
        <mt-swipe-item><img :src="require('../assets/img/l1.jpg')" alt=""></mt-swipe-item>
         <mt-swipe-item><img :src="require('../assets/img/l2.jpg')" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="require('../assets/img/l3.jpg')" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="daohang">
        <mt-button data-id="tab1" @click="long">推荐</mt-button>
        <mt-button data-id="tab2" @click="long">时令</mt-button>
        <mt-button data-id="tab3" @click="long">肉食</mt-button>
        <mt-button data-id="tab4" @click="long">素食</mt-button>
        <mt-button data-id="tab5" @click="long">烘焙</mt-button>
        <mt-button data-id="tab6" @click="long">食街</mt-button>  
        <mt-tab-container v-model="active">
           <mt-tab-container-item id="tab1">
                <div class="zhuan">
                  <div class="img">
                      <img :src="require('../assets/img/dao1.jpg')" alt="">
                      <p>蛋炒饭</p>
                      <span>惊艳味蕾，好吃到爆</span>
                      <div class="ping">
                        <div><img :src="require('../assets/img/tou.png')" alt="">
                      <span>小时刻</span></div>
                      <div><img :src="require('../assets/img/tou.png')" alt="">
                      <span>5k+</span></div>
                      </div>
                      </div>
                  <!-- <div class="img">
                      <img :src="require('../assets/img/dao2.jpg')" alt="">
                      <p>麻辣香锅</p>
                      <span>惊艳味蕾，好吃到爆</span>
                      </div> -->
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <div class="zhuan">
                  <div class="img">
                      <img :src="require('../assets/img/dao2.jpg')" alt="">
                      <p>蛋炒饭</p>
                      <span>惊艳味蕾，好吃到死</span>
                  </div>
                  <div class="img">
                      <img :src="require('../assets/img/dao1.jpg')" alt="">
                      <p>麻辣香锅</p>
                      <span>惊艳味蕾，好吃到死</span>
                      </div>  
                </div>           
            </mt-tab-container-item>            
        </mt-tab-container>      
    </div>
    <!-- 底部导航条 -->
    
</div>
</template>


<script>
export default {
    data(){
        return{
            active:"tab1",
        }
    },
    methods:{
        long(e){
            this.active=e.target.dataset.id
        }
    }
}
</script>



<style scoped>
/* 搜索 */

.sou{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:30px;
    margin-top:10px;
}
.jia>img{
    width:20px;
    margin-top:5px;
    margin-left:20px;
     margin-right:20px;
}
.xin>img{
    width:20px;
    margin-top:5px;
    margin-left:15px;
    margin-right:20px;
}
.sou>.mt>>>.mint-searchbar{
    padding:0;
    border:1px solid #cec8c8;
    background-color:#cec8c8;
    font-size:12px;
    border-radius: 2px;
}
.sou>.mt>>>.mint-searchbar-cancel{
    padding-right:5px;
}
.sou>.mt>>>.mint-searchbar-inner{
    padding:0 0 0 8px;
}
.sou>.mt>>>.mint-searchbar-core{
    text-align: center;
}
/* 导航栏 */
.daohang{
    margin-top:20px;    
}
.daohang>>>.mint-button--default{
    background-color:#fff;
    box-shadow: 0 0 0px #fff;
}
.daohang>>>.mint-button{
    padding:0 3%;
    font-size:12px;
    color:#474747;
}
.daohang>>>.mint-button:first-child{
    font-size:20px;
    color:#000;
    font-weight: 560;
}
/* 导航图片 */
.zhuan{
    /* display:flex;
    justify-content:space-between; */
    font-size:0;
    width:100%;
    margin:0 auto;
    margin-top:10px;
}
.img{
    display:flex;
    flex-wrap:wrap;
     align-content:space-between;
     float:left;
     margin:0 2.5%;
     width:45%
}
.img>img{
    width:100%;
    border-radius: 10px;
    margin:0 auto;
}
/* 图片 */
/* .img>img{
    width:80%;
} */
/* 图片下的文字 */
.img>p:nth-child(2){
    font-size:14px;
    font-weight: 1000;
    margin:5px 0 15px 0px;
    text-align: left;
    width:100%;
}
.img>span:nth-child(3){
    font-size:12px;
    margin-left:0px;
    text-align: left;
    background-color:pink;
    height:6px;
    line-height: 0px;
}
/* 轮播图 */
.a{
    height:210px;
    width:95%;
    background-color:red;
    border-radius: 10px;
    overflow: hidden;
    margin:0 auto;
    margin-top:20px;
}
.a img{
    width:100%;
    height:100%;
    border-radius: 10px;
    margin:0 auto;
}
.ping{
    width:100%;
    height:20px;
    display:flex;
    justify-content: space-between;
    margin:10px 0;
    padding:0 5px 0 0;
}
.ping>div>span{
    display:inline-block;
    font-size:14px;
    margin-left:8px;
}
</style>




