// ==UserScript==
// @name			DSC: 677 хоткеи (v3)
// @version			1.2
// @description		Модификация горячих клавиш
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/master/dsc-hotkeys-mod-v3.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/master/dsc-hotkeys-mod-v3.js
// @author			saddedmoroz
// @match			https://centiman.avito.ru/service-dataset-collector-frontend/*
// ==/UserScript==

/*
	1 пропустить (сразу отправляет)
	Кнопки 2-6 выставляют резолюцию без отправки
	2 фото
	3 заголовок
	4 описание
	5 имя УЗ
	6 увод

	Enter на цифровой клавиатуре нажимает Готово (отправляет резолюцию если она была выставлена)

	Все буквенные кнопки сразу отправляют одну указанную резолюцию, даже если (случайно) выбраны другие
	A пропустить (сразу отправляет)
	S фото
	D заголовок
	F описание
	G имя УЗ
	H увод
*/

'use strict';

function _0x5965(_0x380fb1,_0x4cd0c6){const _0x3d01a2=_0x3d01();return _0x5965=function(_0x5965e7,_0x6ede45){_0x5965e7=_0x5965e7-0x16a;let _0x5eacd2=_0x3d01a2[_0x5965e7];return _0x5eacd2;},_0x5965(_0x380fb1,_0x4cd0c6);}const _0x5be825=_0x5965;(function(_0x469561,_0x5a7ad5){const _0x2b73e6=_0x5965,_0x124fc5=_0x469561();while(!![]){try{const _0x31d597=-parseInt(_0x2b73e6(0x175))/0x1*(parseInt(_0x2b73e6(0x17f))/0x2)+parseInt(_0x2b73e6(0x182))/0x3+parseInt(_0x2b73e6(0x16b))/0x4+parseInt(_0x2b73e6(0x178))/0x5*(parseInt(_0x2b73e6(0x180))/0x6)+parseInt(_0x2b73e6(0x16d))/0x7*(-parseInt(_0x2b73e6(0x18d))/0x8)+-parseInt(_0x2b73e6(0x170))/0x9+parseInt(_0x2b73e6(0x16a))/0xa;if(_0x31d597===_0x5a7ad5)break;else _0x124fc5['push'](_0x124fc5['shift']());}catch(_0x5967ed){_0x124fc5['push'](_0x124fc5['shift']());}}}(_0x3d01,0x1ddf8));const I_SA_SKIP=0x0,I_SA_PHOTO=0x1,I_SA_HEADER=0x2,I_SA_DESCRIPTION=0x3,I_SA_USERNAME=0x4,I_SA_MARKET=0x5,DELAY_CLICK=0x32,g_projectName=_0x5be825(0x17d);void document['addEventListener'](_0x5be825(0x187),ProcessKeyEvent);function ProcessKeyEvent(_0x1e0927){const _0x13b631=_0x5be825,_0x3b8ea0=window[_0x13b631(0x185)]['href']['match'](/\d+$/gi);if(!Boolean(_0x3b8ea0))return;if(_0x3b8ea0[0x0]!==g_projectName)return;if(_0x1e0927[_0x13b631(0x17b)]||_0x1e0927[_0x13b631(0x183)]||_0x1e0927[_0x13b631(0x186)]||_0x1e0927['metaKey'])return;switch(_0x1e0927[_0x13b631(0x172)]){case _0x13b631(0x18e):ClickResolution(I_SA_SKIP,!![]),ClickSubmit();break;case _0x13b631(0x17a):ClickResolution(I_SA_PHOTO,!![]),ClickSubmit();break;case _0x13b631(0x173):ClickResolution(I_SA_HEADER,!![]),ClickSubmit();break;case _0x13b631(0x18b):ClickResolution(I_SA_DESCRIPTION,!![]),ClickSubmit();break;case'KeyG':ClickResolution(I_SA_USERNAME,!![]),ClickSubmit();break;case _0x13b631(0x18a):ClickResolution(I_SA_MARKET,!![]),ClickSubmit();break;case _0x13b631(0x17c):ClickResolution(I_SA_SKIP,!![]),ClickSubmit();break;case'Digit2':ClickResolution(I_SA_PHOTO);break;case _0x13b631(0x176):ClickResolution(I_SA_HEADER);break;case _0x13b631(0x181):ClickResolution(I_SA_DESCRIPTION);break;case _0x13b631(0x184):ClickResolution(I_SA_USERNAME);break;case _0x13b631(0x188):ClickResolution(I_SA_MARKET);break;case _0x13b631(0x174):ClickSubmit();break;}}function WaitTimeout(_0x280e2e){return new Promise(_0x2a8765=>setTimeout(_0x2a8765,_0x280e2e));}async function ClickSubmit(_0x556ada=DELAY_CLICK){const _0x97fc82=_0x5be825;await WaitTimeout(_0x556ada);const _0x10155a=document[_0x97fc82(0x16f)]('div.answer.checked');if(_0x10155a['length']>0x0)document[_0x97fc82(0x16e)](_0x97fc82(0x17e))['click']();else console[_0x97fc82(0x189)]('Резолюции\x20не\x20были\x20установлены');}function _0x3d01(){const _0x159de7=['677','button.el-button--primary:nth-child(1)','102oEjKYo','6FnohnL','Digit4','96114XkZoia','altKey','Digit5','location','shiftKey','keyup','Digit6','error','KeyH','KeyF','classList','400ulBbXo','KeyA','3791320kfdFDv','967784eTJimF','div.answer','22694CriuXr','querySelector','querySelectorAll','1704195wQOKlW','Ошибка\x20с\x20получением\x20элементов\x20резолюций','code','KeyD','NumpadEnter','3613vztPpf','Digit3','length','24810CEfOsM','click','KeyS','ctrlKey','Digit1'];_0x3d01=function(){return _0x159de7;};return _0x3d01();}async function ClickResolution(_0x92a78,_0xecaa3c=![]){const _0x7c9576=_0x5be825,_0x2132fd=document[_0x7c9576(0x16f)](_0x7c9576(0x16c));let _0x16c8d3=_0x2132fd[_0x7c9576(0x177)];if(_0x16c8d3!=0x6){console[_0x7c9576(0x189)](_0x7c9576(0x171));return;}if(_0xecaa3c)while(_0x16c8d3--){_0x16c8d3!=_0x92a78&&_0x2132fd[_0x16c8d3][_0x7c9576(0x18c)][_0x7c9576(0x177)]==0x2&&_0x2132fd[_0x16c8d3][_0x7c9576(0x179)]();}else _0x92a78!=I_SA_SKIP&&_0x2132fd[I_SA_SKIP][_0x7c9576(0x18c)][_0x7c9576(0x177)]==0x2&&(_0x2132fd[I_SA_SKIP][_0x7c9576(0x179)](),await WaitTimeout(DELAY_CLICK));const _0x2d8e21=_0x2132fd[_0x92a78];if(_0xecaa3c){if(_0x2d8e21['classList'][_0x7c9576(0x177)]!=0x2)_0x2d8e21[_0x7c9576(0x179)]();}else _0x2d8e21[_0x7c9576(0x179)]();await WaitTimeout(DELAY_CLICK);}
