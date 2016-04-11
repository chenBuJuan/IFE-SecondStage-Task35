/*javascript*/
/*定义记录block状态的数据结构*/
var blockState = {
    
    "xIndex" : 6,
    "yIndex" : 5,
    "direction" : "left",
    "rotate" : 0
    
};
/*全局变量*/
var oBlock = document.getElementById("block");
var oLog = document.getElementById("log").getElementsByClassName("mes")[0];
/*定义go函数*/
function go(index){
    
    switch (blockState.direction){
        
        case "left" : 
            oBlock.style.left = (blockState.xIndex - index) * 40 + "px";
            blockState.xIndex -= index;
            break;
        
        case "right" : 
            oBlock.style.left = (blockState.xIndex + index) * 40 + "px";
            blockState.xIndex += index;
            break;
            
        case "top" : 
            oBlock.style.top = (blockState.yIndex - index) * 40 + "px";
            blockState.yIndex -= index;
            break;
            
        case "bottom" : 
            oBlock.style.top = (blockState.yIndex + 1) * 40 + "px";
            blockState.yIndex += index;
            break;
        
    }
    
}
/*定义tunLef函数*/
function tunLef(){
    
    var iRotate = blockState.rotate - 90;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}
/*定义tunRig函数*/
function tunRig(){
    
    var iRotate = blockState.rotate + 90;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}
