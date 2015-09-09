// 动态获取初始rem值
var rem;
(function (win, doc) {
    var h;
    win.addEventListener('resize', function () {
        clearTimeout(h);
        h = setTimeout(setUnitA, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(h);
            h = setTimeout(setUnitA, 300);
        }
    }, false);
    var setUnitA = function () {
        rem = document.documentElement.clientWidth / 32;
        doc.documentElement.style.fontSize = rem + 'px';
    };
    setUnitA();
})(window, document);