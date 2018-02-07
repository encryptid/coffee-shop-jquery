let coffee = require("./coffee");

window.addEventListener("load", function () {

	// I"m leaving in the vanilla JS for a side-by-side comparison.
	// It"s bulky, but useful.
	let $tagNames = ["espresso", "dairy-free", "cold", "lightly sweet",
		"refreshing", "ginger beer", "lime", "coffee",];

	// let menu = document.querySelector(".menu");
	const $menu = $("#menuContent");
	// const addItem = document.querySelector(".addItem");
	// const $addItem = $("#addContent");
	// const menadd = document.querySelector("#menuTab");
	//const $menuTab = $("#menuTab");
	// const addTab = document.querySelector("#addTab");
	//const $addTab = $("#addTab");
	// const btn = document.querySelector("button");
	const $btn = $(".submit");
	let counter = 0;

	//////////Create menu items//////////

	function addItems() {
		//first, we run a for loop
		//every time we encounter an item inside of the "coffee" object...
		//create the building blocks of our page
		for (let i = counter; i < coffee.length; i++) {
			//let menuItem = document.createElement("ul");
			let $menuItem = $("<ul></ul>");
			$menuItem.addClass("menuItem");
			//let name = document.createElement("li");
			let $name = $("<li></li>");
			//let title = document.createElement("h2");
			let $title = $("<h2></h2>");
			//let desc = document.createElement("li");
			let $desc = $("<li></li>");
			// let price = document.createElement("li");
			let $price = $("<li></li>");
			// desc.classList.add("desc");
			let $tags = $("<li></li>");
			let $tagBox = $("<ul></ul>")
			$tagBox.addClass("tbox");
			$desc.addClass("desc");
			// title.textContent = coffee[i].name;
			$title.text(coffee[i].name);
			// desc.textContent = coffee[i].description;
			$desc.text(coffee[i].description);
			// price.textContent = coffee[i].price;
			$price.text(coffee[i].price);
			// menu.appendChild(menuItem);
			$menu.append($menuItem);
			// name.appendChild(title);
			$name.append($title);
			// menuItem.appendChild(name);
			$menuItem.append($name);
			// menuItem.appendChild(desc);
			$menuItem.append($desc);
			// menuItem.appendChild(price);
			$menuItem.append($price);
			$tags.addClass("tags");
			$tags.append($tagBox);
			$menuItem.append($tags);

			//////////Add tag section//////////

			//next, we"ll create the "tag" section. Every time we encounter an item in the
            //tags section, create the building blocks of the tag section
            console.log(coffee[i].tags);
			for (let j = 0; j < coffee[i].tags.length; j++) {
				//let $tagBox = $("<ul></ul>")
				let $tag = $("<li></li>");
				let $close = $("<span></span>");
				$tag.text(coffee[i].tags[j]);
				$close.text("x");
				$tagBox.append($tag);
				$tag.prepend($close);
				//$menuItem.append($tags);
				//$tags.append($tagBox);
			}

			//////////Add "+", search box, and search button//////////
			let $add = $("<p></p>");
			$add.text("+");
			$add.addClass("add");
            $tags.prepend($add);
            let $searchBox = $("<div></div>");
            $searchBox.addClass("searchBox");
			let $search = $("<input></input>");
			$search.addClass("search");
			$search.attr("placeholder", "search tags");
			let $submitTag = $("<button>submit</button>");
            $submitTag.addClass("sub-tag");
            $searchBox.append($search);
            $searchBox.append($submitTag);
			$tags.append($searchBox);
			// $tags.append($submitTag);

			$search.autocomplete({
				source: $tagNames,
				position: { of: $search },
				appendTo: $tags,
			});
			$add.on("click", function () {
				$search.removeClass("hidden");
				//$search.autocomplete("search")
			});

			//////////Validate search and push to coffee object//////////
			$submitTag.on("click", function () {

				let tagData = coffee[i].tags;
				let newTag = $search.val();

				if (tagData.indexOf(newTag) === -1) {
					tagData.push(newTag);
					$tagNames.push(newTag);
					console.log(tagData);
					console.log(tagData.length);
					// $search.val("");
					//     };
					// });

					//Did away with the for loop and writing directly to the DOM once for each term.
					//While it does appear to be working, I would like for it to pull the extra one
					//from the coffee tag array itself. A framework would make it easier because of
					// data binding, but we"re not doing frameworks here.
					let $tag = $("<li></li>");
					let $close = $("<span></span>");
					$tag.text($search.val());
					$close.text("x");
					$tag.prepend($close);
					$tagBox.append($tag);

					// for (let k = tagData.length; k < newTag.length; k++) {
					//     console.log("tagData is " + tagData.length + " long.");
					//     let $tag = $("<li></li>");
					//     let $close = $("<span></span>");
					//     $tag.text($search.val());
					//     $close.text("x");
					//     $tag.prepend($close);
					//     $tagBox.append($tag);
					//     // $search.addClass("hidden");
					// };
				}
			});

			counter++;
		}
	}

	addItems();

	// $menuTab.on("click", function() {
	// //     // if (menu.classList.contains("hidden")) {
	//         $menu.removeClass("hidden");
	//         $addItem.addClass("hidden");
	// //     // }
	//      console.log("candy");
	//  });

	// $addTab.on("click", function() {
	//     // if ($addItem.classList.contains("hidden")) {
	//         $addItem.removeClass("hidden");
	//         $menu.addClass("hidden");
	//     // };
	//     console.log("unicorns");
	// });

	// btn.addEventListener("click", function() {
	$btn.on("click", function () {
		//     let name = document.querySelector("#name");
		let $name = $("#name");
		//     let desc = document.querySelector("#desc");
		let $desc = $("#desc");
		//     let price = document.querySelector("#price");
        let $price = $("#price");
        let $btnTags = $("#tags");
		//     let newCoffee = { name: name.value, description: desc.value, price: `$` + price.value };
		let $newCoffee = { name: $name.val(), description: $desc.val(), price: `$` + $price.val(), tags: [$btnTags.val()], };
		//     coffee.push(newCoffee);
        coffee.push($newCoffee);
        console.log("line 178");
        console.log(coffee);
		addItems();
		$name.val("");
		$desc.val("");
        $price.val("");
        $btnTags.val("");
		console.log("kittens!");
	});

	$("#tabs").tabs({ active: "#menuContent" });

});