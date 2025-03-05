// ==UserScript==
// @name			DSC: 677 хоткеи (v3)
// @version			1.3.1
// @description		05-03-2025
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-677-hotkeys/dsc-hotkeys-mod-v3.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-677-hotkeys/dsc-hotkeys-mod-v3.js
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

const _0x30aeb3=_0x46aa;function _0x5ecf(){const _0x3568b5=['textContent','addEventListener','Digit4','Увод\x20в\x20объявлении','metaKey','KeyD','href','Контакты\x20в\x20описании','click','KeyF','677','1354470FzZzXJ','Резолюции\x20не\x20были\x20установлены','classList','856665WYwifH','Контакты\x20на\x20фото','591395VxFxiN','keyup','error','Digit3','KeyA','499608HdavDC','match','ctrlKey','19088HThEtv','6264dIFQDV','Контакты\x20в\x20названии','length','Digit6','querySelectorAll','30VdqNqZ','shiftKey','KeyS','Digit5','div.answer.checked','NumpadEnter','altKey','Контакты\x20в\x20имени\x20УЗ','Названия\x20резолюций\x20не\x20соотвествуют\x20ожидаемым','querySelector','1995UwIVHg','KeyG','location','Digit1','3Wciaga','Ошибка\x20с\x20получением\x20элементов\x20резолюций','code','129354XRhZcS'];_0x5ecf=function(){return _0x3568b5;};return _0x5ecf();}(function(_0x4615c3,_0x2c116b){const _0x23f944=_0x46aa,_0x408b55=_0x4615c3();while(!![]){try{const _0x5c6904=parseInt(_0x23f944(0xc0))/0x1+-parseInt(_0x23f944(0xa7))/0x2*(-parseInt(_0x23f944(0xa4))/0x3)+parseInt(_0x23f944(0xbd))/0x4+parseInt(_0x23f944(0xb8))/0x5+-parseInt(_0x23f944(0xb3))/0x6+parseInt(_0x23f944(0xd0))/0x7*(-parseInt(_0x23f944(0xc1))/0x8)+-parseInt(_0x23f944(0xb6))/0x9*(-parseInt(_0x23f944(0xc6))/0xa);if(_0x5c6904===_0x2c116b)break;else _0x408b55['push'](_0x408b55['shift']());}catch(_0x4c5538){_0x408b55['push'](_0x408b55['shift']());}}}(_0x5ecf,0x27f11));const I_SA_SKIP=0x0,I_SA_PHOTO=0x1,I_SA_HEADER=0x2,I_SA_DESCRIPTION=0x3,I_SA_USERNAME=0x4,I_SA_MARKET=0x5,g_resolutions=['Пропустить',_0x30aeb3(0xb7),_0x30aeb3(0xc2),_0x30aeb3(0xaf),_0x30aeb3(0xcd),_0x30aeb3(0xab)],DELAY_CLICK=0x32,g_projectName=_0x30aeb3(0xb2);document[_0x30aeb3(0xa9)](_0x30aeb3(0xb9),ProcessKeyEvent);function _0x46aa(_0x32004e,_0x4e74d5){const _0x5ecf42=_0x5ecf();return _0x46aa=function(_0x46aaed,_0x3b3244){_0x46aaed=_0x46aaed-0xa1;let _0x3ed142=_0x5ecf42[_0x46aaed];return _0x3ed142;},_0x46aa(_0x32004e,_0x4e74d5);}function ProcessKeyEvent(_0x403954){const _0x1d51e0=_0x30aeb3,_0x3a5e21=window[_0x1d51e0(0xa2)][_0x1d51e0(0xae)][_0x1d51e0(0xbe)](/\d+$/gi);if(!Boolean(_0x3a5e21))return;if(_0x3a5e21[0x0]!==g_projectName)return;if(_0x403954[_0x1d51e0(0xbf)]||_0x403954[_0x1d51e0(0xcc)]||_0x403954[_0x1d51e0(0xc7)]||_0x403954[_0x1d51e0(0xac)])return;switch(_0x403954[_0x1d51e0(0xa6)]){case _0x1d51e0(0xbc):ClickResolution(I_SA_SKIP,!![]),ClickSubmit();break;case _0x1d51e0(0xc8):ClickResolution(I_SA_PHOTO,!![]),ClickSubmit();break;case _0x1d51e0(0xad):ClickResolution(I_SA_HEADER,!![]),ClickSubmit();break;case _0x1d51e0(0xb1):ClickResolution(I_SA_DESCRIPTION,!![]),ClickSubmit();break;case _0x1d51e0(0xa1):ClickResolution(I_SA_USERNAME,!![]),ClickSubmit();break;case'KeyH':ClickResolution(I_SA_MARKET,!![]),ClickSubmit();break;case _0x1d51e0(0xa3):ClickResolution(I_SA_SKIP,!![]),ClickSubmit();break;case'Digit2':ClickResolution(I_SA_PHOTO);break;case _0x1d51e0(0xbb):ClickResolution(I_SA_HEADER);break;case _0x1d51e0(0xaa):ClickResolution(I_SA_DESCRIPTION);break;case _0x1d51e0(0xc9):ClickResolution(I_SA_USERNAME);break;case _0x1d51e0(0xc4):ClickResolution(I_SA_MARKET);break;case _0x1d51e0(0xcb):ClickSubmit();break;}}function WaitTimeout(_0x480d80){return new Promise(_0x511469=>setTimeout(_0x511469,_0x480d80));}async function ClickSubmit(_0x2f41d2=DELAY_CLICK){const _0x22c228=_0x30aeb3;await WaitTimeout(_0x2f41d2);const _0x328e87=document[_0x22c228(0xc5)](_0x22c228(0xca));if(_0x328e87['length']>0x0)document[_0x22c228(0xcf)]('button.el-button--primary:nth-child(1)')[_0x22c228(0xb0)]();else console['error'](_0x22c228(0xb4));}async function ClickResolution(_0x293b3d,_0x3cddb5=![]){const _0x3155cc=_0x30aeb3,_0x4de82e=document[_0x3155cc(0xc5)]('div.answer');let _0x4c2db1=_0x4de82e[_0x3155cc(0xc3)];if(_0x4c2db1!=0x6){console[_0x3155cc(0xba)](_0x3155cc(0xa5));return;}while(_0x4c2db1--){if(_0x4de82e[_0x4c2db1][_0x3155cc(0xa8)]!=g_resolutions[_0x4c2db1]){console[_0x3155cc(0xba)](_0x3155cc(0xce));return;}}_0x4c2db1=_0x4de82e[_0x3155cc(0xc3)];if(_0x3cddb5)while(_0x4c2db1--){_0x4c2db1!=_0x293b3d&&_0x4de82e[_0x4c2db1]['classList'][_0x3155cc(0xc3)]==0x2&&_0x4de82e[_0x4c2db1][_0x3155cc(0xb0)]();}else _0x293b3d!=I_SA_SKIP&&_0x4de82e[I_SA_SKIP][_0x3155cc(0xb5)][_0x3155cc(0xc3)]==0x2&&(_0x4de82e[I_SA_SKIP][_0x3155cc(0xb0)](),await WaitTimeout(DELAY_CLICK));const _0x35f041=_0x4de82e[_0x293b3d];if(_0x3cddb5){if(_0x35f041['classList']['length']!=0x2)_0x35f041[_0x3155cc(0xb0)]();}else _0x35f041['click']();await WaitTimeout(DELAY_CLICK);}
