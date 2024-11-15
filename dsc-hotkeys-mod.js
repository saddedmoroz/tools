// ==UserScript==
// @name			DSC: 677 хоткеи
// @version			1.1
// @description		Модификация горячих клавиш
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/master/dsc-hotkeys-mod.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/master/dsc-hotkeys-mod.js
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

	Пробел нажимает Готово (отправляет резолюцию если она была выставлена)

	Все буквенные кнопки сразу отправляют резолюцию
	A пропустить (сразу отправляет)
	S фото
	D заголовок
	F описание
	G имя УЗ
	H увод
*/

'use strict';

const _0x5de5ab=_0x5f18;(function(_0x2caf84,_0x2bf5aa){const _0x578456=_0x5f18,_0x4d5cfa=_0x2caf84();while(!![]){try{const _0x543e5f=-parseInt(_0x578456(0x1d8))/0x1*(parseInt(_0x578456(0x1d9))/0x2)+-parseInt(_0x578456(0x1df))/0x3*(-parseInt(_0x578456(0x1e1))/0x4)+parseInt(_0x578456(0x1e8))/0x5*(-parseInt(_0x578456(0x1ca))/0x6)+parseInt(_0x578456(0x1c8))/0x7+parseInt(_0x578456(0x1d4))/0x8+parseInt(_0x578456(0x1d6))/0x9*(parseInt(_0x578456(0x1dc))/0xa)+-parseInt(_0x578456(0x1d1))/0xb*(parseInt(_0x578456(0x1c9))/0xc);if(_0x543e5f===_0x2bf5aa)break;else _0x4d5cfa['push'](_0x4d5cfa['shift']());}catch(_0x3d0466){_0x4d5cfa['push'](_0x4d5cfa['shift']());}}}(_0xbadc,0x33605));function _0xbadc(){const _0x3c09f8=['shiftKey','keyup','1107414KTloOK','Space','KeyG','2910624IhDZtS','length','9kwRRtZ','href','2GXKvSx','73534wwsMkP','code','div.answer.checked','357310SstQcA','metaKey','div.answer','3VwNkeK','Digit3','1303292XDFLFl','Digit6','Digit2','location','match','Digit1','querySelectorAll','1399885JZFSsK','error','Digit4','KeyD','querySelector','KeyA','click','279398WexOoL','24DUmuVT','6oCXcTW','KeyF','button.el-button--primary:nth-child(1)','Резолюции\x20не\x20были\x20установлены','classList'];_0xbadc=function(){return _0x3c09f8;};return _0xbadc();}const I_SA_SKIP=0x0,I_SA_PHOTO=0x1,I_SA_HEADER=0x2,I_SA_DESCRIPTION=0x3,I_SA_USERNAME=0x4,I_SA_MARKET=0x5,DELAY_CLICK=0x32,g_projectName='677';void document['addEventListener'](_0x5de5ab(0x1d0),ProcessKeyEvent);function ProcessKeyEvent(_0x2e016b){const _0x370ebd=_0x5de5ab,_0x6d9c95=window[_0x370ebd(0x1e4)][_0x370ebd(0x1d7)][_0x370ebd(0x1e5)](/\d+$/gi);if(!Boolean(_0x6d9c95))return;if(_0x6d9c95[0x0]!==g_projectName)return;if(_0x2e016b['ctrlKey']||_0x2e016b['altKey']||_0x2e016b[_0x370ebd(0x1cf)]||_0x2e016b[_0x370ebd(0x1dd)])return;switch(_0x2e016b[_0x370ebd(0x1da)]){case _0x370ebd(0x1c6):ClickResolution(I_SA_SKIP),ClickSubmit();break;case'KeyS':ClickResolution(I_SA_PHOTO),ClickSubmit();break;case _0x370ebd(0x1eb):ClickResolution(I_SA_HEADER),ClickSubmit();break;case _0x370ebd(0x1cb):ClickResolution(I_SA_DESCRIPTION),ClickSubmit();break;case _0x370ebd(0x1d3):ClickResolution(I_SA_USERNAME),ClickSubmit();break;case'KeyH':ClickResolution(I_SA_MARKET),ClickSubmit();break;case _0x370ebd(0x1e6):ClickResolution(I_SA_SKIP),ClickSubmit();break;case _0x370ebd(0x1e3):ClickResolution(I_SA_PHOTO);break;case _0x370ebd(0x1e0):ClickResolution(I_SA_HEADER);break;case _0x370ebd(0x1ea):ClickResolution(I_SA_DESCRIPTION);break;case'Digit5':ClickResolution(I_SA_USERNAME);break;case _0x370ebd(0x1e2):ClickResolution(I_SA_MARKET);break;case _0x370ebd(0x1d2):ClickSubmit();break;}}function _0x5f18(_0x332ac3,_0x27e30a){const _0xbadc3a=_0xbadc();return _0x5f18=function(_0x5f1868,_0x35fd93){_0x5f1868=_0x5f1868-0x1c6;let _0x25996b=_0xbadc3a[_0x5f1868];return _0x25996b;},_0x5f18(_0x332ac3,_0x27e30a);}function WaitTimeout(_0xc759c5){return new Promise(_0x1f4f2d=>setTimeout(_0x1f4f2d,_0xc759c5));}async function ClickSubmit(_0x439743=DELAY_CLICK){const _0x31e566=_0x5de5ab;await WaitTimeout(_0x439743);const _0x2eeca4=document[_0x31e566(0x1e7)](_0x31e566(0x1db));if(_0x2eeca4[_0x31e566(0x1d5)]>0x0)document[_0x31e566(0x1ec)](_0x31e566(0x1cc))['click']();else console['error'](_0x31e566(0x1cd));}async function ClickResolution(_0x5cdd54){const _0xc2b839=_0x5de5ab,_0x3969fd=document['querySelectorAll'](_0xc2b839(0x1de));let _0x170987=_0x3969fd[_0xc2b839(0x1d5)];if(_0x170987!=0x6){console[_0xc2b839(0x1e9)]('Ошибка\x20с\x20получением\x20элементов\x20резолюций');return;}if(_0x5cdd54==I_SA_SKIP)while(_0x170987--){_0x170987!=I_SA_SKIP&&_0x3969fd[_0x170987]['classList'][_0xc2b839(0x1d5)]==0x2&&(_0x3969fd[_0x170987]['click'](),await WaitTimeout(DELAY_CLICK));}else _0x3969fd[I_SA_SKIP][_0xc2b839(0x1ce)]['length']==0x2&&(_0x3969fd[I_SA_SKIP]['click'](),await WaitTimeout(DELAY_CLICK));_0x3969fd[_0x5cdd54][_0xc2b839(0x1c7)](),await WaitTimeout(DELAY_CLICK);}
