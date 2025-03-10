// ==UserScript==
// @name			Maas: авторизация по нажатию клавиши
// @version			1.0
// @description		10-03-2025
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/maas-auth-by-key.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/maas-auth-by-key.js
// @author			saddedmoroz
// @match			https://moderation.avito.ru/gw/*
// ==/UserScript==

/*
	Нажатие управляющей кнопки при нажатии клавиш Enter или NumpadEnter.
	Чтобы не тянуться за мышкой.
*/

'use strict';

document.addEventListener("keydown",(e=>{if("Enter"==e.code||"NumpadEnter"==e.code)try{document.getElementById("submit-button").click()}catch(e){console.error(e.message)}}));
