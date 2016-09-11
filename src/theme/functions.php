<?php
	/* Walkers */
	require(dirname(__FILE__).'/walkers/wp-nav-walker.php');
	/**********/
	
	/* Functions */
	function category_has_children() {

		global $wpdb;

		$term = get_queried_object();
		$category_children_check  = $wpdb->get_results(" SELECT * FROM wp_term_taxonomy WHERE parent = '$term->term_id' ");

		if ( $category_children_check ) {
			return true;
		} else {
			return false;
		}
	}

	
	/**********/

	add_theme_support('menus');
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'mini-cat-pic', 200, 250, true );
?>