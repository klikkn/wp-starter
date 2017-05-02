<?php
	
	//==================================================
	// Функция для отображения дочерних категорий
	//==================================================

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

	//==================================================
	// Убирает ошибку на локальном компе «Не удалось 
	// установить защищённое соединение с WordPress.org»
	//==================================================

	function increase_timeout_for_api_requests_27091( $r, $url ) {
	  if ( false !== strpos( $url, '//api.wordpress.org/' ) ) {
	    $r['timeout'] = 30;
	  }
	  return $r;
	}
	add_filter( 'http_request_args', 'increase_timeout_for_api_requests_27091', 10, 2 );
	
	/**********/

	//==================================================
	// Настройки для темы
	//==================================================

	add_theme_support('menus');
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'mini-cat-pic', 200, 250, true );



?>