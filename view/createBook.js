pl.view.createBook = {
	setupUserInterface: function() {
		var button = document.forms['book'].commit;
		button.addEventListener("click", pl.view.createBook.addBook)
	},

	addBook: function() {
		var form = document.forms['book']
		Book.loadAll();

		Book.add({
			isbn: form.isbn.value,
			title: form.title.value,
			year: form.year.value
		})

		Book.saveAll();

		form.reset();
	}
}