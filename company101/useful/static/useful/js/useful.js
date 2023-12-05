

function imageStream(){
    var form1 = document.form1
    var iStr = form1.imageStr
    var sSel = 0
    
    for(var i = 0; i < iStr.length; i++){
        if(iStr[i].checked)
            sSel = iStr[i].value
    }

    switch(sSel){
        case "1":
   //         form1.frameRate.value = 1
            form1.frameRate.disabled = 0
            break;
        case "2":
            form1.size.value = form1.size.value / 5
        //    form1.frameRate.value = 30
            form1.frameRate.disabled = 0
            break;
        case "3":
            form1.size.value = form1.size.value / 9
            form1.frameRate.disabled = 0
            break;
        case "4":
            form1.size.value = form1.size.value / 14
            form1.frameRate.disabled = 0
            break;
    }

    calcBandwidth()
}

function imageSize(){
    var form = document.form1
    var iRes = form1.imageRes
    var rSel = 0
    var iComp = form1.imageComp
    var iStr = form1.imageStr
    var cSel = 0

    for(var i = 0; i < iRes.length; i++){
        if(iRes[i].checked)
            rSel = iRes[i].value
    }

    for(var i = 0; i < iComp.length; i++){
        if(iComp[i].checked)
            cSel = iComp[i].value
    }

    switch(rSel){
        case "1":
            switch(cSel){
                case "11":
                    form.size.value = 190
                    break;
                case "1":
                    form.size.value = 164
                    break;
                case "2":
                    form.size.value = 104
                    break;
                case "3":
                    form.size.value = 60
                    break;
                case "33":
                    form.size.value = 30
                    break;
            }
            break;
        case "2":
            switch(cSel){
                case "11":
                    form.size.value = 240
                    break;
                case "1":
                    form.size.value = 213
                    break;
                case "2":
                    form.size.value = 135
                    break;
                case "3":
                    form.size.value = 78
                    break;
                case "33":
                    form.size.value = 78
                    break;
            }
            break;
		case "7":
            switch(cSel){
                case "11":
                    form.size.value = 185
                    break;
                case "1":
                    form.size.value = 160
                    break;
                case "2":
                    form.size.value = 100
                    break;
                case "3":
                    form.size.value = 60
                    break;
                case "33":
                    form.size.value = 45
                    break;
            }
            break;
        case "3":
            switch(cSel){
                case "11":
                    form.size.value = 450
                    break;
                case "1":
                    form.size.value = 320
                    break;
                case "2":
                    form.size.value = 200
                    break;
                case "3":
                    form.size.value = 120
                    break;
                case "33":
                    form.size.value = 100
                    break;
            }
            break;

        case "4":
            switch(cSel){
                case "11":
                    form.size.value = 390
                    break;
                case "1":
                    form.size.value = 360
                    break;
                case "2":
                    form.size.value = 200
                    break;
                case "3":
                    form.size.value = 140
                    break;
                case "33":
                    form.size.value = 120
                    break;
            }
            break;
        case "5":
            switch(cSel){
                case "11":
                    form.size.value = 420
                    break;
                case "1":
                    form.size.value = 396
                    break;
                case "2":
                    form.size.value = 220
                    break;
                case "3":
                    form.size.value = 154
                    break;
                case "33":
                    form.size.value = 120
                    break;
            }
            break;
        case "6":
            switch(cSel){
                case "11":
                    form.size.value = 500
                    break;
                case "1":
                    form.size.value = 435
                    break;
                case "2":
                    form.size.value = 242
                    break;
                case "3":
                    form.size.value = 160
                    break;
                case "33":
                    form.size.value = 110
                    break;
            }
            break;
		case "8":
            switch(cSel){
                case "11":
                    form.size.value = 495
                    break;
                case "1":
                    form.size.value = 479
                    break;
                case "2":
                    form.size.value = 266
                    break;
                case "3":
                    form.size.value = 170
                    break;
                case "33":
                    form.size.value = 135
                    break;
            }
            break;	
    }

    imageStream()
}

function calcBandwidth(){
    var form = document.form1

    var frt = 1;
	var hrsRec = Number(form.cboHoursPerDay.value)
    var tCam = form.size.value * Number(form.frameRate.value / frt)
    if(tCam > 999)
        form.camBandwidth.value = (tCam / 1000).toFixed(2) + " Мб/с"
    else
        form.camBandwidth.value = tCam.toFixed(2) + " Кб/с"

    var tBand = (form.size.value *  Number(form.frameRate.value / frt) * form.numCams.value)
    form.ute.value = tBand;
    if(tBand > 999999)
        form.bandwidth.value = (tBand / 1000000).toFixed(2) + " Гб/с"
    else if(tBand > 999)
        form.bandwidth.value = (tBand / 1000).toFixed(2) + " Мб/с"
    else
        form.bandwidth.value = tBand.toFixed(2) + " Кб/с"

    calcStorage()
}

