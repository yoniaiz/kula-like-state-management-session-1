Hi! welcome to the first state management session!

second exercise - Filters characters by their properties.

in characters folder (path - src/screens/characters/index.js)
you can find useFilters custom hook and CharactersFilters component

we have two steps for this exercise

1. In the CharactersFilters we should handle a local state
   recommended to use the use reducer hook (optional).

   we should handle the state update in handleChange function
   in onReset function we should reset the state
   in handleApply function we should call the onFiltersApply function
   that we will pass as a prop to the component

2. In the useFilters hook we should create a state for the current selected filters
   and update it in the onFiltersApply

after wiring up the hook and the component we should see the result and
be able to filter them
