КАК ОПУБЛИКОВАТЬ САЙТ НА GITHUB PAGES

1. Распакуйте ZIP.
2. Загрузите В САМ РЕПОЗИТОРИЙ файлы index.html, styles.css, script.js, .nojekyll и папку assets с hero.png.
   НЕ загружайте ZIP как один файл. Не загружайте папку github-pages-ready целиком: нужно загрузить ее содержимое.
3. GitHub -> Settings -> Pages -> Build and deployment -> Source: Deploy from a branch.
4. Branch: main, Folder: / (root), затем Save.
5. Дождитесь публикации. Адрес обычно: https://ВАШ-ЛОГИН.github.io/ИМЯ-РЕПОЗИТОРИЯ/

Структура корня репозитория:
index.html
styles.css
script.js
.nojekyll
assets/
  hero.png

Фото локальное, пути относительные: сайт подходит для project pages в подпапке.
Откройте index.html на компьютере для предварительного просмотра.
