# coffee-shop-jquery
A remake of the coffee shop from cms-esque using jQuery.

### Modify your recipe app to add some advanced features with jQuery.

Modify your menu app to include some new features enabled by jQuery. See the sample code at the bottom for all the scripts you'll need to include. I'd suggest starting with step 1, then doing step 3, then doing step 2.

- [x] Complete your menu app (jQuery: optional).

- [ ] Add a new property to each food, which includes a set of strings describing categories for the food. Potential categories include vegetarian, low-cal, and gluten-free. You should be able to add one of these categories to a new food using jQuery autocomplete [(documentation here)](http://api.jqueryui.com/autocomplete/). Show the properties in the DOM with the food.

- [x] Instead of using class="hidden" to show/hide multiple views, use jQuery tabs instead. Here's the documentation. You should also add a third tab, which should display vegetarian-friendly food only ('vegetarian' being one of the categories).

## Using jQuery

We'll be using jQuery and jQuery UI (a popular plugin to jQuery) for this assignment. You'll need to include these JS files to get both libraries:
``` html
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
  ```
  Plugins just add additional features to jQuery. jQuery UI adds a a collection of user interface-related features listed on the [left-hand side of their page](jqueryui.com). In this case, the most important resource will be the documentation pages on autocomplete and tabs; in particular click the 'view source' link in each page to see examples.

## Hard mode

Make it possible to add any number of properties to each food.

## Log:
* It is considered good form to prefix your jQuery-reliant variables with `$`, i.e., `let $input = $('input');`
* In jQuery, you can add tags to a declaration to create an element, i.e.,: `let $title = $('<h2></h2>');`
* Event listeners in jQuery are executed using `.on()`
* To get the value of a textbox in jQuery, you must use `.val` as a function, i.e., `$input.val();`. It feels weird to me, but such is life.
* App completely switched over to jQuery.
* Tab switching is now handled by jQuery Tabs. It, of course, would have been easier to build the page from the ground up using Tabs than switching it over, but nonetheless, it feels less intuitive to me than vanilla JS in 2017.
* Page currently renders strings from JS as tags on objects, however there is no current logical impact to the page.
* Had to add `.find('search')` to autocomplete function due to a weird initialization error. Not sure why, I'll have to look into it. The error has gone away, but I'm not sure the function is working properly. Still testing.
* By simplifying the 'autocomplete' function, I was able to observe some changes; the suggested results will now appear about a half screen away from the actual input (which creates a horizontal scroll when active on the right-most column), as well as a notification that results are found at the bottom of the screen (where it is unreadable if one is at the top of the page). It's not ideal, but it is movement.
  * Upon further inspection, it appears what is happening is `autocomplete` is adding a number of hidden divs/uls (corresponding to the supplied source) to the bottom of the page. As results in the input box are matched, the divs are "un-hidden". So, these divs need to be associated with the input box, somehow. ~~The answer might be in the APIs Extension Points.~~
  * UPDATE: the `appendTo` option is initialized on the `autocomplete` function to associate the menu with the desired element. By associating it with the "tags" section and doing a bit of styling, I got it much closer to what I envisioned.


## Next Steps:
### Step 2:
* Create a new property for each object that includes individual strings, like a 'tag' system. This sounds like an array of strings.
* Determine the criteria for tags, since I departed slightly from the "food" approach. Possibly "dairy-free", "vegan", "sugar free", or "espresso"?
* Give users ability to add one of these tags to new items and display them in the DOM
* Re-work the 'vegetarian' page to display results of items filtered down to a particular tag.

## Struggles Log
### 1/15/18
For the last few weeks, the problem that I've been struggling with is how to get this "tag" section of the app to run properly. I've been making very small,  incremental steps toward resolving it, but it feels a lot like 1 step forward, a half-step back.

The problem I currently grapple with is that I need to update the 'tag' section when the 'coffee' object is updated (which occurs when a new tag is added in the text input box).

The current solution I've arrived at is to destroy the children of
the "tags" section and re-render them with the new data. The issue that I'm
now running into is, as the code is currently written, this only works exactly once.

It's been clear to me for some time that this code could be re-factored to 
modularize it and reuse functions (as I'm attempting to use almost identical code more than once), but how to do so without breaking everything
is eluding me. I think I'm too close to it right now.

Really, what would be ideal is not to destroy the entire tag section, but update it with only the newest tag in the "coffee" object. Another issue that I encounter with this approach is that, because the "submit" button is rendered in the beginning with the page, the new tag appears *after* the submit button, which is very undesirable. However, solving this problem may prove to be more elegant than tearing down an entire section and re-rendering it.

### 1/16/18
Made complete spaghetti of my code. But for a purpose! I have come to the conclusion that separating my tags from the rest of the container will solve all of my problems. Then I need only append to the container that holds the tags and the textbox and search bar are no longer a problem... right?

### 1/17/18
Spent a lot of time futzing with the CSS, which broke when I added a container for the individual tag items. As is so often the case, I had styles above the item I was styling that I didn't notice affecting my items and I seem to have resolved it. The moment of truth will be hooking my JS back up to add tags, but I don't think that's going to get done today.

UPDATE: I re-integrated the function and it seems to be working like a charm... Once. When you attempt to add a second tag, the whole function goes ballistic and seems to add the new element 9 times. I'm not sure exactly why yet, but we're making progress!