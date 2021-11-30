Hi! welcome to the first state management session!

fifth exercise - update app to use context for global state

You can read about context in react official website
https://reactjs.org/docs/context.html

you can find new folder src/context
there you can find an almost full context implementation

make the functions in the context work

then in src/main wrap the routes with the contextProvider
that way both our component will have access to the characterContext

after that you can find two new hooks
useFetchCharacterByIdWithContext and useFetchCharactersWithContext
update the hooks to use context instead of local state
you can use the special useCharacterContext hook we created
and get from there the functions that you created inside the context

and last step in characters page and the character page make use
of the context and get all the data needed to make the pages works again

thats it!
