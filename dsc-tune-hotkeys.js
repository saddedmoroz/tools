// ==UserScript==
// @name			DSC: хоткеи настраиваемые
// @version			1.0
// @description		27-02-2025
// @author			saddedmoroz
// @match			https://centiman.avito.ru/service-dataset-collector-frontend/*
// ==/UserScript==

// tab size: 4

'use strict';

/*
	Клавиши для резолюций.
	Клавиши можно задать свои, а ненужные удалить.
	Их название смотреть в блоке 'e.code' здесь: https://keyjs.dev/
	send: true означает что после нажатия на резолюцию будет нажата кнопка Готово.
	send: false означает что резолюция будет выбрана/снята, кнопка Готово нажиматься не будет.
*/
const gKeyRes = [
	{ code: 'Digit1', send: true }, // первая резолюция в списке
	{ code: 'Digit2', send: false }, // вторая резолюция в списке и т.д.
	{ code: 'Digit3', send: false },
	{ code: 'Digit4', send: false },
	{ code: 'Digit5', send: false },
	{ code: 'Digit6', send: false },
	{ code: 'Digit7', send: false },
	{ code: 'Digit8', send: false },
	{ code: 'Digit9', send: false },
];
const gKeyResLen = gKeyRes.length;

/*
	Клавиши для отправки резолюций (Готово).
	Клавиши можно задать свои, а ненужные удалить.
	Их название смотреть в блоке 'e.code' здесь: https://keyjs.dev/
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