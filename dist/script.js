let catalog = document.getElementById("catalog");
let uniq = document.getElementById("uniq");
let about = document.getElementById("about");
let contacts = document.getElementById("contacts");


catalog.onclick = function(event) {
	catalog.classList.add("makeScale");
	function moveToNext() {
		document.location.href = "catalog/catalog.html";
		catalog.classList.remove("makeScale");
	};
	setTimeout(moveToNext, 700);
};

uniq.onclick = function(event) {
	uniq.classList.add("makeScale");
	function moveToNext() {
		document.location.href = "uniq/uniq.html";
		uniq.classList.remove("makeScale");
	};
	setTimeout(moveToNext, 700);
};