# coffee-shop-jquery
A remake of the coffee shop from cms-esque using jQuery.

### Modify your recipe app to add some advanced features with jQuery.

Modify your menu app to include some new features enabled by jQuery. See the sample code at the bottom for all the scripts you'll need to include. I'd suggest starting with step 1, then doing step 3, then doing step 2.

- [x] Complete your menu app from yesterday (jQuery: optional).
- [ ] Add a new property to each food, which includes a set of strings describing categories for the food. Potential categories include vegetarian, low-cal, and gluten-free. You should be able to add one of these categories to a new food using jQuery autocomplete (documentation here). Show the properties in the DOM with the food.
- [x] Instead of using class="hidden" to show/hide multiple views, use jQuery tabs instead. Here's the documentation. You should also add a third tab, which should display vegetarian-friendly food only ('vegetarian' being one of the categories).

## Using jQuery

We'll be using jQuery and jQuery UI (a popular plugin to jQuery) for tonight's assignment. You'll need to include these JS files to get both libraries:
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