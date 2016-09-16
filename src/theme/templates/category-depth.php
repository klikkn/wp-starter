<?php get_header() ?>
<h1 class="title category__title">
<?php echo single_cat_title() ?>
</h1>

<div class="content category__content">

  <?php 
    $args = array(
    'parent' => $cat,
    'hide_empty' => false
    );
    $categories = get_terms( 'category' , $args );
  ?>

  <?php if ( $categories ) : ?>
    <?php foreach ( $categories as $cat ) : ?>
      <a class="category__item" href="<?php echo get_category_link( $cat->term_id ); ?>">
        <div class="category__item-thumbnail">
          <img src="<?php echo z_taxonomy_image_url($cat->term_id, "", ""); ?>" />
        </div>

        <div class="title title--item">
          <?php echo $cat->name; ?>
        </div>
      </a>
    <?php endforeach; ?>
  <?php endif; ?>

  <?php echo category_description(); ?>

</div>

<?php get_footer() ?>