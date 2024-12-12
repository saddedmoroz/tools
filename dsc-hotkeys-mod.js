// ==UserScript==
// @name			DSC: 677 хоткеи
// @version			1.3
// @description		12-12-2024
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

	Все буквенные кнопки сразу отправляют одну указанную резолюцию, даже если (случайно) выбраны другие
	A пропустить (сразу отправляет)
	S фото
	D заголовок
	F описание
	G имя УЗ
	H увод
*/

'use strict';

const _0x1b1634=_0xe7c4;(function(_0x23408e,_0x3b351a){const _0x4165bf=_0xe7c4,_0x2bb43b=_0x23408e();while(!![]){try{const _0x37f968=parseInt(_0x4165bf(0x14a))/0x1+parseInt(_0x4165bf(0x14f))/0x2*(parseInt(_0x4165bf(0x15e))/0x3)+-parseInt(_0x4165bf(0x148))/0x4*(parseInt(_0x4165bf(0x156))/0x5)+parseInt(_0x4165bf(0x154))/0x6*(parseInt(_0x4165bf(0x157))/0x7)+parseInt(_0x4165bf(0x15b))/0x8+-parseInt(_0x4165bf(0x15f))/0x9+-parseInt(_0x4165bf(0x163))/0xa;if(_0x37f968===_0x3b351a)break;else _0x2bb43b['push'](_0x2bb43b['shift']());}catch(_0x19d902){_0x2bb43b['push'](_0x2bb43b['shift']());}}}(_0x360a,0x2fea2));function _0x360a(){const _0x44faa7=['div.answer','div.answer.checked','3987880YTSkVW','Space','Названия\x20резолюций\x20не\x20соотвествуют\x20ожидаемым','677','shiftKey','Контакты\x20в\x20названии','KeyA','KeyS','metaKey','Контакты\x20на\x20фото','Digit4','keyup','error','querySelector','KeyF','textContent','Digit1','KeyG','153840JkIvNO','querySelectorAll','166379vWgXtP','classList','length','click','match','141892ounrhA','code','KeyH','Digit3','Digit5','786066FyQCOL','addEventListener','35wAqlMP','7tkxXSn','Пропустить','KeyD','Контакты\x20в\x20имени\x20УЗ','2614976EOvmmE','Резолюции\x20не\x20были\x20установлены','Увод\x20в\x20объявлении','15mHVGvU','1032534BWIdZW','altKey'];_0x360a=function(){return _0x44faa7;};return _0x360a();}function _0xe7c4(_0x588076,_0x31fe7a){const _0x360ab5=_0x360a();return _0xe7c4=function(_0xe7c402,_0xf90d89){_0xe7c402=_0xe7c402-0x140;let _0x55e324=_0x360ab5[_0xe7c402];return _0x55e324;},_0xe7c4(_0x588076,_0x31fe7a);}const I_A_SKIP=0x0,I_A_PHOTO=0x1,I_A_HEADER=0x2,I_A_DESCRIPTION=0x3,I_A_USERNAME=0x4,I_A_MARKET=0x5,g_resolutions=[_0x1b1634(0x158),_0x1b1634(0x16c),_0x1b1634(0x168),'Контакты\x20в\x20описании',_0x1b1634(0x15a),_0x1b1634(0x15d)],DELAY_CLICK=0x32,g_projectName=_0x1b1634(0x166);document[_0x1b1634(0x155)](_0x1b1634(0x141),ProcessKeyEvent);function ProcessKeyEvent(_0x58a436){const _0x3e787a=_0x1b1634,_0x2e60cf=window['location']['href'][_0x3e787a(0x14e)](/\d+$/gi);if(!Boolean(_0x2e60cf))return;if(_0x2e60cf[0x0]!==g_projectName)return;if(_0x58a436['ctrlKey']||_0x58a436[_0x3e787a(0x160)]||_0x58a436[_0x3e787a(0x167)]||_0x58a436[_0x3e787a(0x16b)])return;switch(_0x58a436[_0x3e787a(0x150)]){case _0x3e787a(0x169):ClickResolution(I_A_SKIP,!![]),ClickSubmit();break;case _0x3e787a(0x16a):ClickResolution(I_A_PHOTO,!![]),ClickSubmit();break;case _0x3e787a(0x159):ClickResolution(I_A_HEADER,!![]),ClickSubmit();break;case _0x3e787a(0x144):ClickResolution(I_A_DESCRIPTION,!![]),ClickSubmit();break;case _0x3e787a(0x147):ClickResolution(I_A_USERNAME,!![]),ClickSubmit();break;case _0x3e787a(0x151):ClickResolution(I_A_MARKET,!![]),ClickSubmit();break;case _0x3e787a(0x146):ClickResolution(I_A_SKIP,!![]),ClickSubmit();break;case'Digit2':ClickResolution(I_A_PHOTO);break;case _0x3e787a(0x152):ClickResolution(I_A_HEADER);break;case _0x3e787a(0x140):ClickResolution(I_A_DESCRIPTION);break;case _0x3e787a(0x153):ClickResolution(I_A_USERNAME);break;case'Digit6':ClickResolution(I_A_MARKET);break;case _0x3e787a(0x164):ClickSubmit();break;}}function WaitTimeout(_0xfc1e6c){return new Promise(_0x4e1027=>setTimeout(_0x4e1027,_0xfc1e6c));}async function ClickSubmit(_0x1c1fdd=DELAY_CLICK){const _0x1d7d83=_0x1b1634;await WaitTimeout(_0x1c1fdd);const _0x483b56=document[_0x1d7d83(0x149)](_0x1d7d83(0x162));if(_0x483b56[_0x1d7d83(0x14c)]>0x0)document[_0x1d7d83(0x143)]('button.el-button--primary:nth-child(1)')[_0x1d7d83(0x14d)]();else console['error'](_0x1d7d83(0x15c));}async function ClickResolution(_0x41490a,_0x35357a=![]){const _0x3e776c=_0x1b1634,_0x486edb=document['querySelectorAll'](_0x3e776c(0x161));let _0x185901=_0x486edb['length'];if(_0x185901!=0x6){console['error']('Ошибка\x20с\x20количеством\x20полученных\x20элементов\x20резолюций');return;}while(_0x185901--){if(_0x486edb[_0x185901][_0x3e776c(0x145)]!=g_resolutions[_0x185901]){console[_0x3e776c(0x142)](_0x3e776c(0x165));return;}}_0x185901=_0x486edb['length'];if(_0x35357a)while(_0x185901--){_0x185901!=_0x41490a&&_0x486edb[_0x185901]['classList'][_0x3e776c(0x14c)]==0x2&&_0x486edb[_0x185901][_0x3e776c(0x14d)]();}else _0x41490a!=I_A_SKIP&&_0x486edb[I_A_SKIP][_0x3e776c(0x14b)][_0x3e776c(0x14c)]==0x2&&(_0x486edb[I_A_SKIP][_0x3e776c(0x14d)](),await WaitTimeout(DELAY_CLICK));const _0x411a14=_0x486edb[_0x41490a];if(_0x35357a){if(_0x411a14[_0x3e776c(0x14b)][_0x3e776c(0x14c)]!=0x2)_0x411a14['click']();}else _0x411a14['click']();await WaitTimeout(DELAY_CLICK);}
