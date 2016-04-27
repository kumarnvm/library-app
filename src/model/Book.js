function Book(records) {
	this.isbn = records.isbn;
	this.title = records.title;
	this.year = records.year;
}

Book.instances = {};

Book.createTestData = function() {
	Book.instances["006251587X"] = new Book({isbn:"006251587X", title:"Weaving the Web", year:2000});
  	Book.instances["0465026567"] = new Book({isbn:"0465026567", title:"GÃ¶del, Escher, Bach", year:1999});
  	Book.instances["0465030793"] = new Book({isbn:"0465030793", title:"I Am A Strange Loop", year:2008});
  	Book.saveAll();
}

Book.saveAll = function() {
	var bookString = "",
		error = false,
		numBooks = Object.keys(Book.instances).length;

	try {
		bookString = JSON.stringify(Book.instances);
		localStorage.setItem("books", bookString);
	} catch (e) {
		alert("Error when writing to Local Storage\n" + e);
		error = true;
	}

	if(!error) console.log( numBooks + " books saved.");
}