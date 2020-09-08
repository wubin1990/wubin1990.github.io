updateTime(new Date('March 28, 2015'));
var seed = setInterval("updateTime(new Date('March 28, 2015'))",1000);
updateTime2(new Date('December 25, 2017'));
var seed2 = setInterval("updateTime2(new Date('December 25, 2017'))",1000);

//updateTime(new Date('March 28, 2015'));
function updateTime(day){
	//var bg = chrome.extension.getBackgroundPage();
	//var forshow = bg.UpdateDeltaT(day);
	var arrForshow = ["","","",""];
	arrForshow = UpdateDeltaT(day);
	document.getElementById("GrowingDay").innerHTML = arrForshow[0];
	document.getElementById("GrowingHour").innerHTML = arrForshow[1];
	document.getElementById("GrowingMin").innerHTML = arrForshow[2];
	document.getElementById("GrowingSec").innerHTML = arrForshow[3];
}

function updateTime2(day){
	var arrForshow = ["","","",""];
	arrForshow = UpdateDeltaT(day);
	document.getElementById("GrowingDay2").innerHTML = arrForshow[0];
	document.getElementById("GrowingHour2").innerHTML = arrForshow[1];
	document.getElementById("GrowingMin2").innerHTML = arrForshow[2];
	document.getElementById("GrowingSec2").innerHTML = arrForshow[3];
}

function FormatDigital(digital){
	var newDigital = "";
	if(digital < 10)
		newDigital = "0" + digital.toString();
	else 
		newDigital = digital.toString();
	return newDigital;
}

function UpdateDeltaT(d1){
	var arr = ["","","",""];
	
	var DateNow = new Date();
	var deltaT = DateNow.getTime() - d1.getTime();
	var temp = deltaT / (24 * 3600 * 1000);
	var deltaDay = Math.floor(temp);
	temp = (temp - deltaDay)*24;
	var deltaHour = Math.floor(temp);
	temp = (temp - deltaHour)*60;
	var deltaMin = Math.floor(temp);
	temp = (temp - deltaMin)*60;
	var deltaSec = Math.floor(temp);
	/*
	strTime += FormatDigital(deltaDay);
	strTime += "days";
	strTime += FormatDigital(deltaHour);
	strTime += "hours";
	strTime += FormatDigital(deltaMin);
	strTime += "minutes";
	strTime += FormatDigital(deltaSec);
	strTime += "seconds";
	*/
	arr[0] = FormatDigital(deltaDay);
	arr[1] = FormatDigital(deltaHour);
	arr[2] = FormatDigital(deltaMin);
	arr[3] = FormatDigital(deltaSec);
	return arr;
}

