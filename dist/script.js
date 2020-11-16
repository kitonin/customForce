let catalog = document.getElementById("catalog");

catalog.onclick = function(event) {
	catalog.classList.add("makeScale");
	function scaling() {
		document.location.href = "catalog/catalog.html";
	};
	setTimeout(scaling, 1000);
};

// setTimeout(scaling, 2000);