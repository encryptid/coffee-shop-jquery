# coffee-shop-jquery
A remake of the coffee shop from cms-esque using jQuery.

### Modify your recipe app to add some advanced features with jQuery.

Modify your menu app to include some new features enabled by jQuery. See the sample code at the bottom for all the scripts you'll need to include. I'd suggest starting with step 1, then doing step 3, then doing step 2.

1. Add a new property to each food, which includes a set of strings describing categories for the food. Potential categories include vegetarian, low-cal, and gluten-free. You should be able to add one of these categories to a new food using jQuery autocomplete (documentation here). Show the properties in the DOM with the food.
2. Instead of using class="hidden" to show/hide multiple views, use jQuery tabs instead. Here's the documentation. You should also add a third tab, which should display vegetarian-friendly food only ('vegetarian' being one of the categories).

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
* I don't know why I thought this, but I thought when you assigned an element to a variable using jQuery, it created the element. I don't know why I thought that.

It turns out, you have to add tags to the declaration, i.e.,: `let $title = $('<h2></h2>');` Previously, I was attempting to create a new `<h2>` simply by writing: `let $title = $('h2');`. Which effectively referenced every `<h2>` on the page, and became a bit of a problem when my JS assigned it a value.