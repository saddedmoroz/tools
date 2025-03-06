// ==UserScript==
// @name			DSC: хоткеи настраиваемые
// @version			1.3
// @description		05-03-2025
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-tune-hotkeys/dsc-tune-hotkeys.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-tune-hotkeys/dsc-tune-hotkeys.js
// @author			saddedmoroz
// @match			https://centiman.avito.ru/service-dataset-collector-frontend/*
// ==/UserScript==

// tab size: 4

'use strict';

/*
	-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	ВНИМАНИЕ! ПРИ ВКЛЮЧЕННОМ АВТООБНОВЛЕНИИ СКРИПТА ВСЕ НАСТРОЙКИ БУДУТ ПЕРЕЗАПИСАНЫ
	Либо отключи автообновление в настройках расширения, либо удали 2 строки выше,
	где есть @updateURL и @downloadURL и только потом вноси свои правки.
	-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	Клавиши для резолюций.
	Клавиши можно задать свои, а ненужные удалить/закомментировать.
	В каком порядке указаны индексы (index) в списке не имеет значения.

	code: 'Digit1' - название других клавиш смотреть в блоке 'e.code' здесь: https://keyjs.dev/
	send: true - после нажатия на резолюцию будет нажата кнопка Готово.
	send: false - резолюция будет выбрана/снята, кнопка Готово нажиматься не будет.
	index: 1 - индекс резолюции, начинается всегда с 1.

	Примеры:
	Клавиша J и цифра 5 на нумпаде будут по разному работать с 5 резолюцией по списку в проекте.
	Но при нажатии J резолюция не будет отправлена, а при нажатии цифры 5 на нумпаде - сразу отправлена.
		{ code: 'KeyJ', index: 5, send: false },
		{ code: 'Numpad5', index: 5, send: true },
	Порядок расположения индексов не имеет значения. Цифра 8 выделит/снимет 2 резолюцию, а цифра 9 - 1 резолюцию.
		{ code: 'Digit8', index: 2, send: false },
		{ code: 'Digit9', index: 1, send: false },
	Можно дублировать действия с одной резолюцией как угодно.
	В этом примере 3 разные клавиши делают одно и то же действие с 4 резолюцией.
		{ code: 'Digit3', index: 4, send: false },
		{ code: 'KeyU', index: 4, send: false },
		{ code: 'Numpad8', index: 4, send: false },
*/
const gKeyRes = [
	{ code: 'Digit1', index: 1, send: false }, // при нажатии на цифру 1 (не нумпад) будет выбрана/снята первая резолюция, без отправки
	{ code: 'Digit2', index: 2, send: false }, // вторая резолюция в списке, без отправки
	{ code: 'Digit3', index: 3, send: false },
	{ code: 'Digit4', index: 4, send: false },
	{ code: 'Digit5', index: 5, send: false },
	{ code: 'Digit6', index: 6, send: false },
];

/*
	Клавиши для отправки резолюций (Готово).
	Клавиши можно задать свои, а ненужные удалить/закомментировать.
	Название других клавиш смотреть в блоке 'e.code' здесь: https://keyjs.dev/
*/
const gKeySubmit = [
	'Space',
	'NumpadEnter',
];

const	DELAY_CLICK = 50, // задержка в мс перед вызовом клика по элементу. Менее 50 не рекомендую
		KEY_COOLDOWN = 800; // таймаут обработки зажатой клавиши, значение в мс. Менее 800 не рекомендую

/*
	Задать для каких проектов данный скрипт разрешен/запрещен.
	Примеры:
	Разрешить только для 677, запретить для 2066 и 755. Другие проекты будут игнорироваться.
		gPrjAllow = ['677'],
		gPrjPermit = ['2066', '755'];
	Разрешить для всех проектов, кроме 755.
		gPrjAllow = [],
		gPrjPermit = ['755'];
	Разрешить только для 677 и 1013. Другие проекты будут игнорироваться.
		gPrjAllow = ['677', '1013'],
		gPrjPermit = [];
	Разрешить для всех проектов.
		gPrjAllow = [],
		gPrjPermit = [];
*/
const	gPrjAllow = [], // если пусто - разрешено везде
		gPrjPermit = []; // если пусто - без запретов

