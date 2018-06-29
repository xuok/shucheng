var homeData = require('./index/home');
var page1 = require('./index/recommend1');
var page2 = require('./index/recommend2');
var page3 = require('./index/recommend3');
var searchkey = require('./search/searchKey');
var searchResult = require('./search/search');
var detail = require('./detail/352876');
var menu = require('./render/chapter-list');
var chapter1 = require('./render/data1');
var chapter2 = require('./render/data2');
var chapter3 = require('./render/data3');
var chapter4 = require('./render/data4');
var home = {
    '/api/index': homeData,
    '/api/loadmore?pagenum=1&limit=20': page1,
    '/api/loadmore?pagenum=2&limit=20': page2,
    '/api/loadmore?pagenum=3&limit=20': page3,
    '/api/bookself': page1,
    '/api/searchKey': searchkey,
    '/api/detail?id=352876': detail,
    '/api/menu?id=352876': menu,
    '/api/reader?chapterNum=1': chapter1,
    '/api/reader?chapterNum=2': chapter2,
    '/api/reader?chapterNum=3': chapter3,
    '/api/reader?chapterNum=4': chapter4
}
module.exports = function(url) {
    if (/\/api\/result/.test(url)) {
        var n = url.split('?')[1];
        var val = decodeURIComponent(n.split('=')[1]);
        var reg = new RegExp(val, 'g');
        var obj = {
            msg: '暂无数据',
            cont: []
        }
        var result = searchResult.items.filter(function(v, i) {
            v.authors = v.role[0][1];
            v.summary = v.intro;
            return reg.test(v.title) || reg.test(v.intro) || reg.test(v.role[0][1]);
        });
        if (result.length) {
            obj.msg = 'success',
                obj.cont = result
        }
        return obj;
    }
    return home[url];
}