// ==UserScript==
// @name			DSC: 677 хоткеи (v2)
// @version			1.3.1
// @description		05-03-2025
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-677-hotkeys/dsc-hotkeys-mod-v2.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-677-hotkeys/dsc-hotkeys-mod-v2.js
// @author			saddedmoroz
// @match			https://centiman.avito.ru/service-dataset-collector-frontend/*
// ==/UserScript==

/*
	Все цифровые кнопки сразу отправляют одну указанную резолюцию, даже если (случайно) выбраны другие
	1 пропуск
	2 фото
	3 описание
	4 увод

	Пробел нажимает Готово (отправляет резолюцию если она была выставлена)

	Кнопки A, S, D, F, G, H выставляют резолюцию без отправки
	A пропуск
	S фото
	D описание
	F увод
	G заголовок
	H имя уз
*/

'use strict';

const _0x1b78f6=_0x4678;(function(_0x3ad22a,_0x30f3ec){const _0x534a2f=_0x4678,_0xa51a5f=_0x3ad22a();while(!![]){try{const _0x3e54d7=-parseInt(_0x534a2f(0xe6))/0x1+-parseInt(_0x534a2f(0xe5))/0x2+-parseInt(_0x534a2f(0xfd))/0x3+parseInt(_0x534a2f(0xeb))/0x4*(parseInt(_0x534a2f(0xfa))/0x5)+-parseInt(_0x534a2f(0xdd))/0x6+parseInt(_0x534a2f(0xfc))/0x7*(-parseInt(_0x534a2f(0xf8))/0x8)+parseInt(_0x534a2f(0xf0))/0x9*(parseInt(_0x534a2f(0xdc))/0xa);if(_0x3e54d7===_0x30f3ec)break;else _0xa51a5f['push'](_0xa51a5f['shift']());}catch(_0x143aa2){_0xa51a5f['push'](_0xa51a5f['shift']());}}}(_0x542d,0xdb759));const I_SA_SKIP=0x0,I_SA_PHOTO=0x1,I_SA_HEADER=0x2,I_SA_DESCRIPTION=0x3,I_SA_USERNAME=0x4,I_SA_MARKET=0x5,g_resolutions=[_0x1b78f6(0xee),_0x1b78f6(0xdb),_0x1b78f6(0xfe),'Контакты\x20в\x20описании',_0x1b78f6(0xf6),_0x1b78f6(0xfb)],DELAY_CLICK=0x32,g_projectName=_0x1b78f6(0xea);document[_0x1b78f6(0xdf)](_0x1b78f6(0xe7),ProcessKeyEvent);function ProcessKeyEvent(_0x3534e8){const _0x3b578d=_0x1b78f6,_0xc41447=window['location'][_0x3b578d(0xf4)]['match'](/\d+$/gi);if(!Boolean(_0xc41447))return;if(_0xc41447[0x0]!==g_projectName)return;if(_0x3534e8['ctrlKey']||_0x3534e8[_0x3b578d(0xec)]||_0x3534e8['shiftKey']||_0x3534e8[_0x3b578d(0xf3)])return;switch(_0x3534e8['code']){case _0x3b578d(0xf9):ClickResolution(I_SA_SKIP,!![]),ClickSubmit();break;case _0x3b578d(0xda):ClickResolution(I_SA_PHOTO,!![]),ClickSubmit();break;case _0x3b578d(0xf5):ClickResolution(I_SA_DESCRIPTION,!![]),ClickSubmit();break;case _0x3b578d(0xed):ClickResolution(I_SA_MARKET,!![]),ClickSubmit();break;case'KeyA':ClickResolution(I_SA_SKIP,!![]);break;case'KeyS':ClickResolution(I_SA_PHOTO);break;case'KeyD':ClickResolution(I_SA_DESCRIPTION);break;case _0x3b578d(0xe9):ClickResolution(I_SA_MARKET);break;case _0x3b578d(0xff):ClickResolution(I_SA_HEADER);break;case'KeyH':ClickResolution(I_SA_USERNAME);break;case _0x3b578d(0xde):ClickSubmit();break;}}function WaitTimeout(_0x21f00e){return new Promise(_0x389b6d=>setTimeout(_0x389b6d,_0x21f00e));}async function ClickSubmit(_0x493af7=DELAY_CLICK){const _0x571e7d=_0x1b78f6;await WaitTimeout(_0x493af7);const _0x399d3a=document['querySelectorAll'](_0x571e7d(0xe1));if(_0x399d3a[_0x571e7d(0xe3)]>0x0)document[_0x571e7d(0xf2)](_0x571e7d(0xef))[_0x571e7d(0xe2)]();else console[_0x571e7d(0xe0)](_0x571e7d(0xe8));}function _0x4678(_0xfa773c,_0x257ef7){const _0x542d89=_0x542d();return _0x4678=function(_0x4678ad,_0x3b090d){_0x4678ad=_0x4678ad-0xda;let _0x5552ef=_0x542d89[_0x4678ad];return _0x5552ef;},_0x4678(_0xfa773c,_0x257ef7);}async function ClickResolution(_0x3a640c,_0x54b73e=![]){const _0x491fe5=_0x1b78f6,_0x2fe24f=document[_0x491fe5(0xf7)](_0x491fe5(0xe4));let _0x36e29a=_0x2fe24f[_0x491fe5(0xe3)];if(_0x36e29a!=0x6){console[_0x491fe5(0xe0)](_0x491fe5(0x100));return;}while(_0x36e29a--){if(_0x2fe24f[_0x36e29a]['textContent']!=g_resolutions[_0x36e29a]){console[_0x491fe5(0xe0)]('Названия\x20резолюций\x20не\x20соотвествуют\x20ожидаемым');return;}}_0x36e29a=_0x2fe24f[_0x491fe5(0xe3)];if(_0x54b73e)while(_0x36e29a--){_0x36e29a!=_0x3a640c&&_0x2fe24f[_0x36e29a]['classList'][_0x491fe5(0xe3)]==0x2&&_0x2fe24f[_0x36e29a]['click']();}else _0x3a640c!=I_SA_SKIP&&_0x2fe24f[I_SA_SKIP][_0x491fe5(0xf1)]['length']==0x2&&(_0x2fe24f[I_SA_SKIP][_0x491fe5(0xe2)](),await WaitTimeout(DELAY_CLICK));const _0x14ceaa=_0x2fe24f[_0x3a640c];if(_0x54b73e){if(_0x14ceaa[_0x491fe5(0xf1)][_0x491fe5(0xe3)]!=0x2)_0x14ceaa[_0x491fe5(0xe2)]();}else _0x14ceaa[_0x491fe5(0xe2)]();await WaitTimeout(DELAY_CLICK);}function _0x542d(){const _0x15a642=['metaKey','href','Digit3','Контакты\x20в\x20имени\x20УЗ','querySelectorAll','56FUCLme','Digit1','10dLgrjs','Увод\x20в\x20объявлении','615545VFotaH','211254Mtxnro','Контакты\x20в\x20названии','KeyG','Ошибка\x20с\x20получением\x20элементов\x20резолюций','Digit2','Контакты\x20на\x20фото','20JAHwrI','5150706YadkSj','Space','addEventListener','error','div.answer.checked','click','length','div.answer','2293952QSykQx','130945lzKRaV','keyup','Резолюции\x20не\x20были\x20установлены','KeyF','677','2832124icqUoW','altKey','Digit4','Пропустить','button.el-button--primary:nth-child(1)','10373301FqyfGI','classList','querySelector'];_0x542d=function(){return _0x15a642;};return _0x542d();}
