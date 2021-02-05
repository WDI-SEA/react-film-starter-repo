# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) You Do: Film Exercise

## Your Mission

Stop any project you currently have running; let's go back to the film application that you've started. You can run the app with `npm start`.

You're almost finished! Now, You need to:
- Replace info from `TMDB.js` with results from an api call to TMDB.

![](images/bladerunner.png)

### Task 1: Adding the API call

API calls in React are handled using whatever AJAX library you want; [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)(provided by modern browsers) or [Axios](https://github.com/axios/axios) are some of the most common. 

> Note: For official documentation on how to handle AJAX calls in react, [visit the docs](https://reactjs.org/docs/faq-ajax.html)

You already have a function where you want the API call to go (`handleDetailsClick` - when a user clicks for details of a movie, you'll call the API to get those details), so your api call will work inside that function. You've set up the rest of your app to make this transition nice and smooth.

React has the ability to read `.env` files already and `fetch` is built into js, so we're going to be using those two.

#### Step 1: Set up the API key

This step seems complicated, but it isn't! Just take it one step at a time. Because TMDB isn't a public API, you'll need to get an API key to add to your axios call; then, you'll want to make sure to keep the key in a safe spot.

- To gain access to the TMDB API, you'll need to get an API key from [TMDB](https://www.themoviedb.org).
  - TMDB only gives API keys to users with accounts, so you'll have to sign up first (it's free). However, it will ask for your phone and address.
  - Then, request an API key on your profile page ([further instructions](https://developers.themoviedb.org/3/getting-started)).
  - Once you have your API key, you need to include it in your app. Since you **never want to store app secrets in your repository**, you'll use the [`dotenv`](https://github.com/motdotla/dotenv) package to keep the API key in a local file.

  - Create a new file at the root of your project called `.env.local` (accept the system warning).
  - In your `.env.local` file, add the line `REACT_APP_TMDB_API_KEY=<Your TMDB API v3 KEY>`

*Note: The `.env.local` file is in your `.gitignore` by default when you create an app with `create-react-app`, so now your secret will never leak into your repository. It's important to note that since this is a front-end application, the built JavaScript will contain the key, which means end-users will be able to see it. However, that's fine for this practice app, since you'll only be running it locally. Putting it in a `.env` file is to protect it when pushing up to Github*

- Now you have an API key saved in an environment variable. Now, point your application to it: replace `'<REPLACE_THIS_WITH_TMDB_API_KEY>'` with `process.env.REACT_APP_TMDB_API_KEY`.

Your secrets are now set up!

#### Step 2: Make a `const` called `url` with the API's URL

Now that you have the API key to call for movies, let's go back to making that call.

In your `App.js`, we're going to make a `useEffect` to call our api and populate our films with the results.
We're going to define a constant for our URL query

```JavaScript
const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
```

This is the URL to which you'll send your request to get a list of popular films. You are passing the `TMDB.api_key` as query string parameters. Go ahead and just `console.log(popularFilmsUrl)` underneath its declaration to make sure that you're getting a url.

> NOTE: You can see your api key!! That's okay for development (we put it in a `.env` so it won't be shown on github), but what you'll want to do in production is have that API call be done on your server and the results sent to your React front-end.

#### Step 3: Make the API call

Now that you have the API key and URL set up, it's time to set up our useEffect!
Underneath our state variables, we're going to use this React Hook to call the api. We'll move our `popularFilmsUrl` into the anonymous function and pass the hook an empty array as the second parameter to makes sure it only gets called once.

A reminder on the structure of `useEffect`

```jsx
useEffect(() => {
  console.log("I love it when this component gets rendered!")
  fetch('https://api.kanye.rest')
  .then(response => response.json())
  .then(jsonDeets => {
    setWisdom(jsonDeets.quote)
  })
}, [])
```

Instead of the [Kanye Rest](https://github.com/ajzbc/kanye.rest) url, we'll use our `popularFilmsUrl`. Then once we get our `jsonDeets`, we'll just console log them.

> NOTE: remember to import `useEffect`

<details>
<summary>Check your work</summary>

```jsx
useEffect(() => {
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  fetch(popularFilmsUrl)
  .then(response => response.json())
  .then(jsonDeets => {
    console.log(jsonDeets)
  })
}, [])
```
</details>

Now, when your page loads, you should get a console log of the response from your api!

#### Step 4: Set the state when the API call completes

Let's now set your `films` state to be the results you get back from TMDB. You should have 20 results that you can play with now!

#### BONUS: Play around with the api!

Look at the [TMDB v3 API docs](https://developers.themoviedb.org/3/getting-started/introduction) and make some different api calls. What would be the url if you wanted to get top rated films? What would your url look like if you wanted more results?

## Taking it further

Here are some optional things you can do to deepen your knowledge and take this app further:

- Go through the CSS and see how the app is styled (it uses both flexbox and CSS Grid).
- Show the `fave` state of a film on `FilmDetails`.
- Move the filters into a `FilmListingFilter` component.
- Add a textarea for a review to each film detail and save that on the film object.
- Show an icon in `FilmListing` for all films with reviews.
- Add any other features you can think of!
