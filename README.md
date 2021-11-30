Hi! welcome to the first state management session!

third exercise - Filters characters by query params (thinking out side the box).

in characters folder (path - src/screens/characters/index.js)
you can find that we replaced the filters component and useFilters custom hook
with CharactersFiltersQueryParams and useFiltersByParams hook.

the main reason for this is to show other solutions and possibly better solution
on how we can manage the state with using all recourses that available for us

inside the CharactersFiltersQueryParams component you can find that we use
a new hook useSearchParams imported from react-router-dom - our routing library

by using useSearchParams we can update the URL of the application to save our state
with query parameters

query parameters are key value pairs that we can set in the url
and we can access this values from any place in the app and get information
of the state.
example:
www.somesite.com/?myName=yoni
and we can access myName and get yoni via js functions or useSearchParams hook

also many API's use query parameters to enable passing dynamic data
for example
https://rickandmortyapi.com/api/character?limit=10

here we pass a limit param to say to the API that we want only 10 characters

useSearchParams -
https://dev.to/ngprnk/how-to-use-usesearchparams-with-react-router-v6-4g5h

OUR GOAL -
wiring up the useSearchParams hook inside CharactersFiltersQueryParams
and inside useFiltersByParams hook
and make the filters work again!
