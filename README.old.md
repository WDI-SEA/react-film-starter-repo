# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Film Lab

## What is this?

This is a repo that houses the base code for a React.js film application. By the final stage of the project, the film app will have a list of all the recent popular movies; a user can scroll through them, click one for more details, and save it to their favorites.

![OMDB Landing page](https://i.imgur.com/R8qsuaS.png)

## Getting this repo setup

We have are going to bootstrap this project by using `create-react-app` and adding some boiler plate code.

* fork and clone this repo
* cd into the clone repo on your local machine
* run `npx create-react-app .` to create a react app in the directory you just cloned
* add the following line to in the `<head>` tag of `./public/index.html`, just above the `<title>` tag, this will give us access to [Google's Material Icons](https://fonts.google.com/icons?icon.style=Outlined)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```


* replace the code in the file `./src/index.css` with the following:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
}

html,
body,
#root {
  height: 100%;
  overflow: hidden;
}

img {
  display: block;
  max-width: 100%;
}

figure {
  margin: 0;
}

.film-library {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: stretch;
  justify-content: space-around;
}

.film-list {
  position: relative;
  flex: 1 0 33.333333%;
  height: 100%;
  padding: 3.6em 0 0;
  overflow-y: scroll;
  background-color: #f0f0f0;
}

.film-list > .section-title {
  width: 33.333333%;
  left: 0;
}

.film-details {
  flex: 0 1 66.666666%;
  background-color: #f0f0f0;
}

.film-row {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr;

  margin-bottom: 0.2rem;
  font-size: 0.5em;
  background-color: white;
}

.film-row:hover {
  cursor: pointer;
}

.film-row-fave {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  font-weight: 800;
  padding: 0 0.2em;
  background-color: transparent;
  transition: all 0.1s linear;
}

.film-row-fave.remove_from_queue {
  background-color: rgba(32, 178, 170, 0.75);
}

.film-poster {
  margin: 0;
}

.film-summary {
  padding: 0.5em 1.5em;
  background-color: white;
}

.film-summary > h1 {
  margin-bottom: 0.35em;
}

.film-summary > p {
  font-size: 1.6em;
  line-height: 1.35;
  font-weight: 200;
  margin-top: 0;
}

.section-title {
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #777;
  color: white;
  text-align: center;
  font-size: 0.75em;
  padding: 0.5em;
  margin: 0 0 0.1em;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.film-list-filters {
  position: fixed;
  top: 1.6em;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 33.333333%;
}

.film-list-filter {
  flex-basis: 50%;
  flex-grow: 1;
  background-color: #ccc;
  color: white;
  text-align: center;
  font-size: 0.75em;
  padding: 0.5em;
  margin: 0 0 0.1em;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  cursor: pointer;
}

.film-list-filter:hover {
  background-color: hsl(177, 70%, 46%);
}

.film-list-filter.is-active {
  background-color: lightseagreen;
}

.section-count {
  display: inline-block;
  background-color: white;
  color: black;
  text-align: center;
  padding: 0.25em 0.25em 0.25em 0.5em;
  border-radius: 20%;
  margin-left: 0.5em;
  font-weight: bold;
}

.film-details {
  position: relative;
  overflow-y: scroll;
}

.film-details > .section-title {
  left: 33.333333%;
  width: 66.666666%;
}

.film-detail {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  margin-bottom: 2em;
}

.film-detail > p {
  text-align: center;
}

.film-detail > p > .material-icons {
  display: block;
  font-size: 3em;
  margin-bottom: 0.25em;
}

.film-detail.is-hydrated {
  display: block;
}

.film-backdrop {
  position: relative;
}

.film-title {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  color: white;
  font-size: 4em;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background: linear-gradient(180deg, transparent, rgba(0,0,0,0.5));
  padding: 0.25em 1.5rem;
}

.film-tagline {
  line-height: 1.2;
}

.film-detail-poster {
  float: right;
  width: 20%;
  margin-left: 2em;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
}

.film-meta {
  padding: 1em 1.5em;
  line-height: 1.45;
  color: white;
  background-color: lightseagreen;
}
```

* `touch ./src/TMDB.js` and add the following to it:

```javascript
const TMDB = {
  api_key: '<REPLACE_THIS_WITH_TMDB_API_KEY>',
  films: [
	{
	  "id": 346364,
		"title": "It",
		"poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
		"backdrop_path": "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
		"overview": "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
		"release_date": "2017-09-05"
	},
	{
	  "id": 343668,
		"title": "Kingsman: The Golden Circle",
		"poster_path": "/pKESfn2Pdy0b7drvZHQb7UzgqoY.jpg",
		"backdrop_path": "/vLsw44dKHp1LhGCmcv3Pv6LXgEH.jpg",
		"overview": "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
		"release_date": "2017-09-20"
	},
	{
	  "id": 339403,
		"title": "Baby Driver",
		"poster_path": "/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
		"backdrop_path": "/goCvLSUFz0p7k8R10Hv4CVh3EQv.jpg",
		"overview": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
		"release_date": "2017-06-28"
	},
	{
		"id": 335984,
		"title": "Blade Runner 2049",
		"poster_path": "/cbRQVCia0urtv5UGsVFTdqLDIRv.jpg",
		"backdrop_path": "/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
		"overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
		"release_date": "2017-10-04"
	},
	{
	  "id": 381283,
		"title": "mother!",
		"poster_path": "/qmi2dsuoyzZdJ0WFZYQazbX8ILj.jpg",
		"backdrop_path": "/uuQpQ8VDOtVL2IO4y2pR58odkS5.jpg",
		"overview": "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
		"release_date": "2017-09-13"
	},
	{
	  "id": 374720,
		"title": "Dunkirk",
		"poster_path": "/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
		"backdrop_path": "/eEMsuUV1ZCiruQwzUE3BYpqZCwr.jpg",
		"overview": "The miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26th and June 4th 1940, during the Battle of France in World War II.",
		"release_date": "2017-07-19"
	},
	{
	  "id": 415842,
		"title": "American Assassin",
		"poster_path": "/o40BAqdTQHiN3cUfpgieDUYI71z.jpg",
		"backdrop_path": "/puKZWmBIpuEMwGCn2hZkublG1rO.jpg",
		"overview": "Following the murder of his fiancée, Mitch Rapp trains under the instruction of Cold War veteran Stan Hurley. The pair then is enlisted to investigate a wave of apparently random attacks on military and civilian targets.",
		"release_date": "2017-09-14"
	},
	{
	  "id": 390043,
		"title": "The Hitman's Bodyguard",
		"poster_path": "/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg",
		"backdrop_path": "/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg",
		"overview": "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
		"release_date": "2017-08-16"
	},
	{
	  "id": 316154,
		"title": "The Bad Batch",
		"poster_path": "/7o14VaMphEIzPwzeW6FP3A6zb4W.jpg",
		"backdrop_path": "/aQ06MnEDLh9X3ZOtY21UD2XB197.jpg",
		"overview": "In a desert wasteland in Texas, a muscled cannibal breaks one important rule: don’t play with your food.",
		"release_date": "2017-06-23"
	}
  ]
}

export default TMDB;
```

* replace the contents of `./src/App.js` with the following:

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

You are Good to Go!

