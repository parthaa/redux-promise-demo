export default function (state = { value: "bara" }, action) {
  console.log(action)
  console.log(state)

  if (action.type === "FOO_FULFILLED") {
    return { value: action.payload }
  } else {
    return state;
  }
} 