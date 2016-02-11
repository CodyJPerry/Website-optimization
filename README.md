## Website Performance Optimization portfolio project

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: 

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimized Frames per Second in pizza.html

- Changed `function updatePositions()` by preforming calcuations outside of loop.
- Used transform and translateX to optimize instead of style.left in for loop for background pizzas
- Changed from querySelectorAll to faster selectors when accessing DOM elements, such as _getElementById_ and _getElementsByClassName_ to speed up functions


####Part 2-B: Optimizing changePizzaSizes slider
- Iterates through pizza elements on the page and changes their widths
- Changed document selector to getElementsbyClassName to optimize the loop and speed up the the selection of elements
- Store randomPizzaContainer in a global variable | save from looking up each iteration of the loop

	Loop over each item contained in randomPizzaContainer and update its style.width property to a % width
    	```for (var i = 0; i < pizzaChangeLength; i++) { 
    		pizzaSizeChange[i].style.width = changedWidth + '%';
		}```

##Build Tools

Gulp was the build tool i used to help automate my development process. You will find my gulpfile.js for the project located in the main directory and also one included for the views sub directory.

If you would like to run my gulp file:

- cd to the correct directory in _terminal_ or _command-line_ and run the command "gulp"
- Make sure you are in the correct directory as their are 2 gulpfile.js in two different folders.

## Other Optimizations

I used the web font loader to off load the google web font and prevent it from being render blocking.

	```<script async>
      WebFontConfig = {
        google: {
         families: ["Open Sans Condensed:400,700"]
        }
      };
      (function(d) {
        var wf = d.createElement("script"), s = d.scripts[0];
        wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js";
        s.parentNode.insertBefore(wf, s);
      })(document);
    </script>```

Critical CSS was inlined into index.html to prevent the stylesheet from becoming render blocking.
The print.css style sheet was given a media attribute of print so it will only be used when attempting to Print the index.html page.

Images included in the project were optimized (resized and compressed) to allow the page to load as fast as possible.

## Questions or concerns

**Created by Cody Perry**
If you have any questions or concerns relating to this project please feel free to contact me at **codyperry65@yahoo.com**