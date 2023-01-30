//When to use useLayoutEffect
// i. Works exactly like useEffect except that it's executed before the UI is updated
// useEffectLayout is only useful when you don't want the user to see the flicker as the dom updates
// Always use useEffect and only switch to useLayoutEffect when it's really necessary
