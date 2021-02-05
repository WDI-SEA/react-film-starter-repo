# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) You Do: Film Exercise - Unidirectional Flow

## Your Mission

Stop any project you currently have running; let's go back to the film application that you've started. You can run the app with `npm start`.

You're almost finished! Now, you need to:

- Add films to a user's faves
- Filter the films the user is looking at

To do this, you'll need to lift your state upwards so that all of the data is more easily shared across components. Remember unidirectional flow - data is *only* going to go *down* the component tree! Find the highest level of the tree in which there are two or more *sibling* components that need information about the same state; the state should reside in the parent of those components so it can be passed downward to all of them.

![](http://bitmakerhq.s3.amazonaws.com/resources/react-film-library-component-hierarchy.png)

### Task 1: Add State to the Appropriate Components

#### Step 1: `useState` to set mutable data

We'll need to hold two pieces of info:

1. `films`: initialize this variable to hold a reference to `TMDB.films`
2. `current`: this variable should start off as an empty object

`FilmListing ` will need the films and `FilmDetails` will need the currently selected film, so we're going to put these in their common parent component, `App.js`

#### Step 2: Pass state values to `FilmListing` and `FilmDetails` as props

Now that you have state stored on the `App` component, you want to pass those as props to your child components. Just change `App.js` for now:

- `FilmListing` should receive a `films` prop that now references the `App.js` `films` state.

- `FilmDetails` should receive a `film` prop that references the `App.js` `current` state.

Since you aren't doing anything with these props yet, nothing should change.

#### Step 3: Add a `Faves` state to `FilmListing.js`

In `FilmListing.js`, add a `faves` state, which is initialized as an empty array.


### Task 2: Move the `Fave` Event Handler up the Component Tree
When a user favorites a film, that information needs to be shared with the `FilmListing` component and all it's children in order to properly filter the list.

This isn't possible right now, because you're currently handling the favorite toggling of a film on the `Fave` component. The `Fave` component is at the bottom of the component hierarchy, and props and state only flow downward. Additionally, the `Fave` component doesn't even know which film is being favorited, so this isn't a great place to store a state for whether a film is a favorite.

Let's fix this:

#### Step 1: Remove the state setter in the `Fave` constructor

Take the `isFave` state out of the `Fave` constructor.

#### Step 2: Replace `setState` in `handleFaveClick` handler

Since you're no longer holding the state in the `Fave` component, you no longer want to set the `isFave` state in the `handleClick()` event handler.

Instead, assume that the parent component will pass a handler called `onFaveToggle` to you through the props object.

Change `handleClick` as follows:

```js
// /src/Fave.js

const handleClick = e => {
  e.stopPropagation()
  console.log('Handling Fave click!')

  // Add this line. You'll call the function passed through props
  props.onFaveToggle()

  // Delete the `setIsFaves` line. You no longer track state here
  // setIsFave(!isFave)
}
```

This way, when a user clicks, `onFaveToggle` will be called at a higher component level.

#### Step 3: Change `isFave` to be a prop rather than a state

You've taken the `isFave` state out of `Fave` and will be passing a prop called `isFave` instead. In the `Fave` component, replace `isFave` with `props.isFave`. You'll send that information down from a parent component that knows this info.

This is all you need to change in `Fave.js`! It will still check to see if the user has clicked the fave toggle button. The difference is that once the user clicks, instead of just changing the color of the fave icon, the `handleClick` function will instead call `onFaveToggle` to add/remove that film from the faves array in <code>App.js</code>.

You'll define `onFaveToggle` in a higher component.

#### Step 4: Define `handleFaveToggle` on the `FilmListing` component

The `Fave` component is expecting a prop, but one doesn't exist yet. Let's change that next.

You'll move the favorite toggle functionality all the way up to the `FilmListing` component - where the state for `filter` is.
- In the `FilmListing` component, create a `handleFaveToggle()` function. It doesn't need to do anything yet, but soon you will update the `faves` array when a film is favorited or unfavorited. The `handleFaveToggle` function should accept a film object as an argument (this will be the film that the user is toggling).


#### Step 5: Clone the `faves` state

To recap, the `faves` state is going to hold the user's favorite films. **Your goal is to, when the user clicks the icon to favorite or unfavorite a film, either add or remove the given film from the `faves` array.**

To do this, you need to call `setFaves` and give it the updated array (you can't just update it directly; otherwise React won't know to re-render the components to reflect the changes). To accomplish this, you'll make a copy of the existing faves array, update it, then pass the copy to `setFaves`.

First, just make a copy. Inside `handleFaveToggle`, use the JavaScript [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method to make a copy and store it in a `let` variable called `newFaves`. [`Why slice?`](https://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript). You can also use the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to make a copy. (For example `let newArray = [...oldArray];`).

#### Step 6: Find the index of the passed film in the `faves` array

Use the JavaScript [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method to store the position of the film in the array in a `const` variable called `filmIndex`.

If the film is found in the array, `indexOf()` will return an index value starting at `0`. Conversely, `indexOf()` will return `-1` if the element isn't found - if the film it's looking for is not currently in the `faves` array. Now, `filmIndex` will either be an index value starting at `0` or `-1`; -1 if the film isn't in the faves and a number greater than or equal to 0 if it is.

#### Step 7: Set up a conditional for adding or removing film from the `faves` array

Since this `handleFaveToggle()` function is designed to change the array of the user's favorites film, there are two options.
* If the film is already in their favorites, then when the user clicks the button, they want to remove it from their favorites. You need to take it out of the `newFaves` array.
* If the film is not in their favorites, then when the user clicks the button, they want to add it to their favorites. You need to add it to the `newFaves` array.

Write a conditional statement with the two cases. When adding a film to `faves`, log out `Adding [FILM NAME] to faves...` and when removing a film from `newFaves`, log out `Removing [FILM NAME] from faves...`.

> NOTE: There are a couple of different ways you can write this contitional, write whichever one makes sense to you and don't feel like you've done something wrong if you're conditional is different from the solution

#### Step 8: Change whether the film is in `faves` by using `setFaves` to update the state of `faves`

We'll be using `setFaves` to change our faves array. Remember, the syntax for `setStateItem` is: `setStateItem(newValueOfStateItem)`. 

For Example:
```jsx
const [deer, setDeer] = useState(['Dasher', 'Prancer', 'Vixen', 'Comet', 'Cupid', 'Donner', 'Blitzen']);

// Add the red-nosed reindeer
setDeer([...deer, 'Rudolph'])
```

To remove a film that's already in the `faves` array, use the [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method.

To add a new film to the `faves` array, just [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) it on to the end of the array or use [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)


#### Step 9: Use `setFaves` to update the state of `faves`

Now that you have updated the `faves` array, you need to call `setFaves` so React will re-render the appropriate components in the tree.

```js
setFaves(newFaves)
```

<details>
<summary> Check your function! </summary>

```jsx
const handleFaveToggle = film => {
  let newFaves = [...faves];
  const filmIndex = newFaves.indexOf(film);
  if (filmIndex < 0) {
    console.log(`ADDING ${film.title} TO FAVES`)
    newFaves = [...newFaves, film];
  } else {
    console.log(`REMOVING ${film.title} TO FAVES`)
    newFaves.splice(filmIndex, 1)
  }
  setFaves(newFaves)
}
```

</details>

#### Step 10: Pass the `handleFaveToggle` function to `FilmRow` through props

In the `FilmListing` component, you render one `FilmRow` component for each film in the `films` prop. You need to pass the `onFaveToggle` function down to each `FilmRow`.
 
<details>
  <summary>Your map function should look like something this:</summary>

```jsx
const allFilms = props.films.map((film, i) => (
  <FilmRow 
    film={film} 
    key={`filmRow-${i}`} 
    onFaveToggle={handleFaveToggle} 
  /> 
))
```

</details>

#### Step 11: Pass the `onFaveToggle` function to `Fave` through props

Now each `FilmRow` component has an `onFaveToggle` prop, but ultimately it's the `Fave` component that will call it. Note that in order to call `onFaveToggle`, we'll need to pass in *which* film as a parameter.

In the `FilmRow`, pass the `onFaveToggle` to the `Fave` component. Be sure to wrap it in an anonymous arrow function so you can include the current film as a parameter.

<details>
  <summary>The call to the <code>Fave</code> component should look something like this:</summary>
  
  <code> <Fave onFaveToggle={() => { props.onFaveToggle(props.film) }} /> </code>
</details>

#### Step 12: Pass `isFave` down from `FilmListing` through `FilmRow`

The `Fave` component is also expecting to receive a prop called `isFave`, so you need to pass `isFave` to the `Fave` component from `FilmRow`.

`FilmRow` doesn't know about the `faves` array, but its parent, `FilmListing`, does.

The `isFave` prop should be true or false depending on whether the film is in the `faves` array.

In `FilmListing`, when creating each `FilmRow`, pass a prop called `isFave` whose value uses the [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method to determine if the film is in the faves array or not.

<details>
  <summary>The call to the <code>FilmRow</code> component should now look similar to this:</summary>
  
  ```jsx
  const allFilms = props.films.map((film, i) => (
    <FilmRow 
      film={film} 
      key={`filmRow-${i}`} 
      onFaveToggle={handleFaveToggle}
      isFave={faves.includes(film)} 
    /> 
  ))
  ```
</details>


Now `FilmRow` is getting the `isFave` prop, but it doesn't need it. It only needs to pass it along (Prop drilling is fun!). In `FilmRow`, pass that prop through to `Fave`.

Now, `Fave` is getting the true or false boolean of whether a film is a favorite (`isFave`), as well as being passed the favorite toggle function (`onFaveToggle`).

`Fave` has everything it needs!

Look in your browser to see this working - the JavaScript console will log if something is added or removed from the user's favorites.

#### Step 13: Update `Faves` counter

Currently in the browser, the `faves` counter the user sees is always 0. You'll update the counter in the `FilmListing` to accurately show the number of faves in the array.

If you look at what's rendered in the `FilmListing` component, right now the faves counter is hardcoded to `0`. Replace that with the length of the `faves` array that is received through the props.

You now have favorites properly stored and available to all components, and you have a counter that accurately reflects that to the user.

Great job! Check it out in your browser.

### Task 3: Move the details event handler up component tree from `FilmRow`

In `FilmRow`, there's still the function to handle when a user clicks a row for more details. The `FilmDetails` component needs to know which movie to show details for though, so we'll need to move the `handleDetailsClick` to `App.js`, since it is the parent of both `FilmListing` AND `FilmDetails`. `handleDetailsClick` will change the `current` state.

* Move the `handleDetailsClick` definition to the `App` component.
* Pass `handleDetailsClick` to `FilmListing` as a prop.
* Pass `handleDetailsClick` to `FilmRow` as a prop.
* In the `onClick` of `FilmRow`, call `props.handleDetailsClick` in an anonymous function and pass it `props.film`.

For `handleDetailsClick` in the `App` component, just log to the console and set the `current` state to the passed film for now. You'll handle looking up film details later. Makesure you pass the `current` state as a `film` prop to the `FilmDetails` component.

### Task 4: Make the filter work on `FilmListing`

You have the `filter` state on `FilmListing`, but you still need to make it actually change the UI. You're not going to move the `filter` state because this filter only affects the `FilmListing`, not any other parts of the app.

Add a conditional in `FilmListing` so that if the `filter` state is set to `faves`, the listing only shows films in the faves array. Otherwise, it shows all films.

* In the `render` method, define a constant called `filmsToDisplay` and us a turnery statement to return all the films, or just the favorite films.
* Change your `allFilms` map function to be called on `filmsToDisplay` instead of `this.props.films`.


<details>
  <summary>Hint:</summary>
  <code>
    
    const filmsToDisplay = filter=== "all" ? props.films : faves;
    
    const allFilms = filmsToDisplay.map((film, i) => { .... })
    
  </code>
</details>

Try it out - you should be able to add films to your favorites and view just your favorites list by clicking that tab.

### Task 5: Adding Film Details

Now, you'll render the film details from the `current` state.

#### Step 1: Render the empty case for `FilmDetails`

When the app loads, there is no film selected to display in `FilmDetails`. When a user clicks on a film in the `FilmListing`, you want to fetch and show the details. Thus, there are two scenarios for `FilmDetails`:
- The empty scenario (no film selected)
- The populated scenario (a film selected)

You will store the mark up for each of these scenarios in their own constant variable:

```jsx
const filmInfo = (
  <div className="film-detail is-hydrated">
    <figure className="film-backdrop">
      <img src={`https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`} alt={`Screenshot from the film ${props.film.title}`} />
      <h1 className="film-title">{props.film.title}</h1>
    </figure>

    <div className="film-meta">
      <h2 className="film-tagline">{props.film.tagline}</h2>
      <p className="film-detail-overview">
        <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} className="film-detail-poster" alt={props.film.title} />
        {props.film.overview}
      </p>
    </div>
  </div>
)

const emptyInfo = (
  <div className="film-detail">
    <p>
      <i className="material-icons">subscriptions</i>
      <span>No film selected</span>
    </p>
  </div>
)
```

> NOTE: You are using `props`, so if you didn't add it as a parameter to your `FilmDetails` function, then your app will break.

#### Step 2: Conditionally render the current film

To start, create a new variable to hold on to your DOM tree. You'll conditionally assign the value to this variable depending on whether or not there's a film object passed in through the props.

Add this below the two declared `const` variables:

```js
let details = props.film.id ? filmInfo : emptyInfo
```

Now, the `return` statement of your `FilmDetails` function should finally look like this:

```html
return (
  <div className="film-details">
    <h1 className="section-title">Details</h1>
    {details}
  </div>
)
```
