Vue.component('comp-login', {
    props: ['view', 'datauser'],
    template:`
    <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">E-Commerce</a>
        </div>
    </nav>
    <section class="content" style="margin-top:30px">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="box box-warning">
                <h3 class="text-left">Form Login</h3>
                    <div class="box-body">
                        <div class="form-group col-md-6 col-md-offset-3">
                            <label>Email</label>
                            <input id="login-email" type="text" class="form-control" placeholder=" Email" v-model="email">
                        </div>
                        <div class="form-group col-md-6 col-md-offset-3">
                            <label>Password</label>
                            <input id="login-password" type="password" class="form-control" placeholder="Password" v-model="password">
                        </div>
                        <div class="">
                            <div class="form-group col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-4">
                                <button type="submit" class="btn btn-success col-md-6 col-md-offset-3" @click="loginUser">Login</button>
                            </div>
                        </div>

                        <div class="">
                            <div class="form-group col-md-8  col-md-offset-2">
                                <p class="text-center">Don't have account yet ? Create one today ! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>`,

    data: {
        email: '',
        password: '',
    },

    methods: {
        loginUser: function(){
            axios.post('http://ec2-52-70-89-219.compute-1.amazonaws.com:3000/users/login', {
                email: this.email,
                password: this.password
            })
            .then((response) => {
                if(response.status == 200){
                    
                    localStorage.setItem('userId', response.data.data.id)
                    localStorage.setItem('token', response.data.data.token)
                    localStorage.setItem('email', response.data.data.email)
                    localStorage.setItem('role', response.data.data.role) 
                    localStorage.setItem('name', response.data.data.name)                                                               
                    location.reload()
                    alert('Login Success')
                    // window.location.href='home.html'
                } else {
                    alert('Login Failed, please check your username or password')
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        check: function(){
            return this.view
        }
    },
})