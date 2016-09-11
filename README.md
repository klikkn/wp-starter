# Starter Kit: Wordpress

Данный пакет предназначен для быстрой разработки темы для Wordpress.

# Установка

1. Склонируйте приложение

```sh
git clone https://github.com/klikkn/wp-starter-kit
```

2. Установите зависимости

```sh
npm install
```

3.  Укажите путь до папки с темой в файле gulp.babel.js

```sh
var path_to_theme = ../localhost/site/wp-content/themes/theme-name
```

4.  Введите локальный домен вашего сайта в в файле gulp.babel.js

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

Сайт автоматически откроется в браузере по адресу http//localhost:9000.