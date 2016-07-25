var navbartoggle=document.getElementsByClassName('navbar-toggle')[0];
// alert(navbartoggle)
var containerfluid=document.getElementsByClassName('container-fluid')[0];
var lis=document.getElementsByTagName('li',containerfluid);
navbartoggle.onclick=function(){
	// alert(1)
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.display="block";
		// if(lis[i].className=="active"){
		// 	lis[i].removeClass
		// }
	};
};