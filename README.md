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

### 1/22/18
By removing the for loop and simply allowing the verification function to write directly to the DOM, I seem to have solved the problem. I would have liked to figure out a way to use the more elegant solution of updating the DOM when the array of coffee qualities itself is updated, but this works for now. The styling needed fixing again, as it went a bit janky when multiple lines of tags were added. I think the issue is that the "tbox" with all the tags in it is overlowing it's boundaries, as it is not confined by anything. I could have added the "overflow: hidden" attribute to keep it from breaking out. "overflow: scroll" seemed better to me, but I was concerned about the issue of an unsightly scrollbar. If I could work around that, I would have a solution.

### 1/23/18
I undertook cleaning up the tags in styling but felt somewhat demoralized by it, so I decided to go back over the JS to make sure everything was good and discovered that my function to add new items to the page no longer works. It appears that now when it runs the function that renders the items to the page, it gets hung up on line 69, saying that it essentially 'cannot read the length of 'coffee[i].tags' because it is coming up undefined. Oddly, a console.log placed right before the for loop where this is triggered renders the length with no problem, so I'm not sure what's causing this. So I'm no further on the part that I had been working on and just found I have taken a step back on something I thought was already done. It feels like a counter-productive day.

### 1/29/18
Upon reflection, I came to the conclusion that seems obvious now, with the benefit of hindsight, that the JS was hanging up on the fact that there was no "tag" associated with the newly-created menu item, which could be solved by adding a "tags" input section upon creation. Indeed, the object did seem to be correctly creating and pushing into our overall 'coffee' object, but did not want to render, for some mysterious reason, which turned out to be that I had removed the call for the function that rendered the objects to the DOM. Once I realized that, everything seemed to be functioning fine.

The one issue that continues to plague me now, before I can begin really cleaning things up is how to get the 'add' button to stay in place, no matter how the container flexes. At all times, I want the little "plus" box to stay in the same spot, relative to the container. I believe the issue must be that the "tags" container must be flexing to the point where it must take up a full line, thereby causing it to essentially "newline", leaving the "add" button orphaned on the line above. One way around this might be to add the button to the same container.