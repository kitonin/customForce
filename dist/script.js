let catalog = document.getElementById("catalog");

catalog.onclick = function(event) {
	catalog.classList.add("makeScale");
	function moveToNext() {
		document.location.href = "catalog/catalog.html";
	};
	setTimeout(moveToNext, 700);
	function removeScaling() {
		catalog.classList.remove("makeScale");
	};
	setTimeout(removeScaling, 1500);
};

// setTimeout(scaling, 2000);