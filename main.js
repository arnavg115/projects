/*function func(){
	setTimeout(function(){
		var nav = document.getElementById("nav1");
		nav.style.opacity = "1"
		nav.style.width = "90vw"
	},500);
	setTimeout(function(){
		var id1 = document.getElementById("1");
		id1.style.width = "250"
		id1.style.height = "350"
		id1.style.opacity="1"
	},1000);
	setTimeout(function() {
  		var id2 = document.getElementById("2");
  		id2.style.width = "250"
		id2.style.height = "350"
  		id2.style.opacity = "1"
	}, 1500);
	setTimeout(function() {
  		var id3 = document.getElementById("3");
  		id3.style.width = "250"
		id3.style.height = "350"
  		id3.style.opacity = "1"
	}, 2000);
	setTimeout(function(){
		var id3 = document.getElementById("3");
		var id2 = document.getElementById("2");
		var id1 = document.getElementById("1");
		var navitems = document.getElementById("f")
		var navitems1 = document.getElementById("f1")
		var navitems2 = document.getElementById("f2")
		var navitems3 = document.getElementById("f3")
		id1.style.color = "black"
		id2.style.color = "black"
		id3.style.color = "black"
		id1.style.transition = "all 0.2s ease-in-out"
		id2.style.transition = "all 0.2s ease-in-out"
		id3.style.transition = "all 0.2s ease-in-out"
		navitems.style.color = "white"
		navitems1.style.color = "white"
		navitems2.style.color = "white"
		navitems3.style.color = "white"
	}, 3000)
	
}
*/
function func(){
	setTimeout(function(){
		var nav = document.getElementById("nav1");
		nav.style.opacity = "1"
		nav.style.width = "90vw"
	},0);
	sleep(1000);
	var list = document.getElementById("car").querySelectorAll(".care");
	var list2 = document.getElementById("fail").querySelectorAll("#f");
	console.log(list2);
	for(var i = 0;i<list.length;i++){
		var element = list[i];
		var toggleItemMove = d(element);
		setTimeout( toggleItemMove, i * 1000 );
	}
	setTimeout(fadein(list2,"white"),3500)
	setTimeout(fadein(list,"black"),4000)

}

function fadein(elements, color){
	return function(){
		for(var c = 0;c<elements.length;c++){
			var ds = elements[c];
			ds.style.color = color;
		}
	}
}
function changesped(list){
	for(var u = 0;u<list.length;u++){
		var c = list[u];
		c.style.transition = "all .2s ease-in-out"
	}
}

function d(cur){
	return function(){
	cur.style.width = "250";
	cur.style.height="350";
	cur.style.opacity = "1";};
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
