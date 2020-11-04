
function check(){
var yes=0;
var no=0;
var otvet="";
var choice;
for (var v=1; v<=3; v++)
{
var q = document.forms['quiz'].elements['vopros'+v];
 for (var i=0; i<q.length; i++)
 {
 if (q[i].checked) {
 choice=q[i].value;
 }
 }
 if (choice=="yes") {yes++;}
 if (choice=="no") {no++;}
}
switch (true) {
case (yes<2): otvet=" Очень плохо|";break;
case (yes<3): otvet=" 2 балла|";break;
case (yes<4): otvet=" 3 балла|";break;
default: otvet=" очень плохо|";break;
}
    url_js_text= "Закончить";
    url_js="../../../Dont_touch/html/tree.html";
    text__log = otvet+ "<a href="+url_js+">" +url_js_text+"</a> "

    $('#stat').append(text__log);
 
    // document.write("<a href="+url_js+">" +"Ваш результат:" +url_js_text+"</a>");

    // window.location.href = "../../../Dont_touch/html/tree.html";
    // alert(otvet);
    
    // window.location.href = "../../../Dont_touch/html/stats.html";

};