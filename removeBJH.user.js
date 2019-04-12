// ==UserScript==
// @name         removeBJH
// @namespace    https://github.com/gameclamp/removeBJH
// @homepageURL  https://github.com/gameclamp/removeBJH
// @supportURL   https://github.com/gameclamp/removeBJH/issues
// @version      0.1
// @description  
// @author       9尾雪狐(gameclamp)
// @match        https://www.baidu.com/*
// @downloadURL  https://github.com/gameclamp/removeBJH/raw/master/removeBJH.user.js
// @updateURL    https://github.com/gameclamp/removeBJH/raw/master/removeBJH.meta.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    let MutationObserver = window.MutationObserver;
    const observer = new MutationObserver(removeBJH);
    document.addEventListener ("DOMContentLoaded", function(){removeBJH();observer.observe(document.querySelector('#wrapper_wrapper'),{'childList':true})});
    function removeBJH(){
        document.querySelectorAll('.result.c-container[data-click*="rsv_cd"]').forEach(v=>v.remove());
    }
})();
