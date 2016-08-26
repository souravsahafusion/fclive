function dragAndDrop(id, fn) {
	var dropzone = document.getElementById(id),
		acceptedTypes = {
			'text/csv': true
		};

	// Logs the file to the console
	function previewfile(file) {
		if (acceptedTypes[file.type] === true) {
			var reader = new FileReader();
			reader.readAsText(file);
			reader.onload = function (event) {
				fn(this.result)
			};
		} else {
			console.log("UNSUPPORTED FILE");
		}
	}

	// Reads the files sent from the drop
	function readfiles(files) {
		previewfile(files[0]);
	}

	dropzone.ondragover = function () {
		this.className += 'hover';
		return false;
	};

	dropzone.ondragend = function () {
		this.className = this.className.replace('hover', '');
		return false;
	};

	dropzone.ondrop = function (e) {
		this.className = '';
		e.preventDefault();
		readfiles(e.dataTransfer.files);
	};
};