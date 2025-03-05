// ==UserScript==
// @name			DSC: хоткеи настраиваемые v1 (кроме 677)
// @version			1.3
// @description		05-03-2025
// @updateURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-tune-hotkeys/dsc-tune-hotkeys-v1.js
// @downloadURL		https://raw.githubusercontent.com/saddedmoroz/tools/refs/heads/master/dsc-tune-hotkeys/dsc-tune-hotkeys-v1.js
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
	{ code: 'Digit7', index: 7, send: false },
	{ code: 'Digit8', index: 8, send: false },
	{ code: 'Digit9', index: 9, send: false },
	{ code: 'Digit0', index: 10, send: false },
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
		gPrjPermit = ['677']; // если пусто - без запретов

// Здесь вся настройка заканчивается
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Далее рабочий код, логика


let gDT = Date.now(), gDTNow;

const	gKeySubmitLen = gKeySubmit.length,
		gKeyResLen = gKeyRes.length,
		gPrjAllowLen = gPrjAllow.length,
		gPrjPermitLen = gPrjPermit.length;

// Обработчик нажатия клавиш
document.addEventListener('keydown', ProcessKeyEvent);

// Обработчик нажатия клавиш
function ProcessKeyEvent(e) {
	// Учитывать таймаут перед обработкой следующего события зажатой клавиши. Отсеивает "лавину" событий
	gDTNow = Date.now() + Math.random() * 100;
	if (gDTNow - gDT < KEY_COOLDOWN) return;
	gDT = gDTNow;

	// внутри проекта?
	let prjName = window.location.href.match(/\d+$/);
	if (!Boolean(prjName)) return;
	prjName = prjName[0];

	// проверить для какого проекта скрипт запрещен
	let i = gPrjPermitLen;
	while (i--) { if (prjName == gPrjPermit[i]) return; }

	// проверить для какого проекта скрипт разрешен
	i = gPrjAllowLen;
	if (i) {
		let prjPermit = true;
		while (i--) { if (prjName == gPrjAllow[i]) { prjPermit = false; break; } }
		if (prjPermit) return;
	}

	// выйти, если зажат модификатор
	// if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
	if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;

	// обработка клавиш резолюций
	let key;
	i = gKeyResLen;
	while (i--) {
		key = gKeyRes[i];
		if (e.code.indexOf(key.code) >= 0) {
			ClickResolution(key.index - 1);
			if (key.send) ClickSubmit();
			return;
		}
	}

	// обработка клавиш отправки резолюций
	i = gKeySubmitLen;
	while (i--) {
		if (e.code.indexOf(gKeySubmit[i]) >= 0) {
			ClickSubmit();
			return;
		}
	}
}


// Возвращает промис для await, чтобы дождаться окончания действия таймера
function WaitTimeout(timeout) {
	return new Promise(resolve => setTimeout(resolve, timeout));
}


async function ClickSubmit(timeout = DELAY_CLICK) {
	await WaitTimeout(timeout);
	try {
		const answers = document.querySelectorAll('div.answer.checked');
		if (answers.length > 0) document.querySelector('button.el-button--primary:nth-child(1)').click();
		else throw new Error('резолюции не были установлены');
	} catch (error) {
		console.warn(`ClickSubmit: ${error.message}`);
	}
}


function ClickResolution(resolution) {
	try {
		const answers = document.querySelectorAll('div.answer');
		answers[resolution].click();
	} catch (error) {
		console.warn(`ClickResolution: ${error.message}`);
	}
}