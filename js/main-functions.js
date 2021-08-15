//< Загрузка html документов в теги import, где атрибут "file" - путь к html файлу.
$(function importHTML(findPlace = $('html')) {
    let importPlaces = findPlace.find('import');

    if (importPlaces[0]) {
        $(importPlaces).each((i, importTag) => {
            let file = importTag.getAttribute('file');
            // Поиск продолжится с родителя в который был произведен последний импорт.
            findPlace = $(importTag.parentNode);
            importTag = $(importTag).load(file, () => {
                importTag.replaceWith(importTag.html());
                /* В импортированных файлах, тоже может быть импорт, поэтому снова вызываем функцию.
                 * Если импорт-тэг найден, то подгружаем файл, иначе ничего не происходит.
                 * Функция будет самовоспроизводится пока не пройдется по всем импорт-тегам, которые
                 * находятся в файле вызова скрипта и в файлах которые были импортированы.
                 */
                importHTML(findPlace);
            });
        });
    }
});
//>