# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) You Do: Film Exercise - Moving From Class-based Components to Functional

## Your Mission

Stop any project you currently have running (you can run `pkill node` to clear out all node processes); let's go back to the film application that you've started. You can run the app with `npm start`.

Your goal today is to translate this app from class-based components to functional components. The world of React moves quickly and often you'll find code written in 2018 or 2019 that still uses class based components. 
React now suggestst that you don't create any new components using class-based components, moving completely to Functional components and Hooks; class based components will still work, but are officially legacy code now.
Knowing how class-based components work is important to understanding current React standards. It is also important for developers to be able to work in these older code-bases and refactor them to be more up-to-date.

That is what we'll be practicing here! We'll update our components in three stages:
1. Components with no props and no state (`App and `FilmDetails`)
2. Components with props, but no state (`FilmPoster` and `FilmRow`)
3. Components with state (`Fave` and `FilmListing`)

### Tasks - Part 1: Components with no props and no state

#### Step 1: Anatomy of a functional Component

The functional component, overall, has a very similar look to the class-based component:
* Imports on top
* Component declaration
* Exporting the component

However, there are a few key differences to be aware of.

When declaring a class-based component, we need it to be a class. As a class, this component inherits all the sweet class functionality of React's `Component` class. So when we import React, when using a class-based component, we also have to import `{ Component }`

```jsx
import React, { Component } from 'react';
```

The next part is to declare our component. In order to make class-based components work, they have to inherit all the functionality of a React component, so our component is declared as a `class` that `extends Component`.

```jsx
class SuperSweetComponent extends Component {
  ...
}
```

Lastly, in order to make our class actually show some content, we have to declare what the `render()` function returns, what kind of HTML we want to show up on the page.

```jsx
class SuperSweetComponent extends Component {
  render() {
    return (
      <div className="super sweet">
        <p>This is my favorite Component on the Citadel!</p>
      </div>
    );
  }
}
```

Now that we've had a refresher on each part of a class-based component, it will be easier to understand what gets taken out with a functional component. 

A functional component is just that, a function. What is returned in this function is what gets rendered. That means we only need to import `React` (we aren't using the `Component` class) and there's no need for a `render()` function. Look at how my `SuperSweetComponent` is declared as a functional component:

```jsx
import React from 'react';

function SuperSweetComponent() {
  return (
    <div className="super sweet">
      <p>This is my favorite Component on the Citadel!</p>
    </div>
  );
}

export default SuperSweetComponent;
```

#### Part 2: Change `App` and `FilmDetails`

Now that you know how those two components are different, change our two basic components to functional components. 
To check if you've done it right, run your program, go to your localhost, and see if the functionality of your app has changed. If it works the same as you left it, then you're good to go!

### Part 3: Components with props, but no state

When we change class-based components to functional components, we might wonder, "Where do the props come in? And how do we access them?" Since functional components are just functions being ran, we can think, "how do I give any function information?" The answer? Parameters! That's right, folks! Functional components take an optional parameter called `props`! 
> This parameter is optional because a functional component might not take props, like `App`

Let's look at `FilmPoster.js`. Change it to a functional component like you did to `App` and `FilmDetails`, but this time, give it the parameter `props`. If you try to run your server, you should get an error saying: "TypeError: Cannot read property 'props' of undefined". That is because the `this` keyword is no longer referring to the contents of a class, `this` is undefined, so it can't have a `props` value. Anywhere your component uses `this.props`, change it simply to `props`, to reference the parameter.

<details>
<summary>Check your work!</summary>

```jsx
import React from 'react';

function FilmPoster(props) {
  return (
    <img src={props.poster_path} 
        alt={`Poster of the film ${props.title}`} 
    />
  );
}

export default FilmPoster;
```
</details>

The next thing we need to translate is our functions. In `FilmRow`, we have a function to handle the click event for each row. Translating this is fairly simple, because the component is a function, we can just declare `handleDetailsClick` as a local variable and then call it later on.
For example:

```jsx
function DogCard(props) {
  const handleFaveClick = dogDeets => {
    // add fave stuff here
    console.log(`You've favorited ${dogDeets.name}`)
  }

  return (
    <img src={props.dog.img} alt={props.dog.name}>
    <h3>{props.dog.name}</h3>
    <div className="add-fave" onClick={() => handleFaveClick(props.dog)}>
      <p>Add {props.dog.name} to your faves!</p>
    </div>
  )


}
```

<details>
<summary>Check your work!</summary>

```jsx
import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

function FilmRow(props) {
  const handleDetailsClick = film => {
    console.log(`Fetching movie details for ${film.title}`)
  }

  return (
    <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
      <FilmPoster 
        poster_path={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`}
        title={props.film.title}
      />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{props.film.release_date.substr(0,4)}</p>
      </div>
      <Fave />
    </div>
  );
}

export default FilmRow;
```

</details>

### Part 4: Components with state

We have two more components to transfer over: `Fave` and `FilmListing`. They both use state so we'll have to translate that into `useState` hook. Let's start with `FilmListing`.

Translate it to a functional component by:
* Removing the import of `{ Component }`
* Change your component declaration from `class` to `function`
* Add props as a parameter
* Take out the `render` function.
* Take out all references to `this.props` and replace it with just `props`
* Refactor your state to use the react hook `useState`
* Change all instances of `this.state` to reference the relevant variable

#### `Fave` with bonus

Turn `Fave` into a functional component the same way you did with `FilmListing`. The bonus comes if you made a variable to store the icon based on state:

```jsx
import React, { Component } from 'react';

class Fave extends Component {
  constructor() {
    super()
    this.state = {
      isFave: false,
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    console.log("handling fave click!");
    this.setState({isFave: !this.state.isFave})
	}


  render() {
    let icon = this.state.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div className={`film-row-fave ${icon}`} onClick={this.handleClick}>
        <p className="material-icons">{icon}</p>
      </div>
    );
  }
}

export default Fave;
```

We want state to hold variables that are mutable, so as a bonus, we'll make make `icon` a state variable.
The first instinct might be to `setIcon` right after `setIsFave` in our `handleClick` function and simply add the ternary statement in there, but that will read the older version of `isFave` and be reversed. The best way to handle this change is to `useEffect` to set `icon` and have it track `isFave`.

For example: 

```jsx
import React, { useState, useEffect } from 'react';

function Heart(props) {
  const [liked, setLiked] = useState(false);
  const [icon, setIcon] = useState('like')

  useEffect(()=>{
    setIcon(liked ? 'unlike' : 'like')
  }, [liked])

  const handleClick = (e) => {
    e.stopPropagation()
    setLiked(!liked)
  }

  
  return (
    <div className={`heart ${icon}`} onClick={handleClick}>
      <p className="icons">{icon}</p>
    </div>
  );
}

export default Heart;
```

<details>
<summary> Stumped? Check your work </summary>

```jsx
import React, { useState, useEffect } from 'react';

function Fave(props) {
  const [isFave, setIsFave] = useState(false);
  const [icon, setIcon] = useState('add_to_queue')

  useEffect(()=>{
    setIcon(isFave ? 'remove_from_queue' : 'add_to_queue')
  }, [isFave])

  const handleClick = (e) => {
    e.stopPropagation()
    console.log("handling fave click!");
    setIsFave(!isFave)
  }

  
  return (
    <div className={`film-row-fave ${icon}`} onClick={handleClick}>
      <p className="material-icons">{icon}</p>
    </div>
  );
}

export default Fave;
```

</details>