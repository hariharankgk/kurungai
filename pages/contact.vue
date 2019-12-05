<template>
    <div>
        <div class="banner"> 
            <img src="@/assets/images/paddy2.jpg">
        </div>
        <div class="head-top">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h3>Leave a Message!</h3>
                        <form class="contact-form" action="" method="post">
                            <input type="text" class="form-control" placeholder="Name" name="Name" required autocomplete="off" v-model="contactName">
                            <input type="email" class="form-control" placeholder="E-Mail" name="EMail" required autocomplete="off" v-model="contactEmail">
                            <input type="text" class="form-control" placeholder="Mobile" name="Phone" required autocomplete="off" v-model="contactPhone">
                            <textarea  class="form-control" placeholder="Message" rows="5" name="Message" v-model="contactDescription"></textarea>
                            <button type="button" @click="formSubmit" class="btn col-xs-12">Submit</button>		  
                        </form>
                    </div>
                    <div class="col-sm-8">
                        <div class="logos">
                            <h3>Thank You for Visiting Thirukkurungudi Website!</h3>
                            <h4>You can also get updates from Facebook..!</h4>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkurungai&tabs&width=340&height=214&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" height="214" style="border:none;overflow:hidden;width:350px;" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                        </div>        
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
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            contactDescription: '',
        }
    },
    methods: {
        formSubmit: function(){
            if(this.contactName != '' && this.contactPhone != '' && this.contactEmail != '' && this.contactDescription != '') {
                axios.post('http://thirukkurungudi.com/kurungai-api/functionweb.php', {
                    contactName: this.contactName,
                    contactPhone: this.contactPhone,
                    contactEmail: this.contactEmail,
                    contactDescription: this.contactDescription
                }).then(function (response) {
                    console.log(response.data.status);
                    if(response.data.status == 'true'){
                        alert(response.data.message);
                        location.reload();
                    } else {
                        alert('Sorry.. Please try again later');
                    }
                }).catch(function (error) {
                    alert('Please try again later..!')
                });
            } else {
                alert('All fields are mandatory..!');
            }
        }
    }
}
</script>
