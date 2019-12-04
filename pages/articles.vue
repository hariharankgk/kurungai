<template>
    <div>
        <div class="head-top">
            <div class="container">
                <div class="flex justify-between bbottom">
                    <h3>Articles</h3>
                    <p v-if="backBtn"><span class="butn" @click="backArticle"> << Back to Articles</span></p>
                </div>
                
                <br/>
                <ul class="articlesList" v-if="artcielList">
                    <li v-for="art in articles">
                        <h4>{{art.articleTitle}}</h4>
                        <div v-html="art.articleBody"></div>
                        <p class="fbutn" @click="openArticle(art.id)">Click to Read..</p>
                    </li>
                </ul>
                <div class="curArticle panel" v-if="articleShow">
                    <div class="panel-body">
                        <h4>{{currentArticle[0].articleTitle}}</h4>
                        <div v-html="currentArticle[0].articleBody"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        
        data: function() {
            return {
                currentArticle: {},
                artcielList: true,
                articleShow: false,
                articles: {}
            }
        },
        created() {
            axios.get('/article.json').then(resopnse => {
                this.articles = resopnse.data;
            })
        },
        // async asyncData () {
        //     const {data} = await axios.get('/article.json')
        //     return {articles:data}
        // },
        methods: {
            openArticle: function(id){
                this.artcielList=false;
                this.currentArticle = this.articles.filter(article => article.id === id);
                this.articleShow=true;
                this.backBtn = true;
            },
            backArticle: function(){
                this.artcielList=true;
                this.articleShow=false;
                this.backBtn = false;
            }

        }
    }
</script>

<style scoped>
    .head-top {
        padding-top: 100px;
    }
    .head-top h3 {
        margin: 0;
        padding-bottom: 10px;
        font-size: 26px;
    }
    .articlesList {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .articlesList li {
        width:32%;
        background-color: #fff;
        margin-bottom:25px;
    }
    .articlesList li h4 {
        padding:10px 15px;
        padding-bottom:10px;
        border-bottom:1px solid #ddd;
        margin:0;
    }
    .articlesList li div {
        padding:10px 15px;
        font-size:12px;
        margin:0;
        max-height: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
        text-align: justify;
    }
    .articlesList li p.fbutn {
        text-align:right;
        color:#905557;
        font-size:11px;
        padding:10px;
        margin:0;
        padding-top:0;
        cursor: pointer;
    }
    .flex {
        display:flex;
    } 
    .justify-between {
        justify-content: space-between;
    }
    .bbottom {
        border-bottom: 2px solid #a26451;
    }
    .butn{
        color: #a26451;
        font-weight: bold;
        cursor:pointer;
    }
    .curArticle {
        box-shadow: 0 0 4px #868383;
        border-radius:4px;
    }
    .curArticle .panel-body {
        background-color: #fff;
        border-radius:4px;
    }


</style>