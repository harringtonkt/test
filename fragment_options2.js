	function frag(t) {

          // Defines initial output (empty string) and initial location within the text (beginning)
                output = "";
		var loc = 0;

          // Defines read length (readlen), and the minimum and maximum move (minmov and maxmove) lengths for shifting
          // Each variable is initially defined as a defult value, but can be overwritten by user input
                var readlen = 60;
		if (document.getElementById('readlen').value) {
			readlen = parseInt(document.getElementById('readlen').value);
		}

                var min = 0.3;
		if (document.getElementById('min').value) {
			min = parseFloat(document.getElementById('min').value);
		}
                var minmove = Math.round(min*readlen);

                var max = 0.6;
		if (document.getElementById('max').value) {
			max = parseFloat(document.getElementById('max').value);
		}
		var maxmove = Math.round(max*readlen);

		var index = document.getElementById('index').value;

          // Overwrites the initial location within the text if users select "Include initial shift"
          // Required minmove and maxmove, so put here rather than with the initial defining of location

		if (document.getElementById('initjump').checked) {
			loc = Math.round(Math.random()*(maxmove-minmove) + minmove);
		}

          // Removes new line characters from the input text and replaces them with spaces
           
		var allLine = t.replace(/\n/g, " ");

          // Loop which adds a read of length readlen to the output string (with newlines to keep reads separate) and shifts the location forward by a random value between minmove and maxmove
          // Loop repeats for so long as the location is within the total length of the input text (it is possible for text from the end of the input to be dropped because of a location shift)

		while (loc < t.length) {

			var r = Math.round(Math.random()*(maxmove-minmove) + minmove);

			output = output + index + " " + String(allLine.slice(loc,loc+readlen)) + "\n\n";

			loc = loc + r
		}

         // Returns the final output string

		return output;
	}



	function update() {
		document.getElementById('output').value = frag(document.getElementById('input').value);
	}