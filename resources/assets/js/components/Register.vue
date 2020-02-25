<template>

    <div class="slider movie-items">
        <div class="container">
            <div class="row">
                <div class="social-link">
                    <p>Follow us: </p>
                    <a href="#"><i class="ion-social-facebook"></i></a>
                    <a href="#"><i class="ion-social-twitter"></i></a>
                    <a href="#"><i class="ion-social-googleplus"></i></a>
                    <a href="#"><i class="ion-social-youtube"></i></a>
                </div>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-2">
                            <div class="panel panel-default">
                                <div class="panel-heading">Register </div>

                                <div class="panel-body">

                                    <div v-if="error" class="alert alert-danger">
                                        <p class="text-white" style="color: red !important">{{error}}</p>
                                    </div>

                                    <form @submit="register">
                                        <div class="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" v-model="name" name="name" required class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="text" v-model="email" name="email" required class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" v-model="password" name="password" required class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-info" type="submit">Create Account</button>
                                        </div>

                                    </form>
                                </div>


                            </div>
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
        data() {
            return {
                name: '',
                email: '',
                password: '',
                error: ''
            }
        },
        mounted() {
            let cache = localStorage.staleState;
				if (cache && typeof JSON.parse(cache) === 'object') {
					
					return (
						window.location.replace('#/films')
					)
				
				} 

        },
        methods: {
            register: function (e) {
                e.preventDefault();


                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                };

                axios
                    .post(`/api/auth/signup`, data)
                    .then(res => {
                        console.log(res)
                        console.log(res.data.status)
                        if (res.data.status === 'ok') {
                        
                            window.location.replace('#/login')

                        }

                    })
                    .catch(err => {

                        this.error = 'Server Errror'

                        console.error(err)
                    });

            }
        }
    }
</script>