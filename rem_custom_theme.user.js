// ==UserScript==
// @name         Remove custom theme
// @namespace    https://tjournal.ru
// @version      1
// @description  Ded Pihto
// @author       PP
// @match        https://tjournal.ru/sex*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
$("body").bind("DOMSubtreeModified", function() {
        $("#custom_subsite_css").remove();
});
})();
