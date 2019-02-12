## What is a Component?
- reusable little packages that modularize both functionality and presentation

## Where do we get these functions from? React.Component!

## Component phases: (it's a matrix)

                    mounting    |    updating    |    unmounting
    render      |
    pre-commit  |
    commit      |




























    


## Mounting (in render and commit)
- constructor(props)
  + set initial state, bind functions

- getDerivedStateFromProps(props, state)  //  [repl: componentWillReceiveProps]
  + sync the state to props

- render()  //  REQUIRED!
  + keep it pure, and return one of either a React element, string/numbers, null, or booleans.

- componentDidMount()
  + cause side effects, add event listeners, interact directly with the DOM


## Updating (across all)
- shouldComponentUpdate(nextProps, nextState)
  + control if your component should re-render by returning true or false

- getSnapshotBeforeUpdate(prevProps, prevState)
  + grab any data you want to have access to in componentDidUpdate

- componentDidUpdate(prevProps, prevState, snapshot)
  + update the DOM based on prop or state changes, cause side effects.

## Unmounting (in commit)
- componentWillUnmount()
  + cancel any outgoing request, remove event listeners, remove timers
