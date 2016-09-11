<?php
	/* Walkers */
	require(dirname(__FILE__).'/walkers/wp-nav-walker.php');
	/**********/
	
	add_theme_support('menus');
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'mini-cat-pic', 200, 250, true );
?>