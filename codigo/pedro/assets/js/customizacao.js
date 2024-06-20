function colorir() {
	let cor = localStorage.getItem("cor");

	if (!cor)
		cor = "white";

	 document.body.style.backgroundColor = cor;
}

colorir();
