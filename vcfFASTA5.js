	function convert() {

          // Defines initial output (header row of FASTA w/ sample name) 

		var sampleID = document.getElementById('sampleID').value;
		output = ">" + sampleID +"\n";


	 // Reads in reference FASTA, strips the header row, removes any new line characters, stores it as an array for manipulation

		var rawREF = document.getElementById('FASTA').value; 	//reads in
		var headerEnd = rawREF.search("\n");			//finds end of header (new line as marker)
		var cropREF = rawREF.substring(headerEnd+1);		//removes header (substrings everything after it)
		var allLine = cropREF.replace(/\n/g, "");		//removes any additional new line characters
		var allCaps = allLine.toUpperCase();			//converts to upper case
		var REF = allCaps.split("");				//splits to array (each character = new object in array)


          // Reads in the six rows of pos/ref/alt/del info and updates REF array

		for (i = 1; i < 7; i++) {
			var testingPos = "position" + i;					//generates ID for specifying element on webpage
			var curPos = parseInt(document.getElementById(testingPos).value)-1;	//gets value of that element (array starts at 0, so -1 from given pos)
			//output = output + curPos;						//for testing function of above

			var testingRef = "ref" + i;						//generates ID for specifying element on webpage
			var curRef = document.getElementById(testingRef).value;			//gets value of that element
			curRef = curRef.toUpperCase();						//converst to uppercase to match FASTA
			//output = output + curRef;						//for testing function of above

			var testingAlt = "alt" +i;						//generates ID for specifying element on webpage
			var curAlt = document.getElementById(testingAlt).value;			//gets value of that element
			curAlt = curAlt.toUpperCase();						//converst to uppercase to match FASTA
			//output = output + curAlt;						//for testing function of above

			var refLen = curRef.length;						//gets length of indicated reference to determine mutation type
			var altLen = curAlt.length;						//gets length of indicated alternate to determine mutation type


			if (REF[curPos] == curRef.charAt(0)) {					//checks match between first curRef base and REF at indicated position

				if (refLen > altLen) {						//handles deletions
					for (j = 1; j < refLen; j++) {				//skips base at curPos, limits iterating to length of curRef
						var delPos = curPos + j;			//to change position in REF
						REF[delPos] = "";				//replaces subsequent bases in REF with "" (deleting them)
					}

				} 

				else if (refLen < altLen) {					//handles insertions
					REF[curPos] = curAlt;					//replaces base in REF with insertion from curAlt
				}

				else if (refLen = altLen) {					//handles SNPs and longer substitutions. Only checks first base for match to REF
					for (k = 0; k < altLen; k++) {				//starts curPos and iterates through length of curRef/Alt
						var newPos = curPos +k;				//to change position in REF
						REF[newPos] = curAlt.charAt(k);			//changes each base from curRef to corresponding base in curAlt
					}
				}
			}
		}

		
         // Converts REF array to String, removes commas, and stores in output

		var tempOutput = REF.toString();						//converts array to string
		var commaLess = tempOutput.replace(/,/g, "");					//removes commas between array elements
		output = output + commaLess;							//adds to output


         // Returns the final output string

		return output;
	}



	function update() {
		document.getElementById('output').value = convert();
	}