// ==UserScript==
// @name			DSC: хоткеи настраиваемые
// @version			1.4
// @description		06-03-2025
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-tune-hotkeys/dsc-tune-hotkeys.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-tune-hotkeys/dsc-tune-hotkeys.js
// @author			saddedmoroz
// @match			https://centiman.avito.ru/service-dataset-collector-frontend/*
// ==/UserScript==

// tab size: 4

'use strict';

/*
	-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	ВНИМАНИЕ! ВСЕ НАСТРОЙКИ СКРИПТА БУДУТ ПЕРЕЗАПИСАНЫ ПОСЛЕ ЕГО АВТООБНОВЛЕНИЯ
	Лучшее решение - скопировать сохранить себе все строки от начала скрипта до
	строки "Здесь вся настройка заканчивается" (см ниже)
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

// Здесь вся настройка заканчивается.
// Если нужно сохранить настройки - скопировать от начала скрипта до этой строки.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const _0x50b06f=_0xd8d7;(function(_0xe125a2,_0xcf9bb5){const _0x2be79b=_0xd8d7,_0x397b82=_0xe125a2();while(!![]){try{const _0x2dd744=-parseInt(_0x2be79b(0x16b))/0x1+parseInt(_0x2be79b(0x17f))/0x2*(-parseInt(_0x2be79b(0x175))/0x3)+parseInt(_0x2be79b(0x181))/0x4*(parseInt(_0x2be79b(0x16e))/0x5)+-parseInt(_0x2be79b(0x16f))/0x6+-parseInt(_0x2be79b(0x165))/0x7*(-parseInt(_0x2be79b(0x168))/0x8)+parseInt(_0x2be79b(0x179))/0x9*(parseInt(_0x2be79b(0x17e))/0xa)+-parseInt(_0x2be79b(0x183))/0xb*(parseInt(_0x2be79b(0x176))/0xc);if(_0x2dd744===_0xcf9bb5)break;else _0x397b82['push'](_0x397b82['shift']());}catch(_0x40afc7){_0x397b82['push'](_0x397b82['shift']());}}}(_0x27cc,0xddc69));let gDT=Date['now'](),gDTNow,gPreviousKey;const gKeySubmitLen=gKeySubmit[_0x50b06f(0x16d)],gKeyResLen=gKeyRes[_0x50b06f(0x16d)],gPrjAllowLen=gPrjAllow[_0x50b06f(0x16d)],gPrjPermitLen=gPrjPermit['length'];function _0xd8d7(_0x303d8f,_0x454850){const _0x27ccb2=_0x27cc();return _0xd8d7=function(_0xd8d79,_0x4f32e8){_0xd8d79=_0xd8d79-0x161;let _0x8e5b83=_0x27ccb2[_0xd8d79];return _0x8e5b83;},_0xd8d7(_0x303d8f,_0x454850);}function _0x27cc(){const _0x10aa0e=['38Hrzcvf','querySelector','1132808cyDXJp','send','44GtlWAW','href','code','altKey','ctrlKey','random','shiftKey','1326920FwfaDQ','резолюции\x20не\x20были\x20установлены','metaKey','32XNFQxg','button.el-button--primary:nth-child(1)','click','125486VHYfgp','div.answer','length','30IKRvqi','4485822BxjSzu','warn','index','keydown','location','div.answer.checked','28989VFjBZN','1772868OjAsuJ','addEventListener','ClickResolution:\x20','887553GHleJf','ClickSubmit:\x20','message','now','querySelectorAll','10mysCew'];_0x27cc=function(){return _0x10aa0e;};return _0x27cc();}document[_0x50b06f(0x177)](_0x50b06f(0x172),ProcessKeyEvent);function ProcessKeyEvent(_0x1d1d52){const _0x3a5fba=_0x50b06f;if(gPreviousKey==_0x1d1d52[_0x3a5fba(0x185)]){gDTNow=Date[_0x3a5fba(0x17c)]()+Math[_0x3a5fba(0x163)]()*0x64;if(gDTNow-gDT<KEY_COOLDOWN)return;gDT=gDTNow;}else gPreviousKey=_0x1d1d52[_0x3a5fba(0x185)];let _0x15a542=window[_0x3a5fba(0x173)][_0x3a5fba(0x184)]['match'](/\d+$/);if(!Boolean(_0x15a542))return;_0x15a542=_0x15a542[0x0];let _0x197438=gPrjPermitLen;while(_0x197438--){if(_0x15a542==gPrjPermit[_0x197438])return;}_0x197438=gPrjAllowLen;if(_0x197438){let _0x491b57=!![];while(_0x197438--){if(_0x15a542==gPrjAllow[_0x197438]){_0x491b57=![];break;}}if(_0x491b57)return;}if(_0x1d1d52[_0x3a5fba(0x162)]||_0x1d1d52[_0x3a5fba(0x161)]||_0x1d1d52[_0x3a5fba(0x164)]||_0x1d1d52[_0x3a5fba(0x167)])return;let _0x5a2da3;_0x197438=gKeyResLen;while(_0x197438--){_0x5a2da3=gKeyRes[_0x197438];if(_0x1d1d52[_0x3a5fba(0x185)]==_0x5a2da3[_0x3a5fba(0x185)]){ClickResolution(_0x5a2da3[_0x3a5fba(0x171)]-0x1);if(_0x5a2da3[_0x3a5fba(0x182)])ClickSubmit();return;}}_0x197438=gKeySubmitLen;while(_0x197438--){if(_0x1d1d52[_0x3a5fba(0x185)]==gKeySubmit[_0x197438]){ClickSubmit();return;}}}function WaitTimeout(_0x3963b0){return new Promise(_0xb68c05=>setTimeout(_0xb68c05,_0x3963b0));}async function ClickSubmit(_0x4b8f92=DELAY_CLICK){const _0x118b91=_0x50b06f;await WaitTimeout(_0x4b8f92);try{const _0x432756=document[_0x118b91(0x17d)](_0x118b91(0x174));if(_0x432756[_0x118b91(0x16d)]>0x0)document[_0x118b91(0x180)](_0x118b91(0x169))['click']();else throw new Error(_0x118b91(0x166));}catch(_0x30a127){console[_0x118b91(0x170)](_0x118b91(0x17a)+_0x30a127[_0x118b91(0x17b)]);}}function ClickResolution(_0x4a0b20){const _0x2a264c=_0x50b06f;try{const _0x58a034=document['querySelectorAll'](_0x2a264c(0x16c));_0x58a034[_0x4a0b20][_0x2a264c(0x16a)]();}catch(_0x49219b){console[_0x2a264c(0x170)](_0x2a264c(0x178)+_0x49219b[_0x2a264c(0x17b)]);}}
