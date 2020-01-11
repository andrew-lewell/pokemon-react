# Pokemon Teams!

### Run `npm start` to start the API at :3000 and the React app at :3001

Here you're going to help us keep track of Pokemon
trainers at Flatiron School. Through their journey,
**a Pokemon trainer can only have 6 Pokemon for their
team**. If they want to add another Pokemon, they must
release one of their Pokemon first.

![Showing how the application runs from loading, adding Pokemon to a team and also releasing one](/pokemon_teams.gif)

## Requirements

- When a user loads the page, they should see all
  trainers, with their current team of Pokemon.
- Whenever a user hits `Add Pokemon` and they have
  space on their team, they should get a new Pokemon.
- Whenever a user hits `Release Pokemon` on a specific
  Pokemon team, that specific Pokemon should be released from
  the team.

## Suggested HTML

A Pokemon Card can be placed within the `<main>` tags.

### Pokemon Trainer Card

```
<div class="card">
  <p>Prince</p>
  <button>Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release">Release</button></li>
    <li>Zachariah (Ditto) <button class="release">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release">Release</button></li>
    <li>Rosetta (Eevee) <button class="release">Release</button></li>
    <li>Rod (Beedrill) <button class="release">Release</button></li>
  </ul>
</div>
```

## API

### Getting All Trainers and their Pokemon

```
#=> Example Request
GET /trainers

#=> Example Response
[
  {
    "id":1,
    "name":"Prince",
    "pokemons":[
      {
        "id":140,
        "nickname":"Jacey",
        "species":"Kakuna",
        "trainerId":1
      },
      {
        "id":141,
        "nickname":"Zachariah",
        "species":"Ditto",
        "trainerId":1
      },
      // ...
    ]
  }
  // ...
]
```

### Adding a Pokemon

```
#=> Example Request
POST /pokemons

Required Headers:
{
  'Content-Type': 'application/json'
}

Required Body:
{
  trainerId: 1
}

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainerId":1
}
```

### Releasing a Pokemon

```
#=> Example Request
DELETE /pokemons/:id

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainerId":1
}
```
