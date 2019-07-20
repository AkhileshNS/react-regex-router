// External Modules
import React from 'react';

// Local Functions
import {customValidate} from './Router.functions';

const Router = props => {
  let res = null;

  if (!customValidate(props)) {
    return res;
  }

  let {currRoute = "", routes = []} = props;

  for (let i=0; i<routes.length; i++) {
    let {name, component: Component, props: Props = {}} = routes[i];
    if (name.test(currRoute)) {
      res = <Component router={{
        ...Props,
        currRoute
      }} />;
      break;
    }
  }

  return res;
}

export default Router;