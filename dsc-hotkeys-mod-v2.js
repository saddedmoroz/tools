// ==UserScript==
// @name			DSC: 677 хоткеи (v2)
// @version			1.1
// @description		Модификация горячих клавиш (клавиши отличаются от публичной версии)
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/master/dsc-hotkeys-mod-v2.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/master/dsc-hotkeys-mod-v2.js
// @author			saddedmoroz
// @match			https://centiman.avito.ru/service-dataset-collector-frontend/*
// ==/UserScript==

/*
	Выбор резолюции и нажатие на Готово:
	1 - пропуск
	2 - фото
	3 - описание
	4 - увод

	Только выбор резолюции:
	A - пропуск
	S - фото
	D - описание
	F - увод
	G - название
	H - имя уз
	
	Пробел (Space) - нажатие Готово (отправка резолюций)
*/

'use strict';

function _0x51a5(_0x51567c,_0x1aa7b8){const _0x27147e=_0x2714();return _0x51a5=function(_0x51a519,_0x5e54ed){_0x51a519=_0x51a519-0xa9;let _0x1fdb23=_0x27147e[_0x51a519];return _0x1fdb23;},_0x51a5(_0x51567c,_0x1aa7b8);}const _0x55af7e=_0x51a5;function _0x2714(){const _0x325ac1=['keyup','5BNbhRy','904qUWtGQ','KeyH','code','Digit4','KeyD','Digit2','4606428OGtubR','Резолюции\x20не\x20были\x20установлены','Digit1','10912wXhorX','querySelectorAll','111cGrCud','href','addEventListener','error','div.answer','60498NNCehQ','KeyG','altKey','7671678AcrXXJ','length','3058551TxCXPg','div.answer.checked','location','677','classList','ctrlKey','metaKey','2325480KqkIjO','click','KeyS','Digit3','16612oCBQng','10190iJvSeg'];_0x2714=function(){return _0x325ac1;};return _0x2714();}(function(_0x3d426d,_0x2aca3d){const _0x2568a1=_0x51a5,_0xa016e0=_0x3d426d();while(!![]){try{const _0x5bf071=-parseInt(_0x2568a1(0xb8))/0x1*(-parseInt(_0x2568a1(0xa9))/0x2)+-parseInt(_0x2568a1(0xc2))/0x3+parseInt(_0x2568a1(0xc9))/0x4+-parseInt(_0x2568a1(0xac))/0x5*(parseInt(_0x2568a1(0xb3))/0x6)+parseInt(_0x2568a1(0xc0))/0x7+-parseInt(_0x2568a1(0xad))/0x8*(-parseInt(_0x2568a1(0xbd))/0x9)+-parseInt(_0x2568a1(0xaa))/0xa*(parseInt(_0x2568a1(0xb6))/0xb);if(_0x5bf071===_0x2aca3d)break;else _0xa016e0['push'](_0xa016e0['shift']());}catch(_0x545eba){_0xa016e0['push'](_0xa016e0['shift']());}}}(_0x2714,0x88e85));const I_SA_SKIP=0x0,I_SA_PHOTO=0x1,I_SA_HEADER=0x2,I_SA_DESCRIPTION=0x3,I_SA_USERNAME=0x4,I_SA_MARKET=0x5,DELAY_CLICK=0x32,g_projectName=_0x55af7e(0xc5);void document[_0x55af7e(0xba)](_0x55af7e(0xab),ProcessKeyEvent);function ProcessKeyEvent(_0x1f369e){const _0x1f425c=_0x55af7e,_0xfd2d1f=window[_0x1f425c(0xc4)][_0x1f425c(0xb9)]['match'](/\d+$/gi);if(!Boolean(_0xfd2d1f))return;if(_0xfd2d1f[0x0]!==g_projectName)return;if(_0x1f369e[_0x1f425c(0xc7)]||_0x1f369e[_0x1f425c(0xbf)]||_0x1f369e['shiftKey']||_0x1f369e[_0x1f425c(0xc8)])return;switch(_0x1f369e[_0x1f425c(0xaf)]){case _0x1f425c(0xb5):ClickResolution(I_SA_SKIP),ClickSubmit();break;case _0x1f425c(0xb2):ClickResolution(I_SA_PHOTO),ClickSubmit();break;case _0x1f425c(0xcc):ClickResolution(I_SA_DESCRIPTION),ClickSubmit();break;case _0x1f425c(0xb0):ClickResolution(I_SA_MARKET),ClickSubmit();break;case'KeyA':ClickResolution(I_SA_SKIP);break;case _0x1f425c(0xcb):ClickResolution(I_SA_PHOTO);break;case _0x1f425c(0xb1):ClickResolution(I_SA_DESCRIPTION);break;case'KeyF':ClickResolution(I_SA_MARKET);break;case _0x1f425c(0xbe):ClickResolution(I_SA_HEADER);break;case _0x1f425c(0xae):ClickResolution(I_SA_USERNAME);break;case'Space':ClickSubmit();break;}}function WaitTimeout(_0x56c217){return new Promise(_0x2979e9=>setTimeout(_0x2979e9,_0x56c217));}async function ClickSubmit(_0x19ecb7=DELAY_CLICK){const _0x2287b3=_0x55af7e;await WaitTimeout(_0x19ecb7);const _0x9f6f6a=document[_0x2287b3(0xb7)](_0x2287b3(0xc3));if(_0x9f6f6a[_0x2287b3(0xc1)]>0x0)document['querySelector']('button.el-button--primary:nth-child(1)')[_0x2287b3(0xca)]();else console[_0x2287b3(0xbb)](_0x2287b3(0xb4));}async function ClickResolution(_0x31834c){const _0x95a6cf=_0x55af7e,_0x5033aa=document[_0x95a6cf(0xb7)](_0x95a6cf(0xbc));let _0x4221c7=_0x5033aa[_0x95a6cf(0xc1)];if(_0x4221c7!=0x6){console['error']('Ошибка\x20с\x20получением\x20элементов\x20резолюций');return;}if(_0x31834c==I_SA_SKIP)while(_0x4221c7--){_0x4221c7!=I_SA_SKIP&&_0x5033aa[_0x4221c7][_0x95a6cf(0xc6)][_0x95a6cf(0xc1)]==0x2&&(_0x5033aa[_0x4221c7][_0x95a6cf(0xca)](),await WaitTimeout(DELAY_CLICK));}else _0x5033aa[I_SA_SKIP][_0x95a6cf(0xc6)][_0x95a6cf(0xc1)]==0x2&&(_0x5033aa[I_SA_SKIP][_0x95a6cf(0xca)](),await WaitTimeout(DELAY_CLICK));_0x5033aa[_0x31834c][_0x95a6cf(0xca)](),await WaitTimeout(DELAY_CLICK);}
