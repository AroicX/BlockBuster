<template>
<div>
  	<div class="hero mv-single-hero">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<!-- <h1> movie listing - list</h1>
				<ul class="breadcumb">
					<li class="active"><a href="#">Home</a></li>
					<li> <span class="ion-ios-arrow-right"></span> movie listing</li>
				</ul> -->
				</div>
			</div>
		</div>
	</div>

  <div class="page-single movie-single movie_single">
		<div class="container">
			<div class="row ipad-width2">
				<div class="col-md-4 col-sm-12 col-xs-12">
					<div class="movie-img sticky-sb">
						<img v-bind:src="film.photo">
						<div class="movie-btn">
						
							<div class="btn-transform transform-vertical">
								<div><a href="#" class="item item-1 yellowbtn"> <i class="ion-card"></i>{{film.ticket_price}}</a>
								</div>
								<div><a href="#" class="item item-2 yellowbtn"><i class="ion-card"></i></a></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-8 col-sm-12 col-xs-12">
					<div class="movie-single-ct main-content">
						<h1 class="bd-hd">{{film.name}} <span>{{film.release_date}}</span></h1>
						<div class="social-btn">
							<a href="#" class="parent-btn"><i class="ion-heart"></i> Add to Favorite</a>
							<div class="hover-bnt">
								<a href="#" class="parent-btn"><i class="ion-android-share-alt"></i>share</a>
								<div class="hvr-item">
									<a href="#" class="hvr-grow"><i class="ion-social-facebook"></i></a>
									<a href="#" class="hvr-grow"><i class="ion-social-twitter"></i></a>
									<a href="#" class="hvr-grow"><i class="ion-social-googleplus"></i></a>
									<a href="#" class="hvr-grow"><i class="ion-social-youtube"></i></a>
								</div>
							</div>
						</div>
						<div class="movie-rate">
							<div class="rate">
								<i class="ion-android-star"></i>
								<p><span>{{film.rating}}</span> /5<br>
									
								</p>
							</div>
							
						</div>
						<div class="movie-tabs">
							<div class="tabs">
								<ul class="tab-links tabs-mv">
									<li class="active"><a href="#overview">Overview</a></li>
								
								</ul>
								<div class="tab-content">
									<div id="overview" class="tab active">
										<div class="row">
											<div class="col-md-8 col-sm-12 col-xs-12">
												<p>{{film.description}}</p>
									
											
												<div class="title-hd-sm">
													<h4>User reviews</h4>
													<a href="#" class="time">See All {{film.comments.length}} Reviews <i
															class="ion-ios-arrow-right"></i></a>
												</div>
												<!-- movie user review -->
												<div class="mv-user-review-item" v-for="comment in film.comments" v-bind:key="comment.id">
													<h3>{{comment.name}}</h3>
													
													<p class="time">
														{{comment.created_at}} <a href="#"> {{comment.name}}</a>
													</p>
													<p>{{comment.comment}}</p>
												</div>
											</div>
											<div class="col-md-4 col-xs-12 col-sm-12">
											
											</div>
										</div>
									</div>
								
									
								</div>
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
    import axios from 'axios';
    export default {
        data(){
            return{
                film: []
            }
        },
        created() {
            let id = this.$route.params.film_id;
            axios
                .get(`/api/films/find/${id}`)
                .then(res => {
                    let result = {...res.data.data};
                    
                        this.film = result
                   
                })
                .catch(err => console.error);
        },
        mounted() {
          console.log(film)
            console.log('Component ready.')
        }
    }
</script>