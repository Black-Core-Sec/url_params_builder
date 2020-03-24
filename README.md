# url_params_builder
Обработчик ссылок, формирующий URL.

Обработчик сохраняет\обновяет имеющиеся параметры, и добавляет новый.
Пример:
имеем URL example.com/?key1=val1&key2=val2

нам нужно добавить новый параметр (например для пагинации) и сохранить имеющиеся параметры (например фильтры и сортировку).

используем ссылки с классом `params` и `href` вида `key=val`
```<a href="p=1" class="params">page_1</a>```
После перехода по ссылке будем иметь URL example.com/?key1=val1&key2=val2&p=1
```<a href="p=2" class="params">page_2</a>```
Нажатие на такую ссылку изменит значение параметра ```p``` на "2"
будем иметь URL example.com/?key1=val1&key2=val2&p=2
То же самое асается уже имеющихся параметров .. - они будут переписываться.

Для использования:
1) Добавляем скрипт на страницу.
2) Нужным ссылкам (добавляющим параметры к текущей странице) добавлем класс "params" и href формата ```key=value``` без "?" и "&" 
