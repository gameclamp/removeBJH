// ==UserScript==
// @name         700mh.com
// @namespace    https://github.com/gameclamp
// @version      0.1
// @description  
// @author       gameclamp
// @downloadURL  https://github.com/gameclamp/removeBJH/raw/master/700mh.user.js
// @updateURL    https://github.com/gameclamp/removeBJH/raw/master/700mh.user.js
// @match        http://www.700mh.com/manhua/*
// @match        http://www.pufei.net/manhua/*
// @match        http://www.taduo.net/manhua/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let option = document.querySelector('#selectpage1 option:last-child');
    if(!option.selected == true){
        document.querySelector('#selectpage1 option:last-child').selected = true;
        document.querySelector('#selectpage1>select').onchange();
    }
    document.querySelector('#viewimages').innerHTML='';
    photosr.forEach(function(img){
        if(location.href.indexOf('www.pufei.net')>=0){
            img = loadview.toString().match(/imgserver = \'(.*?)\'/)[1]+img;
        }else{
            img = WebimgServerURL[0]+img;
        }
        document.querySelector('#viewimages').innerHTML+=`<img src='${img}' style='padding:0px'>`;
    });
    $j.post('/e/extend/ret_page/index.php',{id:viewid},function(data){
        if(data.status==1){
            $j('.next').attr('href',data.url);
            $j('body').append(`<iframe src="${data.url.match(/\d+/g)[1]}.html" style="display:none"></iframe>`)
        }
    },"json");
})();
