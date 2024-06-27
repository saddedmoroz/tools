// ==UserScript==
// @name			Maas статистика
// @version			1.4
// @description		Отображает статистику работы
// @updateURL		https://github.com/saddedmoroz/tools/blob/master/maas-statistics.meta.js
// @downloadURL		https://github.com/saddedmoroz/tools/blob/master/maas-statistics.js
// @author			t.me/yreawesome
// @match			https://moderation.avito.ru/line/*
// ==/UserScript==


'use strict';

// Здесь другие звуки: https://github.com/flukeout/simple-sounds/tree/gh-pages/sounds
const audioTick = new Audio('https://flukeout.github.io/simple-sounds/sounds/coin.mp3');

const date_time = new Date();
let scriptDataArray = null;
let scriptData = { "url":window.location.href, "notifyTimeout":0, "date":date_time.getDate(), "hour":date_time.getHours(), "count":0, "cph":0 };
let scriptID = 0;

document.body.insertAdjacentHTML('beforeend', '<div style="bottom: 1em; position: fixed; right: 2em;"><span>За сегодня: </span><span id="count" style="padding-right: 30px;">0</span><span>За текущий час: </span><span id="cph" style="padding-right: 30px;">0</span><span>Неактивен: </span><span id="time">0</span></div>');
const span_time = document.getElementById('time');
const span_count = document.getElementById('count');
const span_cph = document.getElementById('cph');


// Инициализация сессионных переменных
if (Boolean(localStorage.scriptDataArray)) { // имеются данные в хранилище
    scriptDataArray = JSON.parse(localStorage.scriptDataArray);
    for (let index = 0; index < scriptDataArray.length; index++) {
        const element = array[index];
        if (element.url === scriptData.url && element.date === scriptData.date) {
            scriptData = element;
            scriptID = index;
            break;
        }
    }
}
else { // данных в хранилище нет - инициализируем его
    localStorage.scriptDataArray = JSON.stringify(new Array(scriptData));
}


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


let time_seconds = 0;
setInterval(() => {
    span_count.innerText = scriptData.count;
    span_cph.innerText = scriptData.cph;

    // Использование Date и функций времени - правильный подход для таймеров и отсчёта времени, т.к. setTimeout/setInterval
    // используют callback-функции, которые исполняются браузером своебразно и неравномерно, что повлечёт (обычно)
    // "замедление" отсчёта - когда используются только функции setTimeout/setInterval
    time_seconds = parseInt((Date.now() - date_time) / 1000);
    if (time_seconds < 60) span_time.innerText = time_seconds;
    else span_time.innerText = `${parseInt(time_seconds / 60)}:${time_seconds % 60}`

    // Воспроизвести уведомление при достижении порога в notifyTimeout секунд
    if (scriptData.notifyTimeout) {
        if (time_seconds > 0 && (time_seconds % scriptData.notifyTimeout == 0))
            audioTick.play();
    }
}, 1000);


function IncreaseCounters() {
    time_seconds = 0; // обнуляем время неактивности
    scriptData.count += 1; // +1 к общему числу объявлений
    const past_hour = date_time.getHours(); // получим час, который был в date_time до нажатия Принять
    date_time.setTime(Date.now()); // обновим date_time текущим временем на момент нажатия Принять
    scriptData.cph = (scriptData.hour == date_time.getHours()) ? (scriptData.cph + 1) : 1; // расчёт количества в час
    scriptData.hour = past_hour; // в статистику поместим час, когда был расчёт cph
    
    // обновить хранилище
    scriptDataArray[scriptID] = scriptData;
    localStorage.scriptDataArray = JSON.stringify(scriptDataArray);
}

// Если юзер кликнул мышкой по Принять - увеличить счётчики
{ // local scope
    let btnAccept = document.querySelector('button.moderateButton-module-button-AeBfy');
    if (Boolean(btnAccept))
        document.addEventListener('click', IncreaseCounters);
}

// Обработка клавиш
document.addEventListener('keyup', (event) => {
    // Пропустить, если зажат модификатор, кроме Ctrl
    switch (true) {
        case event.altKey: case event.shiftKey: case event.metaKey:
            return;
    }
    // Пропустить, если не в экране проверки
    if (!Boolean(document.querySelector('div.coreDocument-module-content-vaCPV'))) return;

	switch (event.code) {
		case 'Space': {
			IncreaseCounters();
            break;
		}

		case 'BracketRight': { // Crtl + ]
            if (!event.ctrlKey) break;
			let userNotifyTimeout = parseInt(prompt('Через сколько секунд неактивности оповещать?\n0 = без уведомления (по-умолчанию)\n600 = 10 минут\n1200 = 20 минут', '0'));
            if (userNotifyTimeout >= 0) scriptData.notifyTimeout = userNotifyTimeout;
            break;
		}
	}
    return;
});
