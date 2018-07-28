function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	basic(data.details);
	carr(data.carrier);
	edu(data.education);
	skill(data.skills);
})

var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(basicdetails) {
var image=document.createElement("img");
image.src=basicdetails.image;
left.appendChild(image);
var name=document.createElement("h2");
name.textContent=basicdetails.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=basicdetails.email;
left.appendChild(email);
var phone=document.createElement("h2");
phone.textContent=basicdetails.phone;
left.appendChild(phone);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var e=document.createElement("h2");
	e.textContent="Education Details";
	right.appendChild(e)
	var un=document.createElement("ul");
	right.appendChild(un);
for (var i=0;i < education.length;i++){
	var l=document.createElement("li");
	var l=document.createElement("h3");
	l.textContent=education[i].course;
	un.appendChild(l);
	var l2=document.createElement("li");
	var l2=document.createElement("h3");
	l2.textContent=education[i].college;
	un.appendChild(l2);
	var l3=document.createElement("li");
	var l3=document.createElement("h3");
	l3.textContent=education[i].percentage;
	un.appendChild(l3);
}
}
	function skill(skilldata) {
		var s=document.createElement("div");
		s.classList.add("sset");
		right.appendChild(s);
		var head=document.createElement("h2");
		head.textContent="skills set";
		
		s.appendChild(document.createElement("HR"));
		s.appendChild(head);
		var t=document.createElement("table");
		var tabledata="";
		for (var i = 0; i < skilldata.length;i++){
			tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
			t.innerHTML=tabledata;
		}
		head.appendChild(t);
	}

function carr( carrier){
	var d=document.createElement("div");
	d.classList.add("carrier");
    right.appendChild(d);
    var e=document.createElement("h1");
    e.textContent="carrier objective";
    d.appendChild(e);
    var para=document.createElement("p");
    para.textContent=carrier.co;
    e.appendChild(para);
}