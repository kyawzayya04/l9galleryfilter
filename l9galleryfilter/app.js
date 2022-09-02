var getimgs = document.querySelectorAll(".img");
console.log(getimgs); // NodeList ( can make loop with forEach )
var getmodal = document.querySelector(".modal");
var getmodalimg = document.querySelector(".modal-img");
var getcaption = document.querySelector(".caption");
var getbtnclose = document.querySelector(".btn-close");


let shownow = (img)=>{
	console.log(img);
}

getimgs.forEach(function(getimg){
	shownow(this);

	getimg.addEventListener("click",function(){
		// console.log(getimg.src);
		// console.log(getimg.alt);
		getmodal.style.display = "block";
		getmodalimg.src = getimg.src;
		getcaption.innerHTML = getimg.alt;
	})
})

getbtnclose.onclick = function(){
	getmodal.style.display = "none";
}

document.addEventListener("click",function(e){
	// console.log(e.target)

	if(e.target == getmodal){
		getmodal.style.display = "none";
	}

})