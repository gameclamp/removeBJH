// ==UserScript==
// @name         700mh.com
// @namespace    https://github.com/gameclamp
// @version      0.1
// @description  
// @author       gameclamp
// @match        http://www.700mh.com/manhua/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#viewimages').innerHTML='';
    photosr.forEach(function(img){
        img = 'http://katui.700mh.com/'+img;
        document.querySelector('#viewimages').innerHTML+=`<img src='${img}'>`;
    });
    page=9999;
})();
