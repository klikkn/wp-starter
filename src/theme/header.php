<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<link rel="shortcut icon" href="<?php bloginfo('stylesheet_directory'); ?>/img/favicon.ico" type="image/png">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/vendors.css" />
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/main.css" />

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="wrapper">

<div class="header">
	<div class="wrapper-inner">
		<a href='/' class="header__logo">
			<img src="<?php bloginfo('stylesheet_directory'); ?>/img/logo.png">
		</a>

		<div class="header__callback">
			<a href="+7 (890) 123-45-67">+7 (890) 123-45-67</a>
			<a href="#callback" class="button j-open-callback">
				Оформить заявку
			</a>
		</div>

		<div class="nav">
			<?php    /**
				* Displays a navigation menu
				* @param array $args Arguments
				*/
				$args = array(
					'theme_location' => '',
					'menu' => 'Верхнее меню',
					'container' => '',
					'container_class' => 'menu-{menu-slug}-container',
					'container_id' => '',
					'menu_class' => 'menu',
					'menu_id' => '',
					'echo' => true,
					'fallback_cb' => 'wp_page_menu',
					'before' => '',
					'after' => '',
					'link_before' => '',
					'link_after' => '',
					'items_wrap' => '<ul id = "%1$s" class = "%2$s">%3$s</ul>',
					'depth' => 0,
					'walker' => new custom_walker_nav_menu
				);
			
				wp_nav_menu( $args );?>
		</div>
	</div>

</div>

<div class="main">

