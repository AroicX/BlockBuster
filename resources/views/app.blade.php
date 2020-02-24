<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone-no">

	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>Films </title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">


	<!-- CSS files -->
	<link rel="stylesheet" href="css/plugins.css">
	<link rel="stylesheet" href="css/style.css">


</head>

<body>
	<div id="preloader">
		<img class="logo" src="images/logo1.png" alt="" width="119" height="58">
		<div id="status">
			<span></span>
			<span></span>
		</div>
	</div>


	<div id="app">


		<!-- BEGIN | Header -->
		<header class="ht-header">
			<div class="container">
				<nav class="navbar navbar-default navbar-custom">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header logo">
						<div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<div id="nav-icon1">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<router-link to="/"><img class="logo" src="images/logo1.png" alt="" width="119" height="58">
						</router-link>
					</div>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">

						<ul class="nav navbar-nav flex-child-menu menu-right">

							<li>
								<router-link to="/films">Films</router-link>
							</li>
							<li class="loginLink">
								<router-link to="#">LOG In</router-link>
							</li>
							<li class="btn signupLink">
								<router-link to="#">sign up</router-link>
							</li>
						</ul>
					</div>
					<!-- /.navbar-collapse -->
				</nav>


			</div>
		</header>
		<!-- END | Header -->




		<router-view></router-view>


	</div>



	<footer class="ht-footer">
		<div class="container">
			<div class="flex-parent-ft">
				<div class="flex-child-ft item1">
					<a href="index-2.html"><img class="logo" src="images/logo1.png" alt=""></a>
					<p>5th Avenue st, manhattan<br>
						New York, NY 10001</p>
					<p>Call us: <a href="#">(+01) 202 342 6789</a></p>
				</div>
				<div class="flex-child-ft item2">
					<h4>Resources</h4>
					<ul>
						<li><a href="#">About</a></li>
						<li><a href="#">Blockbuster</a></li>
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">Forums</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Help Center</a></li>
					</ul>
				</div>
				<div class="flex-child-ft item3">
					<h4>Legal</h4>
					<ul>
						<li><a href="#">Terms of Use</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Security</a></li>
					</ul>
				</div>
				<div class="flex-child-ft item4">
					<h4>Account</h4>
					<ul>
						<li><a href="#">My Account</a></li>
						<li><a href="#">Watchlist</a></li>
						<li><a href="#">Collections</a></li>
						<li><a href="#">User Guide</a></li>
					</ul>
				</div>
				<div class="flex-child-ft item5">
					<h4>Newsletter</h4>
					<p>Subscribe to our newsletter system now <br> to get latest news from us.</p>
					<form action="#">
						<input type="text" placeholder="Enter your email...">
					</form>
					<a href="#" class="btn">Subscribe now <i class="ion-ios-arrow-forward"></i></a>
				</div>
			</div>
		</div>
		<div class="ft-copyright">
			<div class="ft-left">

			</div>
			<div class="backtotop">
				<p><a href="#" id="back-to-top">Back to top <i class="ion-ios-arrow-thin-up"></i></a></p>
			</div>
		</div>
	</footer>
	<!-- end of footer section-->
	<script src="js/jquery.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/plugins2.js"></script>
	<script src="js/custom.js"></script>

	<script src="{{ asset('js/app.js') }}"></script>
</body>

</html>