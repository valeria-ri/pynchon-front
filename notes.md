# Примечания по изменениям в вёрстке при адаптиве  

## HTML  
### MENU - новый шаблон  
* полагаю, он идёт в includes,   
* нужно настроить ссылки, чтобы они дублировали именно те, что в хедере данной страницы;  
* для работы меню __обновила index.js__  
  
### header
* в шаблон добавлена кнопка бургер-меню __на всех страницах__ (я уже реализовала скрытие и появление кнопки посредством CSS, открытие и закрытие меню посредством JS);  
* кнопка header__book есть только на страницах 2 и 3 разделов, о проекте (зачем мы это делаем) и романов (короче везде, где чёрное меню);  
  
### footer
* просто несколько недостающих в тексте пробелов;  
  
### author (о Пинчоне)
* в первые два article добавлен css-класс "bio__article_columns";  
* у самого последнего article с фотографией Томаса Пинчона удалён css-класс "bio__article_gallery";
  
### chapter 1  
* __ничего не меняла__, взяла кусочек кода задеплоенной страницы, чтобы поработать со стилями;  
* main.js здесь не нужен, в консоли миллиард ошибок от него :D  

### chapters 2-3  
* Добавила скрипт внизу шаблона;  
* **Блокам с комментариями (которые с id=циферки) нужно задать класс 'chapter-2-3-notes__item', чтобы скрипт заработал!!!**
  
### chapter 6  
* Таблице добавила обёртку '.characters__table' для стилизации;  
* Можно подложить карту из макета, тогда добавить мой '.characters__list-block' с цветными ячейками разных типов персонажей. Если оставляем белую карту, тогда надо убрать этот список из вёрстки.
  
### about project  
* скрипт внизу страницы  
  
## JavaScript  
## chronology  
* добавила возможность скролла  
  
  
## Дополнительно  
* в img добавлена ещё одна иконка кнопки поиска для мобильной версии (идёт фоновым изображением кнопки) search-btn-mob.svg 
* иконка книжки book-icon.svg 