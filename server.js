const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

// получаем полный путь к папке public
const dir = path.join(__dirname, 'public');

// соответствие расширений файлов MIME-типу ответов сервера
const mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

// добавляем общий обработчик
app.get('*', function (req, res) {
    // строим полный путь к запрошенному файлу, заменяя краийний / при наличии на /index.html
    const file = path.join(dir, req.path.replace(/\/$/, '/index.html'));

    // убеждаемся, что путь ведет в публичную папку
    if (file.indexOf(dir + path.sep) !== 0) {
        // возвращаем ошибку
        return res.status(403).end('Forbidden');
    }

    // декодируем MIME-тип из расширения файла
    const type = mime[path.extname(file).slice(1)] || 'text/plain';

    // создаем стрим для чтения запрошенного файла
    const s = fs.createReadStream(file);

    // создаем обработчик чтения запрошенного файла из стрима
    s.on('open', function () {
        // указываем MIME-тип запрошенного файла
        res.set('Content-Type', type);
        // связываем стримы чтения запрошенного файла и записи ответа
        s.pipe(res);
    });

    // создаем обработчик ошибки чтения запрошенного файла из стрима
    s.on('error', function () {
        // указываем MIME-тип простого текста
        res.set('Content-Type', 'text/plain');
        // возвращаем ошибку
        res.status(404).end('Not found');
    });
});

// определяем на каком порту серверу ждать входящие соединения
const port = process.env.PORT || 3000;

// запускаем ожидание входящих соединений и выводим номер используемого порта
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});