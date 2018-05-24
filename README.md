# Curriculum Proposal: Prime Academy React

This proposal outlines a curriculum sequence for learning React.js and its ecosystem. It is aimed at students at Prime Digital Academy in Minneapolis. A primary argument of this proposal is that Prime students could learn React _instead_ of learning about AngularJS, the last front-end framework that Prime students currently cover. The proposal includes an integration plan with other curriculum elements that students currently learn in the context of AngularJS apps—including OAuth2 authentication, build automation, and remote deployment.

The proposal is written as a tutorial, though the primary audience is instructors, not students, and I expect that those instructors will tailor the content to their own style. This tutorial is divided into three independent demonstration projects ("front-end", "full-stack", and "final"), and each project is divided into topical sections. Each section will have its own repository branch and accompanying README.

`front-end-intro` (proposed):

* Explains the benefits of component-based webpage architecture.
* Illustrates the basic elements of a React component class, and its representation as a DOM element.
* Explains the `constructor()` and `render()` methods and JSX—including how JSX can incorporate JS logic.
* Explains component state, the `setState()` method, and the requirement that `setState()` be used outside the constructor. (Optional: Explain the difference between object & functional `setState`.)
* Shows how Chrome React plugin can be used to monitor component state.
* Illustrates how React components can be nested.
* Explains props. Shows primitives, objects, functions and methods passed as props. (Shows that methods passed as props must be bound to local class `this` in order to modify `this.state`.)
* Demonstrates the one-way-binding cycle of component state, and the virtual DOM.

`front-end-build` (proposed):

* Explains babel, webpack, and automated build tools.

`full-stack-basic` (COMPLETE):

* Introduces create-react-app (CRA) as a build tool.
* Describes how to develop a Node.js server and benefit from create-react-app at the same time, and explains the configuration settings required to do it.
* Introduces lifecycle methods, using `componentDidMount()` as a first example.
* Guides you through constructing an extremely simple full-stack Node/Express/React project with CRA.

`full-stack-intermediate` (in progress):

* Demonstrates how the Node.js server can coordinate requests to external data sources, without the need for configuring CORS permissions on the client side. (We'll be using live earthquake data from the U.S. Geological Survey as our primary data source.)
* Explores the difference between stateful and functional stateless components in React.
* Illustrates `componentDidUpdate()` and checking state updates.
* Illustrates front-end routing (using `react-router`?) and the browser `history` object.
* Describes testing, using Jest. Students write a couple of tests.
* Walks students through remote deployment to Heroku.

`final-auth` (proposed):

(Auth is complicated enough that it probably shouldn't be built on top of the "full-stack" project—it needs its own.)

* Explains browser session management and cookies. Shows how to use the Chrome development console to spy on cookies.
* Explains authentication and authorization, the OAuth2 spec, and 'pseudo-authentication' using OAuth2 tokens.
* Introduces Passport.JS as an authentication library for Express, and a previously-taught database (or Redis) for session storage.
* Explains difference between local and third-party identity management.
* Illustrates security expectations for local auth strategies: password salting, hashing, encryption (using bcrypt as the implementation library).
* Constructs authorization and identity-check routes on the back end.
* Coordinates front-end content with auth. Illustrates how to manage route permissions based on back-end auth state.

`final-state-mgmt` (proposed):

* Describes the challenge of "prop-drilling", and of maintaining the cycle of one-way-binding as props are passed through a long component tree.
* Introduces concept of state management in React.
* Uses Context API to illustrate centralized state storage.


### NOT included in this curriculum

React is not so easy. Compared to AngularJS, React has a very uniform organizational style (rather than different structures that provide different functionality). This is good. But React's one-way-binding cycle is more explicitly complex than AngularJS' two-way-binding magic. To help students deal with the complexity, I've proposed omitting some topics/libraries that are included in a lot of React tutorials by default:
* Type checking with propTypes
* Redux
* Asynchronous Redux (thunks, sagas)
