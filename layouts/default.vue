<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" role="button" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nuxt-link to="/">
            <h1>திருக்குறுங்குடி</h1>
          </nuxt-link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li>
              <nuxt-link to="/">HOME</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/gallery">GALLERY</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/uthsavams">UTHSAVAMS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/articles">ARTICLES</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/guidance">GUIDANCE</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">CONTACT US</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nuxt />

    <div>
        <footer>
            <div class="col-md-6">
                <ul>
                    <li><a href="https://www.facebook.com/kurungai"><img src="../assets/images/icons/fb.png" alt="facebook_thirukkurungudi"></a></li>
                    <li><a href="https://kurungaiblog.wordpress.com"><img src="../assets/images/icons/wp.png" alt="wordpress_thirukkurungudi"></a></li>
                    <li><a href="https://twitter.com/kurungai"><img src="../assets/images/icons/tweet.png" alt="twitter_thirukkurungudi"></a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <p>copyright &copy; 2017 by PARAGA</p>
            </div>
        </footer>
    </div>
  </div>
</template>

<style>
  nav a h1 {
      font-size: 24px;
      margin: 0;
      line-height: 2;
      color: #fff;
      font-weight: bold;
      font-family: 'Baloo Thambi', cursive;
  }
</style>
