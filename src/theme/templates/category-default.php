<?php get_header() ?>

	<?php 
		// Если нужно фильтровать по id категории
		// $category = get_the_category();
		// $cat_id = $category[0]->term_id;
	?>

	<h1 class="title category__title">
		<?php echo single_cat_title() ?>
	</h1>

	<div class="content category__content">
		<?php
			if (have_posts()) : while (have_posts()) : the_post(); ?>
				<div class="post">

				<a class="post__link" href="<?php the_permalink(); ?>">

					<div class="post__thumbnail">
						<?php the_post_thumbnail(); ?>
					</div>

					<div class="title post__title">
						<?php the_title(); ?>
					</div>

					<div class="post__date">
						<?php the_time('j F Y') ?>
					</div>
					
				</a>
			</div>
		<?php endwhile; endif; ?>
	</div>

	<div class="category__desc">
		<?php echo category_description(); ?>
	</div>

<?php get_footer() ?>