/*定义tunBac函数*/
function tunBac(){
    
    var iRotate = blockState.rotate + 180;
    
    oBlock.style["-webkit-transform"] = "rotate("+iRotate+"deg)";
    
    iRotate = iRotate < 0 ? iRotate + 360 : iRotate;
    iRotate = iRotate >= 360 ? iRotate - 360 : iRotate;
    
    blockState.rotate = iRotate;
    
    switch (iRotate){
        
        case 0 : 
            blockState.direction = "left";
            break;
        
        case 90 : 
            blockState.direction = "top";
            break;
        
        case 180 : 
            blockState.direction = "right";
            break;
        
        case 270 : 
            blockState.direction = "bottom";
            break;
        
    }
    
}
/*定义traLef函数*/
function traLef(index){
    
    oBlock.style.left = (blockState.xIndex - index) * 40 + "px";
    blockState.xIndex -= index;
    
}
/*定义traTop函数*/
function traTop(index){
    
    oBlock.style.top = (blockState.yIndex - index) * 40 + "px";
    blockState.yIndex -= index;
    
}
/*定义traRig函数*/
function traRig(index){
    
    oBlock.style.left = (blockState.xIndex + index) * 40 + "px";
    blockState.xIndex += index;
    
}
/*定义traBot函数*/
function traBot(index){
    
    oBlock.style.top = (blockState.yIndex + index) * 40 + "px";
    blockState.yIndex += index;
    
}
/*定义movLef函数*/
function movLef(index){
    
    oBlock.style["-webkit-transform"] = "rotate(0deg)";
    blockState.direction = "left";
    blockState.rotate = 0;
    go(index);
    
}
/*定义movTop函数*/
function movTop(index){
    
    oBlock.style["-webkit-transform"] = "rotate(90deg)";
    blockState.direction = "top";
    blockState.rotate = 90;
    go(index);
    
}
/*定义movRig函数*/
function movRig(index){
    
    oBlock.style["-webkit-transform"] = "rotate(180deg)";
    blockState.direction = "right";
    blockState.rotate = 180;
    go(index);
    
}
/*定义movBot函数*/
function movBot(index){
    
    oBlock.style["-webkit-transform"] = "rotate(270deg)";
    blockState.direction = "bottom";
    blockState.rotate = 270;
    go(index);
    
}
/*定义指令执行成功时函数*/
function runSuc(str){
    
    var newNode = document.createElement("p");
    var date = new Date();
                
    newNode.style.color = "green";
    newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+str+"'执行成功。";
    
    oLog.appendChild(newNode);
    oLog.scrollTop = oLog.scrollHeight;
    
}
/*定义指令执行失败时函数*/
function runFai(str){
    
    var newNode = document.createElement("p");
    var date = new Date();
                
    newNode.style.color = "red";
    newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+str+"'执行失败!";
    
    oLog.appendChild(newNode);
    oLog.scrollTop = oLog.scrollHeight;
    
}
/*定义指令执行错误或无指令时函数*/
function orderErr(str){
    
    var newNode = document.createElement("p");
    var date = new Date();
    
    newNode.style.color = "red";
    
    if(str){
        
        newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 指令'"+str+"'错误!";
        
    }else{
        
        newNode.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" 请输入指令!";
        
    }
    
    oLog.appendChild(newNode);
    oLog.scrollTop = oLog.scrollHeight;
    
}
/*定义指令处理函数，并返回执行结果*/
function orderHandle(sValueAll){
    
    var sValue = sValueAll ? sValueAll.match(/[a-zA-Z]{2,3}(\s[a-zA-Z]{3})?/)[0] : sValueAll;
    
    if(/\d+/.test(sValueAll)){
        
        var index = Number(sValueAll.match(/\d+/)[0]);
        
    }else{
        
        var index = 1;
        
    }
    console.log(sValue+index);
    var result;
    
    switch (true){
        
        case (/^go$/i).test(sValue) : 
        
            if(blockState.xIndex > index && blockState.direction == "left" || blockState.xIndex <= (10 - index) && blockState.direction == "right" || blockState.yIndex > index && blockState.direction == "top" || blockState.yIndex <= (10 - index) && blockState.direction == "bottom"){
                
                go(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^tun lef$/i).test(sValue) : 
        
            tunLef();
            
            runSuc(sValueAll);
            
            result = true;
            
            break;
            
        case (/^tun rig$/i).test(sValue) : 
        
            tunRig();
            
            runSuc(sValueAll);
            
            result = true;
            
            break;
            
        case (/^tun bac$/i).test(sValue) : 
        
            tunBac();
            
            runSuc(sValueAll);
                
            result = true;
            
            break;
            
        case (/^tra lef$/i).test(sValue) :
            
            if(blockState.xIndex > index){
                
                traLef(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^tra top$/i).test(sValue) :
            
            if(blockState.yIndex > index){
                
                traTop(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^tra rig$/i).test(sValue) :
            
            if(blockState.xIndex <= (10 - index)){
                
                traRig(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^tra bot$/i).test(sValue) :
            
            if(blockState.yIndex <= (10 - index)){
                
                traBot(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^mov lef$/i).test(sValue) :
            
            if(blockState.xIndex > index){
                
                movLef(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^mov top$/i).test(sValue) :
            
            if(blockState.yIndex > index){
                
                movTop(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^mov rig$/i).test(sValue) :
            
            if(blockState.xIndex <= (10 - index)){
                
                movRig(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        case (/^mov bot$/i).test(sValue) :
            
            if(blockState.yIndex <= (10 - index)){
                
                movBot(index);
                
                runSuc(sValueAll);
                
                result = true;
                
                break;
                
            }else{
                
                runFai(sValueAll);
                
                result = false;
                
                break;
                
            }
            
        default :
            
            orderErr(sValueAll);
            
            result = false;
            
    }
    
    return result;
    
}
/*定义事件函数，调用指令处理函数，并根据返回值操作list*/
function run(){
    
    var sValue = document.getElementById("textarea").value.split(/\n|.{56}/);
    var oLi = document.getElementById("list").getElementsByTagName("li");
    var i = 0;
    
    var oTimer = setInterval(function (){
        
        var result = orderHandle(sValue[i].replace(/^\s+|\s+$/,""));
        
        if(result){
            
            oLi[i].style.backgroundColor = "#ccc";
            
        }else{
            
            oLi[i].style.backgroundColor = "#f00";
            
        }
        
        i++;
        
        if(i >= oLi.length){
            
            clearInterval(oTimer);
            
        }
        
    },500);
    
}
/*定义textarea文本框内容变化对list的改变函数*/
function txtChange(event){
    
    var oList = document.getElementById("list");
    var sValue = document.getElementById("textarea").value.split(/\n|.{56}/g);
    
    if(sValue.length > Number(oList.lastElementChild.innerHTML) || event.keyCode == 13){
        
        var newNode = document.createElement("li");
        
        newNode.innerHTML = Number(oList.lastElementChild.innerHTML) + 1;
        oList.appendChild(newNode);
        oList.scrollTop = oList.scrollHeight;
        
    }else if(sValue.length < Number(oList.lastElementChild.innerHTML)){
        
        oList.removeChild(oList.lastElementChild);
        
    }
    
}
/*定义textarea文本框滚动时对list的改变函数*/
function txtScroll(){
    
    var oList = document.getElementById("list");
    var oTxt = document.getElementById("textarea");
    
    oList.scrollTop = oTxt.scrollTop;
    
}
/*定义refresh函数*/
function refresh(){
    
    var oList = document.getElementById("list");
    var oTxt = document.getElementById("textarea");
    
    oList.innerHTML = "<li>1</li>";
    oTxt.value = "";
    oLog.innerHTML = "<p>日志</p>";
    oBlock.style.left = "240px";
    oBlock.style.top = "200px";
    oBlock.style["-webkit-transform"] = "rotate(0deg)";
    blockState.direction = "left";
    blockState.rotate = 0;
    blockState.xIndex = 6;
    blockState.yIndex = 5;
    
}
/*绑定事件函数*/
function init(){
    
    var oBtn = document.getElementById("order-input");
    var oTxt = document.getElementById("textarea");
    var oRe = document.getElementById("refresh-input");
    
    oBtn.addEventListener("click",run);
    oTxt.addEventListener("keydown",txtChange);
    oTxt.addEventListener("scroll",txtScroll);
    oRe.addEventListener("click",refresh);
    
}
/*初始化*/
init();