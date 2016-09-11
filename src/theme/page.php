<?php get_header() ?>

	<?php
		$page_data = get_page(10);
		$title = apply_filters('the_title', $page_data->post_title);
		$content = apply_filters('the_content', $page_data->post_content);
	?>

	<h1 class="title index__title">
		<?php echo $title; ?>
	</h1>

	<div class="content index__content">
		<?php echo $content; ?>
	</div>

<?php get_footer() ?>