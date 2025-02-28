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
	Клавиши можно задать свои, а ненужные удалить/закомментировать или отключить (enabled: false).

	Количество клавиш лучше выставлять равным количеству резолюций в проекте, но можно больше. Если указано меньше - смотри пример 1.
	Пример 1. В проекте 5 резолюций, а здесь выставлено 3 строки. Последние 2 резолюции в списке не будут выбираться.
	Пример 2. В проекте 3 резолюции, но нужны только № 1 и № 3.
	В этом примере обязательно должно быть 3 строки. Можно больше, но не менее 3:
		{ code: 'Digit1', enabled: true, send: false }, // резолюция № 1 будет выбрана/снята нажатием клавиши
		{ code: 'Digit2', enabled: false, send: false }, // резолюция № 2 не будет выбрана/снята нажатием клавиши
		{ code: 'Digit3', enabled: true, send: false }, // резолюция № 3 будет выбрана/снята нажатием клавиши

	code: 'Digit1' - название других клавиш смотреть в блоке 'e.code' здесь: https://keyjs.dev/
	send: true - после нажатия на резолюцию будет нажата кнопка Готово.
	send: false - резолюция будет выбрана/снята, кнопка Готово нажиматься не будет.
	enabled: true - клавиша включена (будет реагировать на нажатие).
	enabled: false - клавиша выключена (не будет реагировать на нажатие).
*/
const gKeyRes = [
	{ code: 'Digit1', enabled: true, send: true }, // первая резолюция в списке
	{ code: 'Digit2', enabled: true, send: false }, // вторая резолюция в списке и т.д.
	{ code: 'Digit3', enabled: true, send: false },
	{ code: 'Digit4', enabled: true, send: false },
	{ code: 'Digit5', enabled: true, send: false },
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
		if (key.enabled && e.code.indexOf(key.code) >= 0) {
			ClickResolution(i);
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