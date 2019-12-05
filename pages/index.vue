<template>
  <div>
    <section class="slider-index">
      <img src="@/assets/images/bg-img-1.jpg" alt="Thirukkurungudi Vadivazhakiya Nambi">
    </section>
    <div class="max-tab slide-img">
      <img src="@/assets/images/bg-img-1.jpg" alt="Vadivazhakiya Nambi">
    </div>
    <p style="margin: 0;padding: 5px;text-align: center;background-color: #995144;color: #fff;">
      <marquee style="font-family: 'Flamenco-R';width:90%;">Thirukkurungudi is one of the 108 Vaishnava Divyadesam.
        &clubs; The Lord Vadivazhakiya Nambi is positioned in 5 Stages in Thirukkurungudi. &clubs; The Great Kaisika
        Puranam Drama is held at this place. &clubs; Bramotsavam 2020 Time Table 
        <nuxt-link to="/uthsavams">Click here</nuxt-link> </marquee>
    </p>
    <section class="layout1">
      <div class="row">
        <div class="col-md-5">
          <div class="q-image">
            <img src="~/assets/images/nammalvar.jpg" alt="Nammazhval">
          </div>
        </div>

        <div class="col-md-7">
          <div class="quote">
            <p>எங்கனையோ அன்னைமீர்காள் என்னை முனிவது நீர்.<br>

              நங்கள் கோலத் திருக்குறுங்குடி நம்பியை நான் கண்டபின். <br>

              சங்கோடும் நேமியோடும் தாமரைக் கண்களோடும் <br>

              செங்கனிவாய் ஒன்றினோடும் செல்கின்னது என் நெஞ்சமே.</p>
            <p> –நம்மாழ்வார். </p>
          </div>
        </div>
      </div>
    </section>



    <!-- Links -->
    <section class="layout2">
      <div class="row">
        <div class="col-sm-4">
          <div class="index-link">
            <nuxt-link to="/sthalapuranam">
              <img src="@/assets/images/Nambi_2.jpg" alt="Thirukkurungudi Sthalapuranam">
              <h4><strong>Sthala Puranam</strong></h4>
            </nuxt-link>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="index-link">
            <nuxt-link to="/kaisikam">
              <img src="@/assets/images/kaisikam2.jpg" alt="Thirukkurungudi Kaisika Puranam">
              <h4><strong>Kaisika Puranam</strong></h4>
            </nuxt-link>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="index-link">
            <a href="malainambi.php"><img src="@/assets/images/malai.jpg" alt="Thirumalai Nambi">
              <h4><strong>Malai Nambi Temple</strong></h4>
            </a>
          </div>
        </div>

      </div>
    </section>



    <section class="layout1">

      <div class="row">
        <div class="timimg">
          <h2>Thirukkurungudi Temple Timings</h2>
          <div class="col-md-6">
            <!--            <h3>Morning</h3>-->
            <table class="timetable">
              <tr>
                <td>7.00 AM</td>
                <td>விஸ்வரூபம்</td>
              </tr>
              <tr>
                <td>9.00 AM</td>
                <td>காலசந்தி</td>
              </tr>
              <tr>
                <td>12.00 AM</td>
                <td>உச்சிக்காலம்</td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">


            <table class="timetable">
              <tr>
                <td>5.00 PM</td>
                <td>நடை திறப்பு</td>
              </tr>
              <tr>
                <td>6.30 PM</td>
                <td>சாயரஷை</td>
              </tr>
              <tr>
                <td>8.00 PM</td>
                <td>திருவுற்றசாமம்</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<style>
  .uths {
    vertical-align: top;
    color: #995144;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    line-height: 2;
    font-weight: bold;
  }
  .slider-index img{
    width: 100%;
  }
  .marquee a {
    color: #fff;
    font-size:12px;
    text-decoration:none
  }

</style>
