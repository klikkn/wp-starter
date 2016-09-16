<?php 
/*
	Страница отображения категории
	
	Предусмотрен вывод дочерних категорий.
	Если он не нужен оставьте между header и footer только строчку
	<?php get_template_part( 'templates/category', 'default' ); ?>
*/
?>

<?php get_header() ?>

	<?php 

		//==================================================
		// Вычисление уровня дочернего элемента
		//==================================================

		$max_depth_to_test  = intval( 2 ); //set this to highest depth you might have
		$last_depth     = 0;
		$cat_to_test    = $cat;
		$category     = get_category( $cat_to_test );

		for ( $counter = 1; $counter <= $max_depth_to_test; $counter += 1 ) {
		  if ( $category->category_parent ) {
		    $category = get_category( $category->category_parent );
		    $last_depth = $counter;
		  }
		}

		$last_depth +=1;

		//===========================================================
		// Вывод разных стилей для Рубрик / Категорий / Таксономий
		//===========================================================

		if ( category_has_children( $cat )) {
		  get_template_part( 'templates/category', 'depth' );
		} else {
		  get_template_part( 'templates/category', 'default' );
		}

 	?>

<?php get_footer() ?>