function camDecrease(myNum){
    if(document.form1.numCams.value > myNum){
        document.form1.numCams.value = document.form1.numCams.value - myNum
    }
    calcBandwidth()
}

function camIncrease(myNum){
    document.form1.numCams.value = Number(document.form1.numCams.value) + Number(myNum)
    calcBandwidth()
}

function dayDecrease(myNum){
    if(document.form1.desiredStorage.value > myNum){
        document.form1.desiredStorage.value = document.form1.desiredStorage.value - myNum
    }
    calcStorage()
}

function dayIncrease(myNum){
    document.form1.desiredStorage.value = Number(document.form1.desiredStorage.value) + Number(myNum)
    calcStorage()
}

function calcStorage(){
    var form = document.form1
var hrsRec = Number(form.cboHoursPerDay.value)
    var frt = 1;
    var eStorage = ((((form.size.value * Number(form.frameRate.value / frt) * form.numCams.value * 60 * 60 * 24 * form.desiredStorage.value) / 1000000) / 24) * hrsRec / 8) 

    if(eStorage > 999)
        form.storage.value = (eStorage / 1000).toFixed(2) + " ТБ"
    else
        form.storage.value = eStorage.toFixed(2) + " ГБ"

    // calc cpu

    var myFrameSize = 8;    

    // calc for different compressions

    var iStr = form1.imageStr
    var sSel = 0
    var framesPerCpu;
    
    for(var i = 0; i < iStr.length; i++){
        if(iStr[i].checked)
            sSel = iStr[i].value
    }

    switch(sSel){
        case "1":
            framesPerCpu = 110;
            break;
        case "2":
            framesPerCpu = 220;
            break;
        case "3":
            framesPerCpu = 550;
            break;
        case "4":
            framesPerCpu = 660;
            break;
    }


    var cpusRaw = Math.ceil(((form.size.value * form.frameRate.value * form.numCams.value)/myFrameSize)/framesPerCpu);
    var cpusCams = Math.ceil(form.numCams.value/100);

    var cpusVal = cpusRaw;
    if(cpusCams > cpusRaw)
        cpusVal = cpusCams;

   // form.cpus.value = cpusVal;
}
function openBuild(){
    var winl = (screen.width - 300) / 2;
    var wint = (screen.height - 100) / 2;
    winprops = 'height='+1024+',width='+800+',top='+wint+',left='+winl+',scrollbars=yes,resizable=yes';
    var mypage = "http://www.sferann.ru"
    win = window.open(mypage, "", winprops);
    win.window.focus();
}


function napr (obj) {
  console.log(obj);
	if(obj.DLN.value==0 || obj.TOP.value==0 || obj.KPL.value==0)
	{
		 obj.res1.value=""
		 obj.res2.value=""
	}
	else
	{
		 var d = obj.PPS.value		 
		 
		 var L3 = obj.DLN.value
		 var L2 = L3.toString()
		 var L1 = L2.replace(',','.')
		 var L			 

		 
		 var I3 = obj.TOP.value
		 var I2 = I3.toString()
		 var I1 = I2.replace(',','.')
		 var I					 
		 
		 var n3 = obj.KPL.value	 
		 var n2 = n3.toString()
		 var n1 = n2.replace(',','.')
		 var n	
		 
		 var U = obj.NIP.value
		 
		 d=Number(d)
		 L=Number(L1)
		 I=Number(I1)
		 n=Number(n1)
		 U=Number(U)

		 var R = 0.0175*2*L/d
		 
		 var uPr = R*I/1000*n
		 var u = Math.round(uPr*100)/100
		 
		 var kPr = U-uPr
		 var k = Math.round(kPr*100)/100
		 
		 var xPr = uPr/U*100
		 var x = Math.round(xPr*100)/100
		 
		 if(isNaN(k)==true || isNaN(u)==true || isNaN(x)==true)
		 {
			 obj.res1.value=""
			 obj.res2.value=""
		 }
		 else
		 {
			 obj.res1.value=k+" В"
			 obj.res2.value=u+" В  ("+x+"%)"
		 }

	 }

} 







