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

function getRandomProductData() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi optio perspiciatis quisquam voluptas voluptates? Atque, exercitationem facilis similique sunt tempora veniam. Ad adipisci amet architecto asperiores aspernatur atque culpa dignissimos et harum ipsam magni nobis optio placeat quos, reiciendis saepe, sapiente sed similique suscipit tempore totam unde velit vero. Assumenda est explicabo impedit molestias nam nisi nostrum quam quia temporibus ut. Alias animi aperiam at atque aut autem, deserunt dolore eum exercitationem iusto, magnam magni molestiae neque obcaecati praesentium quidem, rem rerum suscipit totam ullam. Assumenda cumque ex laboriosam laudantium necessitatibus nemo officiis pariatur possimus qui reiciendis! Animi corporis doloribus explicabo facere id ipsam labore praesentium sed. A ad at explicabo ipsum neque omnis possimus, provident reiciendis vel. Eius nisi nulla officia. Eos necessitatibus quibusdam reiciendis voluptate. A accusantium amet animi architecto consectetur consequatur culpa cupiditate distinctio dolorum eaque earum error et facilis fugit hic impedit incidunt nam nostrum numquam officia optio, perspiciatis placeat porro quas quasi qui quibusdam quo quos reiciendis rerum saepe sed soluta totam ullam ut voluptatem voluptates! Adipisci architecto asperiores atque blanditiis corporis distinctio ea eaque eligendi eos, error esse eveniet ex excepturi facere, iusto modi natus nisi odit optio quaerat quidem quis quisquam ratione sint, tempora tenetur veritatis voluptate voluptatem voluptates voluptatibus! Aliquam at atque, autem blanditiis dolorem dolores facere fuga itaque maiores, nam non provident rem similique? A accusantium alias, aspernatur beatae consectetur eaque eligendi esse et facere fuga fugiat illum inventore iure iusto maiores nihil nisi non numquam officiis perferendis porro quis quo suscipit vel voluptate. Consequuntur delectus dolores doloribus esse, est, expedita id inventore iste magni nostrum omnis quae sequi, voluptates. Delectus harum maiores neque vero? Delectus doloribus eaque eveniet illum maxime non perspiciatis, quo vel? Aperiam assumenda atque cumque dolore ipsa nam odit perferendis recusandae reprehenderit veniam? Accusamus facere illum maxime modi sed? Accusamus accusantium architecto atque consectetur corporis debitis dolorem dolores ducimus, eaque enim esse exercitationem fugit harum illo ipsa laborum maiores maxime mollitia neque odio officia officiis omnis optio quae quasi quod reiciendis rem, repellat rerum sapiente sed sequi tempore tenetur velit veniam veritatis voluptatibus? Aliquam at deserunt doloribus dolorum eos molestiae non provident, ut. Amet consectetur doloremque excepturi fugiat illo illum impedit ipsam itaque magnam modi molestias mollitia nobis numquam, obcaecati officia officiis, possimus praesentium quasi quos reiciendis rem repellendus sed sit, tenetur voluptate! Debitis dignissimos eligendi eos esse iste laborum odio reprehenderit soluta voluptate! Ad commodi dicta eos incidunt nobis nulla, quas qui quod ullam veritatis. Aut exercitationem impedit incidunt labore modi nesciunt nostrum, officiis porro quam repellendus ut veniam veritatis? Accusantium alias cum, ducimus est excepturi incidunt labore libero necessitatibus, quaerat quis, ratione similique soluta sunt suscipit ullam. Ad adipisci cupiditate deserunt, eaque impedit inventore molestiae molestias officia perferendis, provident quos recusandae rem repellat sed suscipit. Aspernatur, cupiditate earum in incidunt laudantium odio quis reiciendis rerum similique tenetur totam ut vel! Architecto autem cum dolorum ea facilis fuga hic ipsum iste libero neque nulla odit provident quisquam reprehenderit ut, vel vitae? Accusantium ad aspernatur atque consequatur, cum cumque exercitationem fuga id illo in iste iure labore magnam nam nostrum officiis quo rerum unde vitae voluptatem? Accusamus, adipisci assumenda beatae consequatur delectus dolor eius esse facilis fugiat harum id illo impedit iusto, minus molestias odit officia pariatur placeat porro quia recusandae repellat rerum tempore ullam, ut velit voluptate voluptatibus. Fugiat, impedit incidunt iste iusto nobis nulla omnis pariatur quisquam reiciendis vel! Amet beatae consequatur deserunt maxime nam quidem quod rem rerum ullam vitae? Ab, assumenda consectetur deleniti dolorem dolorum eius, illo maiores nemo officia officiis possimus quaerat qui, quia sit tenetur unde velit veritatis! A accusamus asperiores cum dolorem dolores est excepturi laborum, libero nemo, nihil nobis quidem rem repudiandae similique suscipit ullam voluptates. Ab ad asperiores, assumenda commodi consectetur consequatur cum doloribus ducimus eius eos expedita facilis in iure laudantium libero, minima molestiae nulla obcaecati odio officia optio provident quasi quidem quod repellat repellendus repudiandae sed sint tempora tempore temporibus totam velit voluptatum. Alias assumenda atque debitis dignissimos dolores esse excepturi incidunt maiores minus, molestias nihil praesentium quaerat quas rem vero! Beatae cupiditate ducimus expedita iste itaque laborum, minus necessitatibus perferendis placeat, praesentium quasi quo reprehenderit repudiandae sunt vero. A accusamus accusantium ea facilis necessitatibus non quae sapiente vel voluptate! Ab accusantium adipisci alias aliquid amet animi asperiores assumenda consectetur eaque earum est expedita facere facilis fuga impedit inventore minima natus necessitatibus nemo omnis quae quas qui sed suscipit tenetur unde ut, vero? Adipisci at cum cupiditate dignissimos dolorem ea eum eveniet ex id magni quam quod, repudiandae, similique tempora tempore ut veritatis voluptate! Amet assumenda blanditiis cum ducimus eum hic ipsa, ipsam laborum magni natus, non, perferendis perspiciatis quisquam soluta voluptates? Ab aliquid at commodi consequuntur dolore eaque eligendi esse exercitationem fugiat harum illum laboriosam libero minus molestiae nobis obcaecati possimus, quasi quibusdam sunt voluptatibus. Ab cumque, ea facere impedit modi molestiae natus nisi nobis quisquam, quo repudiandae similique vero voluptatem. Laudantium minus qui ut. Error hic molestiae nisi quod voluptate. Aliquam dicta est natus. Animi aspernatur consequatur debitis deserunt dignissimos dolores fugit id illum, impedit libero maxime neque nisi nulla officiis quasi quia, quidem repellat, reprehenderit. Alias aliquam animi architecto at, aut beatae blanditiis debitis dicta dolor dolore doloribus earum eligendi eos est eum eveniet exercitationem expedita harum impedit incidunt nulla perferendis quae qui quibusdam quis quod sint soluta tempora voluptatem voluptates. Adipisci culpa debitis esse ipsam ipsum magnam quisquam, sunt totam voluptas voluptatem! Accusamus aperiam asperiores commodi corporis, error esse est, eveniet illum laborum laudantium necessitatibus officia quas quod sed sit? Deleniti harum perspiciatis qui, repellendus sequi soluta temporibus! Animi cum delectus mollitia quasi quis rem sunt! Accusantium alias autem, consequatur delectus enim esse id inventore minima non omnis possimus quam quisquam tempore! Architecto commodi cupiditate excepturi explicabo iste labore modi omnis quis ullam. Cum eveniet praesentium quasi? Atque ipsa mollitia sint tenetur vitae voluptatibus! Accusamus alias amet corporis culpa debitis deserunt eaque error et eum ex, fuga fugiat fugit illo ipsum maiores quae repellendus repudiandae voluptatibus? Architecto impedit qui quos reprehenderit!";
    const randomText = charCount => {
        let substringStart = Math.random() * text.length | 0;
        substringStart = Math.min(substringStart, text.length - charCount - 1);
        return text.slice(substringStart, substringStart + charCount);
    };
    const getId = () => `${Math.random() * (2 ** 31) | 0}${Math.random() * (2 ** 31) | 0}${Math.random() * (2 ** 31) | 0}`;
    const getName = () => randomText(20).toUpperCase();
    const getDescription = () => randomText(100);
    const getImgSrc = () => `img/products/${1 + Math.random() * 12 | 0}.jpg`;
    const getPrice = () => `${Number(10 + Math.random() * 1200).toFixed(2)}`;
    return {
        id: getId(),
        name: getName(),
        description: getDescription(),
        imgSrc: getImgSrc(),
        price: getPrice()
    };
}

// Открываем файл для json объектов ProductData для записи
const productsFd = fs.openSync(path.join(__dirname, 'products.json'), 'w');

// Генерим пустой массив для рандомных объектов ProductData
const productObjs = new Array(1000).fill(null);

// Заполняем массив рандомными объектами ProductData
productObjs.forEach((val, idx,array) => {
    array[idx] = getRandomProductData();
});

// Записываем в файл массив  ProductData в виде JSON строки
fs.appendFileSync(productsFd, JSON.stringify(productObjs), 'utf8');
fs.closeSync(productsFd);


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