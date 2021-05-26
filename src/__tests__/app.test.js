  
import React from 'react';
import App from '../app.js';
import Result from '../components/results'
// import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('should render results of API call', async () => {
  const people = [
    { "name": "Luke Skywalker", "height": "172", "mass": "77", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", 
    "birth_year": "19BBY", "gender": "male", "homeworld": "http://swapi.dev/api/planets/1/", 
    "films": [ "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/" ], 
    "species": [], "vehicles": [ "http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/" ], 
    "starships": [ "http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/" ], "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", "url": "http://swapi.dev/api/people/1/" }, 
    { "name": "C-3PO", "height": "167", "mass": "75", "hair_color": "n/a", "skin_color": "gold", "eye_color": "yellow", "birth_year": "112BBY", 
    "gender": "n/a", "homeworld": "http://swapi.dev/api/planets/1/", 
    "films": [ "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/4/", "http://swapi.dev/api/films/5/", "http://swapi.dev/api/films/6/" ], 
    "species": [ "http://swapi.dev/api/species/2/" ], "vehicles": [], "starships": [], "created": "2014-12-10T15:10:51.357000Z", 
    "edited": "2014-12-20T21:17:50.309000Z", "url": "http://swapi.dev/api/people/2/" }
  ]


  render(
      <>
  <Result count={1} result={people[0]}  />
  <Result count={2} result={people[1]}  />
  </>);

  // screen.debug();

  const items = screen.getAllByRole('p');

  console.log(items);
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Luke Skywalker');
  expect(items[1]).toHaveTextContent('Darth Vader');
  expect(items[1]).toContainHTML('<a href="http://swapi.dev/api/people/4/">Darth Vader</a>')
});