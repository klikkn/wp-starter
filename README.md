# Starter Kit: Wordpress

Данный пакет предназначен для быстрой разработки темы для Wordpress.

Файлы содержащие название проекта:

```sh
package.json
bower.json
gulp.babel.js
src/theme/style.css
```

# Установка

1. Склонируйте приложение

	```sh
	git clone https://github.com/klikkn/wp-starter-kit
	```

2. Установите зависимости

	```sh
	npm install
	```

3. Укажите путь до папки с темой в файле gulp.babel.js

	```sh
	var path_to_theme = ../localhost/site/wp-content/themes/theme-name
	```

4. Введите локальный домен вашего сайта в в файле gulp.babel.js

	```sh
	gulp.task('browser-sync', function() {
	    bs.init({
	        proxy: **'wp.dev'**,
	        logPrefix: "wp-starter-kit",
	        port: 9000
	    });
	});
	```

5. Запустите приложение

	```sh
	gulp
	```

Сайт автоматически откроется в браузере по адресу http://localhost:9000.

# Плагины

Вместе с данным пакетом, советую скачать данные плагины:


 1. [Cyr3Lat](https://ru.wordpress.org/plugins/cyr3lat/)
 2. [TinyMCE](https://ru.wordpress.org/plugins/tinymce-advanced/)
 3. [ContactForm7](https://ru.wordpress.org/plugins/contact-form-7/)
 4. [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
 5. [wp-maintenance-mode](https://ru.wordpress.org/plugins/wp-maintenance-mode/)
 6. [Filenames to latin](https://wordpress.org/plugins/filenames-to-latin/)