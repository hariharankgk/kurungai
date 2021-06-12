<template>
    <div class="page login-page">
        <div class="container">
            <div class="form">
                <form class="loginForm" method="post" @submit.prevent="login">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" name="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" v-model="password">
                    </div>
                    <br/>
                    <div class="text-center form-button">
                        <button class="btn btn-danger">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
          console.log(e)
        this.error = e.response.message
      }
    }
  }
}
</script>


<style scoped>
    .login-page {
        background-color: beige;
    }

    .loginForm {
        max-width: 90%;
        margin: auto;
        padding: 15px;
        margin-top:2%;
        box-shadow: 0 0 5px #8e4342;
        border-radius: 7px;
        background-color: #fff;
    }

    @media only screen and (min-width: 768px) {
        .loginForm {
            max-width: 30%;
            margin-top:15%;
        }
    }
</style>