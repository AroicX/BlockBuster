<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Single Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created() {
            let id = this.$route.params.film_id;
            axios
                .get(`/api/films/find/${id}`)
                .then(res => {
                    let result = res.data.data;
                    console.log(result);
                    return false;
                    this.setState({
                        film: result
                    });
                })
                .catch(err => console.error);
        },
        mounted() {

            console.log('Component ready.')
        }
    }
</script>