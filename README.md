Hi! welcome to the first state management session!

first exercise - show all Rick and Morty characters.

in characters folder (path - src/screens/characters/index.js)
we try to fetch all characters inside the useFetchCharacters custom hook

please go into the useFetchCharacters and handle the characters + status state and return it back from the hook
so we could see the components in the screen

the hook already fetches the characters in the useEffect hook
the characters should be const data.results

DoD

1. create a state for characters (initially should be an empty array)
2. create a state for status - status will have four possible state -

- idle - the initial state of the status
- loading - when we try to fetch the characters
- success - when we successfully fetched the characters and updated the characters state
- error - when we got error from the api

after updating the state correctly we should see the characters!
