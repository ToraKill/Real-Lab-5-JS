	/* Functions
		-------------------------------------------------- */
		// STEP 1: Write a function called changeRgb that accepts two parameters, channel and value
		function changeRgb(channel, value) {
            var rgbColor = [100, 150, 200]; 
          
        // STEP 2: Build a switch based on the value of the channel parameter (red, green, or blue) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
            switch (channel) {
              	// STEP 3: Inside each case, update the appropriate global rgb array element (0, 1, or 2)
                case 'red':
                rgbColor[0] = Math.max(0, Math.min(255, value));
                break;
              case 'green':
                rgbColor[1] = Math.max(0, Math.min(255, value));
                break;
              case 'blue':
                rgbColor[2] = Math.max(0, Math.min(255, value));
                break;
              default:
                console.log('Incorrect colour. Please use red, green, or blue.');
                return;}
            callback(rgbColor);
        }
        // STEP 4: Return the updated rgb array back to the event handler
			
        function eventHandler(updatedRgb) {
          console.log('Updated RGB color:', updatedRgb);
        }
        changeRgb('red', 180, eventHandler);
		
		// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array
		function writeCSS(rgbArray) {
            if (rgbArray.length !== 3) {
              console.log('Incorrect RGB array. It should have 3 numbers.');
              return;
            }
            var red = rgbArray[0];
            var green = rgbArray[1];
            var blue = rgbArray[2];
            var newColor = `rgb(${red},${green},${blue})`;
            // STEP 6: Declare a new local variable called newColor that will contain the new string that will be used to update the CSS background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string
            var cssRule = `
              .myElement {
                background-color: rgb(${red}, ${green}, ${blue});
              }`;
          
            console.log('Created CSS rule:');
            console.log(cssRule);
          }
          var updatedRgb = [180, 150, 200]; 
          writeCSS(updatedRgb);
          
			
            //I dont know if i did 6 right its above 
            
			// STEP 7: Create a while loop that iterates through the array passed into this function, called newRgb (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
            function processRgbArray(newRgb) {
                if (!Array.isArray(newRgb)) {
                  console.log('error.');
                  return;
                }
                var index = 0;
                while (index < newRgb.length) {
                  var currentValue = newRgb[index];
                  console.log('Current Value:', currentValue);
                  index++;
                }}
              var newRgbArray = [255, 0, 128, 42, 200]; 
              processRgbArray(newRgbArray);
              
			
				// STEP 8: For each element of the array, add to the string newColor, the red, green, and blue values, each followed by a comma
				
			
			// STEP 9: Slice off the last comma from the string contained by the variable, newColor - we don’t need it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
			
			
			// STEP 10: Finish off the newColor string by adding the closing ')'
			
			// STEP 11: Return the string newColor back to the event handler
			
		// STEP 12: Enjoy the application in your browser!