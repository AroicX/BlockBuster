<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Films Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                films: []
            }
        },

        mounted() {
            this.getFilms();

        
        },
        methods: {
            getFilms(){
                console.log('fired....')
            }
        }

      
    }
</script>
