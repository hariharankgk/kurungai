<template>
    <div class="head-top">
        <div class="container">
            <h3>Gallery</h3>
            <br/>
            <ul class="galleryList flex">
                <li>
                    <img src="@/assets/images/Gopuram.jpg" alt="Gopuram-old">
                    <p>Gopuram - Old</p>
                </li>
                <li>
                    <img src="@/assets/images/home2.jpg" alt="Vasantha Uthsavam">
                    <p>Vasantha Uthsavam</p>
                </li>
                <li>
                    <img src="@/assets/images/Nambi2.jpg" alt="Nambi">
                    <p>Nambi at Ramanuja Veethi</p>
                </li>
                <li>
                    <img src="@/assets/images/home3.jpg" alt="Azhakiya Nambi">
                    <p>Vasantha Uthsavam</p>
                </li>
                <li>
                    <img src="@/assets/images/Gallery/theppam2.jpg" alt="Theppam">
                    <p>Nambi at Theppam</p>
                </li>
                <li>
                    <img src="@/assets/images/kaisikam2.jpg" alt="Kaisikam">
                    <p>Kaisika Puranam</p>
                </li>
                <li>
                    <img src="@/assets/images/home4.jpg" alt="5 Geruda Seva">
                    <p>5 Geruda Sevai</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                albumList: []
            };
        }
    }
</script>


<style scoped>
    .head-top {
        padding-top: 100px;
    }
    .head-top h3 {
        border-bottom: 2px solid #a26451;
        margin: 0;
        padding-bottom: 10px;
        font-size: 26px;
    }
    .galleryList {
        flex-wrap: wrap;
        align-items: stretch;
        display:flex;
    }
    .galleryList li{
        position: relative;
        width: 23%;
        margin:10px;
        text-align: center;
        background-color: #fff;
        padding: 15px;
        border-radius:6px;
        box-shadow: 2px 2px 5px #989696;
        margin-left: 0;
        margin-right: 20px;
        display: flex;
        align-items: center;
    }
    .galleryList li img {
        max-width:100%;
        max-height: 200px;
        margin-bottom:10px;
        margin:auto;
    }
    .galleryList li p{
        margin:0;
        font-size:12px;
        position: absolute;
        bottom:10px;
        left:0;
        right:0;
        line-height:0;
    }
</style>