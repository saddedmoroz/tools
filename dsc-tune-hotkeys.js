// ==UserScript==
// @name			DSC: хоткеи настраиваемые
// @version			1.1
// @description		28-02-2025
// @author			saddedmoroz
// @match			https://centiman.avito.ru/service-dataset-collector-frontend/*
// ==/UserScript==

// tab size: 4

'use strict';

/*
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
	{ code: 'Digit1', index: 1, send: true }, // при нажатии на цифру 1 (не нумпад), будет выбрана первая резолюция в списке и сразу отправлена.
	{ code: 'Digit2', index: 2, send: false }, // вторая резолюция в списке, но без отправки
	{ code: 'Digit3', index: 3, send: false },
	{ code: 'Digit4', index: 4, send: false },
	{ code: 'Digit5', index: 5, send: false },
	{ code: 'Digit6', index: 6, send: false },
];
const gKeyResLen = gKeyRes.length;

/*
	Клавиши для отправки резолюций (Готово).
	Клавиши можно задать свои, а ненужные удалить/закомментировать.
	Название других клавиш смотреть в блоке 'e.code' здесь: https://keyjs.dev/
*/
const gKeySubmit = [
	'Space',
	'NumpadEnter',
];
const gKeySubmitLen = gKeySubmit.length;

// Задержка в мс перед вызовом клика по элементу. Ниже значения 50 ставить не рекомендую.
const DELAY_CLICK = 50;


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// Добавим обработчик нажатия клавиш
document.addEventListener('keyup', ProcessKeyEvent);

// Обработчик нажатия клавиш
function ProcessKeyEvent(e) {
	// внутри проекта?
	const prjName = window.location.href.match(/\d+$/);
	if (!Boolean(prjName)) return;

	// если нужно ограничить активацию клавиш в определённом проекте
	// if (prjName[0] != '677') return;

	// выйти, если зажат модификатор
	// if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
	if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;

	// обработка клавиш резолюций
	let i = gKeyResLen, key;
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