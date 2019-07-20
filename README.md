
# React Regex Router

![GitHub package.json version](https://img.shields.io/github/package-json/v/AkhileshNS/react-regex-router.svg)
![GitHub issues](https://img.shields.io/github/issues/AkhileshNS/react-regex-router.svg)
![GitHub](https://img.shields.io/github/license/AkhileshNS/react-regex-router.svg)

react-regex-router is a very simple router component for React applications which uses regex to determine the component to be rendered

## Getting Started

First install the component via npm or yarn:

```npm
npm install --save react-regex-router
```

```yarn
yarn add react-regex-router
```

Then import into to your project and set it up like so:

```javascript
import React, {useState} from 'react';
import Router from 'react-regex-router';

// Components you want to render at router
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

const App = () => {
  let [currRoute, setRoute] = useState("first");
  // Call setRoute to "first", "second" or "third" anywhere in
  // your application to change the current rendered route
  // You can also use redux or mobX variables instead

  return <div className="app">
    <Router
      currRoute={currRoute}
      routes={[
        {
          name: /^First$/i, // The regex to test for
          component: FirstComponent // Component to render
        },
        {
          name: /^Second$/i,
          component: SecondComponent,
          props: { // Pass any props to the rendered component
            id: 2
          }
        },
        {
          name: /^Third/i,
          component: FirstComponent
        }
      ]}
    />
  </div>;
}

export default App;
```

The above code can be used to setup a quick Router instance with your own specified routes

## Working

The react-regex-router works by simply taking each "name" in each route of "routes" and testing it against the "currRoute", returning the first matching result.

So for somthing like :-

```javascript
{
  currRoute: "hello",
  routes: [{
    name: /^hello$/, // /^hello$/i.test("hello") = true
    component: SomeComponent, // this gets rendered
  },{
    name: /^hello/,
    component: SomeOtherComponent
  }]
}
```

And in the same occurance, if currRoute was changed from "hello" to "hello world", the second component (i.e SomeOtherComponent) would get rendered.

You can also pass props to a component by adding the "props" property to a route :-

```javascript
{
  currRoute: "hello",
  routes: [{
    name: /^hello$/, // /^hello$/i.test("hello") = true
    component: SomeComponent, // this gets rendered
    props: { // id is passed to SomeComponent
      id: 2
    }
  },{
    name: /^hello/,
    component: SomeOtherComponent
  }]
}
```

The passed properties are available via a "router" property in the rendered component's props. (By default, the currRoute is also passed)

```javascript
import React from 'react';

const SomeComponent = props => {
  console.log(props.router);
  /*
    prints {
      currRoute: "hello",
      id: 2
    }
  */

  return <div></div>;
}

export default SomeComponent;
```

Generally speaking it is recommended to store currRoute in some central state management library like **Redux** or **MobX** so it is accessible across your App to change. But it is possible to use the passed properties "setRoute" to change the route if you want to

## Router Component

| Property  | Type   | Default | Required | Info                                                                                                                                                                                                                                                                                           |
|-----------|--------|---------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| currRoute | string | ""      | Yes      | Used to test against for determining the component to be rendered                                                                                                                                                                                                                              |
| routes    | array  | []      | Yes      |  Used to pass a list of components and the regexps that will be used to determine which of them to render. |

## Please Note

As you can probably already tell, this component was meant to be a simple and quick solution for routing components, as such it doesn't much advanced features like changing the browser url (for SEO) etc. For that we recommend using [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/AkhileshNS/react-regex-router/blob/master/LICENSE) file for details
