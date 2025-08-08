document.oncontextmenu = function () { return false; };//禁止右键
document.onkeydown = function () {
	if (window.event && window.event.keyCode == 123) {
		alert('请尊重劳动成果！by:cxx0515');
		event.keyCode = 0;
		event.returnValue = false;
		 return false;
	}
};
document.writeln("</div>");