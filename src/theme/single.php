<?php get_header() ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<h1 class="title single__title">
	 	<?php the_title(); ?>
	</h1>

	<div class="single__date">
		<?php the_time('j F Y') ?>
	</div>

	<div class="single__content">
		<?php the_content(); ?>
	</div>

	<?php endwhile; endif; ?>

<?php get_footer() ?>