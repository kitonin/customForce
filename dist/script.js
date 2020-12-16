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
	setTimeout(moveToNext, 300);
};

uniq.onclick = function(event) {
	uniq.classList.add("makeScale");
	function moveToNext() {
		document.location.href = "uniq/uniq.html";
		uniq.classList.remove("makeScale");
	};
	setTimeout(moveToNext, 300);
};

about.onclick = function(event) {
	about.classList.add("makeScale");
	function moveToNext() {
		document.location.href = "about/about.html";
		about.classList.remove("makeScale");
	};
	setTimeout(moveToNext, 300);
};

contacts.onclick = function(event) {
	contacts.classList.add("makeScale");
	function moveToNext() {
		document.location.href = "contacts/contacts.html";
		contacts.classList.remove("makeScale");
	};
	setTimeout(moveToNext, 300);
};

// scroll

onePageScroll(".main", {
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 500,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   // beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   // afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                    // the browser's width is less than 600, the fallback will kick in.
});
