<?php get_header() ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<h1 class="title page__title">
	 	<?php the_title(); ?>
	</h1>

	<div class="page__date">
		<?php the_time('j F Y') ?>
	</div>

	<div class="content page__content">
		<?php the_content(); ?>
	</div>

	<?php endwhile; endif; ?>

<?php get_footer() ?>