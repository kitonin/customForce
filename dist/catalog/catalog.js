let item = document.getElementsByClassName("catalog-item");
console.log(item);

for (var key in item) {
	item[key].style.height = item[key].offsetWidth + "px";
}

