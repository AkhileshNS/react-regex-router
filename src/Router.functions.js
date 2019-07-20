// External Modules
import React from 'react';

export const customValidate = props => {
  if (!("currRoute" in props)) {
    console.error('Prop "currRoute" must be set (react-regex-router)');
    return false;
  }
  if (!("routes" in props)) {
    console.error('Prop "routes" must be set (react-regex-router)');
    return false;
  }
  if (Object.prototype.toString.call(props.currRoute).split(" ")[1].slice(0, -1).toLowerCase()!=="string") {
    console.error('Prop "currRoute" nust be a string (react-regex-router)');
    return false;
  }
  if (Object.prototype.toString.call(props.routes).split(" ")[1].slice(0, -1).toLowerCase()!=="array") {
    console.error('Prop "routes" nust be an array (react-regex-router)');
    return false;
  } 
  props.routes.forEach(route => {
    if (!("name" in route)) {
      console.error('Each route in "routes" should have a "name" property (react-regex-router)');
      return false;
    }
    if (!("component" in route)) {
      console.error('Each route in "routes" should have a "component" property (react-regex-router)');
      return false;
    }
    if (Object.prototype.toString.call(route.name).split(" ")[1].slice(0, -1).toLowerCase()!=="regexp") {
      console.error('The "name" property in each route in "routes" must be a RegExp (react-regex-router)');
      return false;
    }
    if (!React.isValidElement(<route.component />)) {
      console.error('The "component" property in each route in "routes" must be a component (react-regex-router)');
      return false;
    }
    if ("props" in route && Object.prototype.toString.call(route.props).split(" ")[1].slice(0, -1).toLowerCase()!=="object") {
      console.error('The "props" property in each route in "routes" must be an object (react-regex-router)');
      return false;
    }
  });
  return true;
}