import React from "react";
import { connect } from "react-redux";
import foo from "./actions"

const myComponent = (props) => {
  return (
    <div onClick={props.onClick}> {props.value}</div>
  );
}

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: function () {
      return dispatch(foo());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(myComponent);
