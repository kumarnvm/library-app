pl.view.listBooks = {
	setupUserInterface: function() {
		var table = document.querySelector('#books');
		Book.loadAll();

		for(prop in Book.instances) {
			var row = table.insertRow();
			row.insertCell().textContent = Book.instances[prop].isbn
			row.insertCell().textContent = Book.instances[prop].title
			row.insertCell().textContent = Book.instances[prop].year
		}

	}
};