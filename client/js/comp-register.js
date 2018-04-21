Vue.component('comp-register',{
    template: `
    <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">E-Commerce</a>
        </div>
    </nav>
    <section class="content" style="margin-top:40px">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">

                <div class="form-group col-md-8 col-md-offset-2">
                    <label>First Name</label>
                    <input id="login-username" type="text" class="form-control" placeholder="Your First Name" v-model="first_name" required>
                </div>

                <div class="form-group col-md-8 col-md-offset-2">
                    <label>Last Name</label>
                    <input id="login-username" type="text" class="form-control" placeholder="Your Last Name" v-model="last_name" required>
                </div>

                <div class="form-group col-md-8 col-md-offset-2">
                    <label>Address</label>
                    <input id="login-username" type="text" class="form-control" placeholder="Your Address" v-model="address" required>
                </div>

                <div class="form-group col-md-8 col-md-offset-2">
                    <label>Gender</label>
                    <select class="form-control" v-model="gender">
                        <option disabled value="">Please select one</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div class="form-group col-md-8 col-md-offset-2">
                    <label>Email</label>
                    <input id="login-username" type="email" class="form-control" placeholder="Your real email" v-model="email" required>
                </div>

                <div class="form-group col-md-8 col-md-offset-2">
                    <label>Password</label>
                    <input id="login-password" type="password" class="form-control" v-model="password">
                </div>

                <div class="form-group col-md-8 col-md-offset-2">
                    <button type="submit" class="btn btn-success" @click="registerUser">Register</button>
                </div>
            </div>
        </div>
    </section>
    </div>
    `,

    methods: {
        registerUser: function(){
            axios.post('http://localhost:4000/users/register', {
                    email: this.email,
                    password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    address: this.address,
                    gender: this.gender,                
                })
                .then((response) => {
                    if(response.status == 200) {
                        localStorage.setItem('userId', response.data.data.id)
                        localStorage.setItem('token', response.data.data.token)
                        localStorage.setItem('email', response.data.data.email)
                        localStorage.setItem('name', response.data.data.name)
                        localStorage.setItem('role', response.data.data.role)                                                        
                        location.reload()
                        alert('Sign Up Success, Happy Shopping !')
                        window.location.href='home.html'
                    } else {
                        alert('Login Failed, please check your username or password')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
    }
})