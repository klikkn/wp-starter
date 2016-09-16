<?php 
/*
	Страница комментариев
	Обычно используется для вывода отзывов
*/
?>


<?php 
	if ( post_password_required() ) {
		return;
	}
?>
	<?php $post_id = get_the_ID(); ?>

	<?php 
		if ($post_id == 17) { //страница Задать вопросы
			comment_form( array(
				'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title">',
				'title_reply_after'  => '</h2>',
				'title_reply'  => '',
				'label_submit'  => 'Оставить отзыв',
				'comment_field' => '<p class="comment-form-comment"><label for="comment">Отзыв</label><textarea id="comment" name="comment" aria-required="true"></textarea></p>'
			));
		}

	?>

	<div class="clearfix"></div>

<div class="comments">

	<?php if ( have_comments() ) : ?>

	<ol class="comments-list">
	  <?php
	    wp_list_comments( array(
	      'style'       => 'ol',
	      'short_ping'  => false,
	      'avatar_size' => 0,
	      'per_page' => 2,
	      'max_depth' => 2,
	      'reply_text' => false
	    ) );
	  ?>
	</ol><!— .comment-list —>

	<div class="pagination">
		<?php echo paginate_comments_links(array(
			'screen_reader_text' => 0,
			'prev_next'          => false
		)); ?> 
	</div>

	<?php endif; // Check for have_comments(). ?>



</div><!— .comments-area —>