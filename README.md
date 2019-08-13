<img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Logos/SIU%20Logo.png"></img>

# Overview
<strong>Shake it Up!</strong> is a responsive single-page web app that offers users an encyclopedia of popular cocktails along with easy-to-follow step by step instructions. Have some ingredients but don't know what to make? No problem! Our app features a "Build Your Own Cocktail" mode... start with a base spirit (e.g. Whiskey, Vodka, Gin) and our app will intelligently recommend compatible ingredients and potential cocktails. <strong>Shake it Up!</strong> is your perfect bar-counter companion for an evening out on the town or a fun time enjoying drinks with friends.

<img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/GIFs/discover.gif"></img>

<a href="http://shake-it-up-aa.herokuapp.com" target="_blank"><strong>Live Demo</strong></a>

# Features

- [ ] Cocktail suggestions based on multiple user inputs
- [ ] Cocktail recipes with detailed step-by-step instructions
- [ ] Educational content regarding cocktails & ingredients
- [ ] Desktop and mobile-web responsive design

# Technologies

### Backend

<ul>
	<a href="https://www.mongodb.com/" target="_blank"><li>MongoDB</li></a>
	<a href="https://expressjs.com/" target="_blank"><li>Express.js</li></a>
	<a href="https://www.heroku.com/" target="_blank"><li>Heroku</li></a>
</ul>

### Frontend

<ul>
	<a href="https://reactjs.org/" target="_blank"><li>React</li></a>
	<a href="https://redux.js.org/" target="_blank"><li>Redux</li></a>
	<a href="https://sass-lang.com/" target="_blank"><li>Sass</li></a>
	<a href="https://nodejs.org/en/" target="_blank"><li>Node.js</li></a>
	<a href="https://webpack.js.org/" target="_blank"><li>Webpack</li></a>
	<a href="https://www.adobe.com/products/xd.html" target="_blank"><li>Adobe XD</li></a>
	<a href="https://www.adobe.com/products/illustrator.html" target="_blank"><li>Adobe Illustrator</li></a>
</ul>

# Lazy Fetch
Our <strong>fetch thunk</strong> actions check the redux state, so that they only make the http request if the data is not already fully loaded. They also accept an optional callback to be executed when the data is fetched.

<img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Code%20Snippets/siu_snip_1a.png?raw=true"></img>

# Build Your Own Cocktail (BYOC)

<img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/GIFs/byoc.gif"></img>

Search progress persists when users refresh the page. When users press back button or types additional compatible ingredients in the URL, BYOC correctly sets state according to the list of ingredients at the moment and accurately displays potential drinks.

Local state (base, nonBaseIngredients, drinks, compatibleIngredients) is set by <strong>setStateFromURL()</strong>. The 'base' array stores objects corresponding to the various types of the base spirit selected by the user. After selecting the base spirit, the drinks array is set to be all cocktails containing any of the types of the given base spirit, and the compatible ingredients array is initialized as all ingredients of these drinks except for the ones in base.	The user then may select additional ingredients which refines the array of drinks and correspondingly reduces the list of compatible ingredients. 

<img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Code%20Snippets/siu_snip_2a.png?raw=true"></img>

setStateFromURL() sets local state based on the URL wildcard. Since base spirit is the first selection	made by the user, the name of the base spirit is the first segment of the (comma-separated) wildcard. So if the wildcard is 'vodka, lime', setStateFromURL sets base to be an array. It also sets the nonBaseIngredients array. The 'drinks' slice of state is set to the array of cocktails which each contains some version of the base spirit, and also every one of the non-base ingredients. Thus, when the user makes their initial selection, namely base spirit, they see all the drinks containing some version of it, and subsequent clicks on ingredients reduce the list of cocktails. Lastly, the compatibleIngredients array stores all ingredients that go into any cocktail in the drinks array, except for the ingredients that have already been selected.

# Live Search

<img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/GIFs/live_search.gif"></img>

Upon rendering drinks or ingredients index page, all drinks / ingredients are preloaded to allow live search. Users can search for drinks / ingredients instantaneously without making unnecessary AJAX requests to the back-end. The search is also case insensitive.

# Technical Challenges

<ul>
	<li>Incorporating Regex into Req.params</li>
	<li>Reformatting database schema from a public API to expedite querying by ingredient</li>
	<li>Merging overlapping cocktail tables</li>
	<li>Fetching data from MongoDB and organizing for display in frontend</li>
	<li>Implementing real-time querrying based on multi-value input parameters</li>
	<li>Designing a responsive cross-platform user interface</li>
</ul>

# Contributors

<ul>
	<a href="https://github.com/BenjaminT88" target="_blank"><li>Benjamin Tan</li></a>
	<a href="https://github.com/robmroy" target="_blank"><li>Rob Roy</li></a>
	<a href="https://github.com/fsiino" target="_blank"><li>Frankie Siino</li></a>
	<a href="https://github.com/SkiesXR" target="_blank"><li>Phillip Krasnick</li></a>
</ul>

# Screenshots

| Desktop | Mobile |
| ------- | ------ |
|	<img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/desktop-splash.png" height="406" width="722"></img> | <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/mobile-splash.png" height="406" width="187"></img> |
| <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/desktop-byoc-base.png" height="406" width="722"></img> | <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/mobile-byoc-base.png" height="406" width="187"></img> |
| <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/desktop-byoc-result.png" height="406" width="722"></img> | <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/mobile-byoc-result.png" height="406" width="187"></img> |
| <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/desktop-cocktail-idx.png" height="406" width="722"></img> | <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/mobile-cocktail-idx.png" height="406" width="187"></img> |
| <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/desktop-drink-show.png" height="406" width="722"></img> | <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/mobile-drink-show.png" height="406" width="187"></img> |
| <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/desktop-ingred-idx.png" height="406" width="722"></img> | <img src="https://github.com/BenjaminT88/shake_it_up/blob/master/frontend/src/assets/Screenshots/mobile-ingred-idx.png" height="406" width="187"></img> |
