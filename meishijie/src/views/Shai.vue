<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <img src="../assets/img/xiaoyu.png" alt="">
            <span>晒美食</span>
            <mt-badge size="normal" color="#ff3232">发布</mt-badge>
        </div>
        <!-- 发表内容 -->
        <div class="fa">
            <mt-field placeholder="此刻，你想说点什么......" type="textarea" rows="6"></mt-field>
        </div>
        <!-- 上传图片 -->
        <div class="chuan">
            <div>
                <img src="../assets/img/shangchuan1.png" alt="">
            </div>
        </div>
        <!--话题榜-->
        <div class="hua">
            <div class="tu">
                <img src="../assets/img/tu1.png" alt="">
                <div>
                    <p>添加话题</p>
                    <p>选择话题会跟多人关注你哦~</p>
                </div>
            </div>
            <div class="span">
                <span>请选择</span>
                <span>></span>
            </div>
        </div>
        <!-- 菜谱榜 -->
        <div class="cai">
            <div class="tu">
                <img src="../assets/img/tu2.png" alt="">
                <div>
                    <p>关联菜谱</p>
                    <p>是照着哪个菜谱做的？</p>
                </div>
            </div>
            <div class="span">
                <span>请选择</span>
                <span>></span>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    
}
</script>





<style scoped>
/* 头部 */
.header{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:35px;
    border-bottom:1px solid #ccc;
    /* padding:4px; */
}
/* 返回图片 */
.header>img{
    width:20px;
    height:20px;
    padding:4px;
}
.header>span{
    padding:4px;
}
/* 发布按钮 */
.header>>>.mint-badge.is-size-normal {
    font-size:14px;
    height:16px;
    width:40px;
    margin-top:4px;
    margin-right:4px;
    line-height: 17px;
}
/* 发表内容 */
.fa>>>.mint-field-core {
    font-size:13px;
}
/* 上传图片 */
.chuan>div>img{
    width:100%;
}
.chuan>div{
    width:22%;
}
.chuan{
    display:flex;
    justify-content: space-between;
    padding:0 8px;
}
/* 话题 */
.hua{
    display:flex;
    justify-content: space-between;
    padding:10px 0px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    width:100%;
    height:50px;
    margin-top:20px;
    
}
/* 菜谱 */
.cai{
    display:flex;
    justify-content: space-between;
    padding:10px 0px;
    border-bottom:1px solid #ccc;
    width:100%;
    height:50px;
}
/* 小图片 */
.tu{
    width:75%;
    display:flex;
    justify-content: flex-start;
    padding-left:8px;
}
.tu>img{
    width:18px;height:18px;
    /* margin-top:5px; */
}
.tu>div{
    width:100%;
    display:flex;
    /* flex-direction:column; */
    flex-wrap:wrap;
    align-content:flex-start;
    margin-left:10px;
}
/* p标签内容 */
.tu>div>p:first-child{
    font-size:15px;
    font-weight: 600;
    width:100%;
    margin:0;
    text-align: left;
}
.tu>div>p:nth-child(2){
    margin-top:10px;
    margin-bottom:0;
    font-size:12px;
    /* width:100%; */
}
/* 请选择 */
.span{
font-size:14px;
padding-right:8px;
}
.span>span{
    margin-left:5px;
}
</style>
















