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
        <div v-for="film in films" v-bind:key="film.id">
            <div class="col-md-3" style="margin-top: 15px;">
                <div class="movie-item">
                    <div class="mv-img">
                        <a href="#"><img v-bind:src="film.photo" alt="" width="285" height="437"></a>
                    </div>
                    <div class="title-in">
      
                        <div class="cate">

                            <span class="blue">
                                <a href="#">Sci</a>
                            </span>


                        </div>

                        <h6><router-link v-bind:to="/films/ + film.id">{{ film.name }}</router-link></h6>
                        <p><i class="ion-android-star"></i><span>{{ film.rating }}</span> /5</p>
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
                films: []
            }
        },

        mounted() {
            this.getFilms();


        },
        methods: {
            getFilms() {
                axios
                    .get("/api/films")
                    .then(res => {
                        let result = res.data.data;
                        this.films = result.data;

                    })
                    .catch(err => console.error);



            }
        }


    }
</script>