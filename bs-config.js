module.exports = {
    "port": 9000,
    "notify": false, // не показывать в браузере чёрное окошко BrowserSync
    "ui": false, // не открывать отдельный порт для управления BrowserSync
    // "files": "./src/**/*.{html,css,js}", // следить за изменением таких файлов, то есть никаких
    "reloadDelay": 500,
    "ghostMode": false,
    "reloadDebounce": 500,
    "injectChanges": false,
    "minify": false,
    "server": { "baseDir": "./build" }
};