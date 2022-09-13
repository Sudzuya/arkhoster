var inputLeft = document.querySelectorAll(".input-left");
var inputRight = document.querySelectorAll(".input-right");

function setLeftValue(item) {
	var _this = item,
		min = Number(_this.min),
		max = Number(_this.max);

	const calcMin = Math.min(Number(_this.value), Number(item.value));
	_this.value = calcMin >= item.parentNode.querySelector('.input-right').value ? item.parentNode.querySelector('.input-right').value : calcMin

    const parent = item.parentNode.parentNode

    parent.querySelector('.filter-range__start-value').innerHTML = _this.value

	var percent = ((_this.value - min) / (max - min)) * 100;

    parent.querySelector(".slider > .thumb.left").style.left = percent + "%";

    parent.querySelector(".slider > .range").style.left = percent + "%";


}

inputLeft.forEach((e)=> {
    setLeftValue(e);
    e.addEventListener("input", function(e) {setLeftValue(e.target)});
})

function setRightValue(item) {
	var _this = item,
		min = Number(_this.min),
		max = Number(_this.max);

   const calcMax = Math.max(Number(_this.value), Number(item.value))

	_this.value = calcMax <= item.parentNode.querySelector('.input-left').value ? item.parentNode.querySelector('.input-left').value : calcMax

    const parent = item.parentNode.parentNode
    parent.querySelector('.filter-range__start-end').innerHTML = _this.value

	var percent = ((_this.value - min) / (max - min)) * 100;


    parent.querySelector(".slider > .thumb.right").style.right = (100 - percent) + "%";

    parent.querySelector(".slider > .range").style.right = (100 - percent) + "%";
}


inputRight.forEach((e)=> {
    setRightValue(e);
    e.addEventListener("input", function (e) {setRightValue(e.target)});
})