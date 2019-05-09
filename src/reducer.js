import {FOO_TYPE} from "./actions"
import typeToReducer from 'type-to-reducer';

const fooReducer = typeToReducer({
  [FOO_TYPE]: {
    PENDING: () => ({
      value: "Pending...."
    }),
    REJECTED: (state, action) => ({
      isRejected: true,
      error: action.payload
    }),
    FULFILLED: (state, action) => ({
      isFulfilled: true,
      value: action.payload
    })
  }
}, {value: "Initial Value"});

export default fooReducer;