// Здесь вся настройка заканчивается
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const _0x15ddb5=_0x13bf;(function(_0x50b351,_0x3bed0b){const _0x1ec544=_0x13bf,_0x328b6d=_0x50b351();while(!![]){try{const _0x5c6d7e=parseInt(_0x1ec544(0xd1))/0x1+parseInt(_0x1ec544(0xcc))/0x2*(parseInt(_0x1ec544(0xc8))/0x3)+parseInt(_0x1ec544(0xdb))/0x4+-parseInt(_0x1ec544(0xe6))/0x5*(-parseInt(_0x1ec544(0xe1))/0x6)+-parseInt(_0x1ec544(0xd8))/0x7*(-parseInt(_0x1ec544(0xcf))/0x8)+parseInt(_0x1ec544(0xe4))/0x9*(-parseInt(_0x1ec544(0xde))/0xa)+-parseInt(_0x1ec544(0xdc))/0xb;if(_0x5c6d7e===_0x3bed0b)break;else _0x328b6d['push'](_0x328b6d['shift']());}catch(_0x27d2f0){_0x328b6d['push'](_0x328b6d['shift']());}}}(_0x2bc3,0xc8a42));function _0x2bc3(){const _0x2ea965=['length','6436908xMreDq','13623665KAMmVl','button.el-button--primary:nth-child(1)','370LTqDzS','ClickResolution:\x20','send','66774RMDATb','indexOf','warn','164115sSaXfY','click','200YcsqDi','div.answer','href','3VNAUlc','match','location','querySelector','985754ZEUgPf','message','metaKey','16ZfKBbk','addEventListener','91698sfTpVk','now','ClickSubmit:\x20','querySelectorAll','shiftKey','ctrlKey','index','336259HvmUrA','code'];_0x2bc3=function(){return _0x2ea965;};return _0x2bc3();}let gDT=Date[_0x15ddb5(0xd2)](),gDTNow;const gKeySubmitLen=gKeySubmit['length'],gKeyResLen=gKeyRes['length'],gPrjAllowLen=gPrjAllow['length'],gPrjPermitLen=gPrjPermit[_0x15ddb5(0xda)];document[_0x15ddb5(0xd0)]('keydown',ProcessKeyEvent);function ProcessKeyEvent(_0x2c0f75){const _0x25bb04=_0x15ddb5;gDTNow=Date[_0x25bb04(0xd2)]()+Math['random']()*0x64;if(gDTNow-gDT<KEY_COOLDOWN)return;gDT=gDTNow;let _0x1bedda=window[_0x25bb04(0xca)][_0x25bb04(0xc7)][_0x25bb04(0xc9)](/\d+$/);if(!Boolean(_0x1bedda))return;_0x1bedda=_0x1bedda[0x0];let _0xc81b83=gPrjPermitLen;while(_0xc81b83--){if(_0x1bedda==gPrjPermit[_0xc81b83])return;}_0xc81b83=gPrjAllowLen;if(_0xc81b83){let _0x41a50c=!![];while(_0xc81b83--){if(_0x1bedda==gPrjAllow[_0xc81b83]){_0x41a50c=![];break;}}if(_0x41a50c)return;}if(_0x2c0f75[_0x25bb04(0xd6)]||_0x2c0f75['altKey']||_0x2c0f75[_0x25bb04(0xd5)]||_0x2c0f75[_0x25bb04(0xce)])return;let _0x49ca31;_0xc81b83=gKeyResLen;while(_0xc81b83--){_0x49ca31=gKeyRes[_0xc81b83];if(_0x2c0f75[_0x25bb04(0xd9)][_0x25bb04(0xe2)](_0x49ca31[_0x25bb04(0xd9)])>=0x0){ClickResolution(_0x49ca31[_0x25bb04(0xd7)]-0x1);if(_0x49ca31[_0x25bb04(0xe0)])ClickSubmit();return;}}_0xc81b83=gKeySubmitLen;while(_0xc81b83--){if(_0x2c0f75[_0x25bb04(0xd9)][_0x25bb04(0xe2)](gKeySubmit[_0xc81b83])>=0x0){ClickSubmit();return;}}}function WaitTimeout(_0x2ba6be){return new Promise(_0x14b445=>setTimeout(_0x14b445,_0x2ba6be));}function _0x13bf(_0x4ad740,_0x4afcda){const _0x2bc3cd=_0x2bc3();return _0x13bf=function(_0x13bfb4,_0x5aee00){_0x13bfb4=_0x13bfb4-0xc7;let _0x2a9cb1=_0x2bc3cd[_0x13bfb4];return _0x2a9cb1;},_0x13bf(_0x4ad740,_0x4afcda);}async function ClickSubmit(_0x59588f=DELAY_CLICK){const _0x247050=_0x15ddb5;await WaitTimeout(_0x59588f);try{const _0x5bfbb9=document[_0x247050(0xd4)]('div.answer.checked');if(_0x5bfbb9[_0x247050(0xda)]>0x0)document[_0x247050(0xcb)](_0x247050(0xdd))[_0x247050(0xe5)]();else throw new Error('резолюции\x20не\x20были\x20установлены');}catch(_0x531af4){console[_0x247050(0xe3)](_0x247050(0xd3)+_0x531af4[_0x247050(0xcd)]);}}function ClickResolution(_0x3f95d7){const _0x35005f=_0x15ddb5;try{const _0x2617a6=document[_0x35005f(0xd4)](_0x35005f(0xe7));_0x2617a6[_0x3f95d7][_0x35005f(0xe5)]();}catch(_0x59206d){console['warn'](_0x35005f(0xdf)+_0x59206d[_0x35005f(0xcd)]);}}
