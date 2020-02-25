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
                                <div class="panel-heading">Create Film </div>

                                <div class="panel-body">

                                    <div v-if="error" class="alert alert-danger">
                                        <p class="text-white" style="color: red !important">{{error}}</p>
                                    </div>

                                    <form @submit="createFilm">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input class="form-control" type="text" name="name" v-model="name"
                                                required />
                                        </div>

                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" type="text" name="description"
                                                v-model="description" required></textarea>
                                        </div>


                                        <div class="form-group">
                                            <label>Release Date</label>
                                            <input class="form-control" type="date" v-model="release" name="release"
                                                required />
                                        </div>

                                        <div class="form-group">
                                            <label>Rating </label>
                                            <input class="form-control" type="number" v-model="rating" name="rating"
                                                maxLength="5" required />
                                        </div>

                                        <div class="form-group">
                                            <label>Ticket Price</label>
                                            <input class="form-control" type="number" v-model="ticket" name="ticket"
                                                required />
                                        </div>

                                        <div class="form-group">
                                            <label>Country </label>
                                            <input class="form-control" type="text" v-model="country" name="country"
                                                required />
                                        </div>

                                        <div class="form-group">
                                            <label>Genre </label>

                                            <multiselect v-model="value" :options="options" :multiple="true"
                                                :close-on-select="false" :clear-on-select="false"
                                                :preserve-search="true" placeholder="Pick some" label="name"
                                                track-by="name" :preselect-first="true">
                                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span
                                                        class="multiselect__single"
                                                        v-if="values.length &amp;&amp; !isOpen">{{ values.length }}
                                                        options selected</span></template>
                                            </multiselect>

                                        </div>

                                        <div class="form-group">
                                            <label>Photo </label>
                                            <input class="form-control" type="link" v-model="photo" name="photo"
                                                required />
                                        </div>



                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-lg">
                                                Add
                                            </button>
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
    import Multiselect from 'vue-multiselect'

    // register globally
    Vue.component('multiselect', Multiselect)

    export default {
        components: {
            Multiselect
        },
        data() {
            return {
                name: '',
                description: '',
                release: '',
                rating: '',
                ticket: '',
                country: '',
                selectedOption: null,
                photo: '',
                error: '',
                value: [],
                options: [{
                        name: 'Action',
                        language: 'Action'
                    },
                    {
                        name: 'Thriller',
                        language: 'Thriller'
                    },
                    {
                        name: 'Comdey',
                        language: 'Comdey'
                    },
                    {
                        name: 'Ficition',
                        language: 'Ficition'
                    },
                    {
                        name: 'Sci-fi',
                        language: 'Sci-fi'
                    },
                ]
            }
        },
        mounted() {

        },
        methods: {
            createFilm: function (e) {
                e.preventDefault();
                e.preventDefault();

                const sort = [];

                this.value.map(item => {
                    sort.push(item.name)
                })

           

                const data = {
                    name: this.name,
                    description: this.description,
                    release_date: this.release,
                    rating: this.rating,
                    ticket_price: this.ticket,
                    country: this.country,
                    genre: sort,
                    photo: this.photo
                };



                axios
                    .post(`/api/films/create`, data)
                    .then(res => {
                        console.log(res);
                        console.log(res.data.status);
                        if (res.data.status === 200) {
                            window.location.replace("#/films");
                        }
                    })
                    .catch(err => {

                        console.error(err);
                    });


            }
        }
    }
</script>