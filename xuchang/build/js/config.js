"use strict";require.config({baseUrl:"/js/",paths:{jquery:"lib/jquery-3.3.1",index:"page/index",zepto:"lib/zepto",flexible:"lib/flexible",text:"lib/require.text",template:"../template/",handlebars:"lib/handlebars-v4.0.11",tmp:"common/tmp",Swiper:"lib/swiper-4.2.2.min",lazyload:"lib/jquery.lazyload",search:"search/index",detail:"detail/index",getUrl:"common/getUrl",menu:"menu/index",textB:"textB/index",base64:"lib/jquery.base64",login:"login/index"},shim:{lazyload:{exports:"lazyload",deps:["jquery"]},base64:{exports:"base64",deps:["jquery"]}}}),define(["flexible"]);