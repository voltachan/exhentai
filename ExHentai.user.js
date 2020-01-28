// ==UserScript==
// @name           ExHentai / E-Hentai 自动登录
// @name:zh-CN           ExHentai / E-Hentai 自动登录
// @name:zh-TW           ExHentai / E-Hentai 自動登錄
// @name:en           ExHentai / E-Hentai Auto Login
// @name:ja           ExHentai / E-Hentai 自動ログイン
// @namespace    https://exhentai.org/
// @version        1.1
//@author       voltachan(https://github.com/voltachan)
// @description  ExHentai / E-Hentai 自动登录；当前HTTP无法自动转HTTPS（怪谷歌浏览器）
// @description:zh-CN  ExHentai / E-Hentai 自动登录；当前HTTP无法自动转HTTPS（怪谷歌浏览器）
// @description:zh-TW  ExHentai / E-Hentai 自動登錄；當前HTTP無法自動轉HTTPS（怪谷歌瀏覽器）
// @description:en  ExHentai / E-Hentai automatic login; currently HTTP cannot automatically switch to HTTPS (blame Google Chrome)
// @description:ja  ExHentai自動ログイン;現在、HTTPは自動的にHTTPSに切り替えられません（Google Chromeを非難）
// @run-at       document-start
// @icon        https://i.loli.net/2020/01/27/oiaIXHnBG3tOd8F.png
// @include        *://*.e*hentai.org/*
// @include        *://e*hentai.org/*
// @grant          unsafeWindow
// @compatible firefox
// @compatible chrome
// @compatible edge
// ==/UserScript==
/* jshint esversion: 6 */

(function() {
    'use strict';
    if (document.cookie.match("7b40ef2a10f8bb5bb38c81014163a1e4")===null) {
        setCookie("igneous","162ff11c3");
        setCookie("ipb_member_id","4752844");
        setCookie("ipb_pass_hash","7b40ef2a10f8bb5bb38c81014163a1e4");
        window.location.reload();
        if (document.cookie.match("louder")!==null) {
            document.cookie= "yay=louder;domain=."+window.location.host+";expires=-1";
        }
    }
    if (window.location.host=="e-hentai.org" && document.cookie.match("0sppol5laxrnzs9nzaih09g1o2nk")===null){
        setCookie("sk","0sppol5laxrnzs9nzaih09g1o2nk");
        setCookie("s","d060769b9");
        }
    {
        let protocolStr = document.location.protocol;
        if(protocolStr !== "https:"){
            window.location.href = "https:" +window.location.href.substring(window.location.protocol.length);
        }
    }//无效。chrome-error://chromewebdata/
    function setCookie(c_name,value){
        let date=new Date();
        date.setDate(date.getDate()+365);
        document.cookie=c_name+ "=" +escape(value)+";domain=."+window.location.host+";expires="+date.toGMTString();
    }
})();
