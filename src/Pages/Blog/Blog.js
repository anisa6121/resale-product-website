import React from 'react';

const Blog = () => {
    return (
		<>
			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold  text-purple-700 ">
							1.what are the different ways
							to manage a state in a react
							application ?
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							In React apps, there are at
							least many ways to handle the
							state. 1. The option is to
							store the state in the browser
							via web storage. This is useful
							when we want to persist state
							between reloads and reboots.
							Examples include cookies, local
							storage, and IndexedDB. These
							are native browser
							technologies. Data persisted in
							the browser is tied to a single
							browser. So, if the user loads
							the site in a different
							browser, the data will not be
							available. We avoid storing
							sensitive data in the browser
							since the user may access the
							app on a shared machine. Some
							examples of where web storage
							might be most useful include
							storing a user’s shopping cart,
							saving partially completed form
							data or storing JWT token in
							HttpOnly Cookie. Here is an
							example of saving user
							preferences locally in the
							browser or even persist the
							complete state for one or more
							of our components.
							<br />
							2. The second option is to use
							store state locally. It is
							useful when one component needs
							the state. Examples include a
							toggle button, a form, etc.
							<br />
							3. The Fourth option is to
							define the state in the parent
							component. Often, the same
							state is used across multiple
							components. In those cases, it
							is useful to lift the state to
							a common parent. The lifting
							state is a two‑step process.
							First, we declare the state in
							a common parent component, and
							then we pass the state down to
							child components via props.
							This pattern should be
							considered any time a few
							related components need to use
							the same state. The lifting
							state avoids duplicating states
							in multiple components. It
							helps to assure that our
							components all consistently
							reflect the same state. In the
							below example, we have lifted
							the state and the handleChange
							event in the parent component,
							helping to maintain
							consistency.
							<br />
							4. The fourth option is to
							compute the new state based on
							the available state and we do
							not need to declare a state at
							all. If there are existing
							values that can be composed to
							give us the information we
							need, then we can calculate
							that information on each render
							instead of storing it. Some
							examples include calling
							.length on an array to
							determine the number of records
							instead of storing a separate
							numItems variable in the state
							or deriving an errorsExist
							boolean by checking if the
							errors array is empty. So, why
							bother deriving the state?
							Well, deriving the state avoids
							our state values getting out of
							sync. It simplifies our code
							since we do not have to
							remember to keep separate
							values in sync. When we update
							the state, derived values are
							automatically recalculated in
							the render. For example, we can
							calculate the items added to
							the cart and show it on the
							cart icon like this,
							this.state.cart.items.length
							and pass it as a prop to Badge
							Component. We do not need to
							store the itemsCount key in a
							cart state. Each time the cart
							state gets changed, the count
							on the Badge will be calculated
							automatically.
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold  text-purple-700">
							2.How does prototypical
							inheritance work
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							Every object with its methods
							and properties contains an
							internal and hidden property
							known as [[Prototype]]. The
							Prototypal Inheritance is a
							feature in javascript used to
							add methods and properties in
							objects.
							<br />
							When we try to access a
							property of an object, the
							property is not only searched
							in the object itself. It's also
							searched in the prototype of
							the object, in the prototype of
							the prototype, and so on –
							until a property is found that
							matches the name or the end of
							the prototype chain is reached.
							If the property or method isn’t
							found anywhere in the prototype
							chain, only then will
							JavaScript return undefined.
							Every object in JavaScript has
							an internal property called
							[[Prototype]]. If we create an
							array and log it to the console
							like this. To find the
							[[Prototype]] of an object, we
							will use the
							Object.getPrototypeOf() method.{" "}
							<br />
							At the end of the prototype
							chain is Object.prototype. All
							objects inherit the properties
							and methods of Object. Any
							attempt to search beyond the
							end of the chain results in
							null. If you look for the
							prototype of the prototype of
							an array, a function, or a
							string, you’ll see it’s an
							object. And that’s because in
							JavaScript all objects are
							descendants or instances of
							Object.prototype, which is an
							object that sets properties and
							methods to all other JavaScript
							data types. Each type of
							prototype (for example array
							prototype) defines its own
							methods and properties, and in
							some cases overrides the
							Object.prototype methods and
							properties (that’s why arrays
							have methods that objects
							don’t). But under the hood and
							going up the ladder of the
							prototype chain, everything in
							JavaScript is built upon the
							Object.prototype. If we try to
							look into the prototype of
							Object.prototype we get null.
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold  text-purple-700 ">
							3. What is a unit test? Whay
							should we write unit test?
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							Unit Testing is a type of
							software testing where
							individual units or components
							of a software are tested. The
							purpose is to validate that
							each unit of the software code
							performs as expected. Unit
							Testing is done during the
							development (coding phase) of
							an application by the
							developers. Unit Tests isolate
							a section of code and verify
							its correctness. A unit may be
							an individual function, method,
							procedure, module, or object.
							In SDLC, STLC, V Model, Unit
							testing is first level of
							testing done before integration
							testing. Unit testing is a
							WhiteBox testing technique that
							is usually performed by the
							developer. Though, in a
							practical world due to time
							crunch or reluctance of
							developers to tests, QA
							engineers also do unit testing.{" "}
							<br />
							1.Unit tests save time and
							money. Usually, we tend to test
							the happy path more than the
							unhappy path. If you release
							such an app without thorough
							testing, you would have to keep
							fixing issues raised by your
							potential users. The time to
							fix these issues could’ve been
							used to build new features or
							optimize the existing system.
							Bear in mind that fixing bugs
							without running tests could
							also introduce new bugs into
							the system. <br />
							2.Well-written unit tests act
							as documentation for your code.
							Any developer can quickly look
							at your tests and know the
							purpose of your functions.{" "}
							<br />
							3.Unit testing is an integral
							part of extreme programming.
							Extreme programming is
							basically a
							“test-everything-that-can-possibly-break”
							programming strategy. <br />
							4.Unit tests make code reuse
							easier. If you want to reuse
							existing code in a new project,
							you can simply migrate both the
							code and tests to your new
							project, then run your tests to
							make sure you have the desired
							results. <br />
							5. Unit testing improves code
							coverage. A debatable topic is
							to have 100% code coverage
							across your application.
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
					<div className="mt-3">
						<p className="text-2xl font-bold text-blue-700">
							4. React vs Angular
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							What is React? <br />
							React is a front-end JavaScript
							library that allows you to
							build user interfaces from
							reusable UI components. React
							uses server-side rendering to
							provide a flexible and
							performance-based solution. It
							allows developers to create
							seamless UX and complex UI.
							Since React follows the “Learn
							Once, Write Anywhere”
							principle, it’s the preferred
							choice for developers to build
							fast and scalable applications.
							Along with JavaScript, React
							can also be used with JSX.
							Developed by Facebook, React is
							maintained by Facebook
							communities and individual
							developers. <br />
							<br />
							<p className="text-green-500">
								Advantages of React JS:
							</p>
							<br />
							a. React offers an easy
							debugging process. The code is
							reusable. <br />
							b. It’s easy to learn because
							of its easy and simple design.{" "}
							<br />
							c. It allows developers to
							migrate an app in React very
							easily. <br />
							d. It supports both Android and
							iOS platforms.
							<br />
							<p className="text-blue-700">
								What is Angular?{" "}
							</p>
							<br />
							Angular is an open-source
							JavaScript front-end framework
							developed and managed by
							Google’s Angular team. Angular
							is the most popular client-side
							framework for developing
							scalable and high-performing
							mobile and web apps using HTML,
							CSS, and TypeScript. The latest
							version of Angular is Angular
							13, which offers
							enterprise-ready web app
							development solutions. <br />
							<p className='text-green-500'>
								
								Benefits of Angular:
							</p>
							<br />
						a.	Angular offers clean code
							development and dependency
							injection. <br />
						b.You can use many Angular
							libraries, which help you
							create robust template
							solutions. <br />
						c.	To execute a unit test in
							Angular, you need to inject
							mock data into the controller,
							then inspect the result and its
							behavior. Also, it allows you
							to create every single page
							separately and then combine
							them with the components to
							view the final product. <br />
						d.	Angular extends HTML syntax.
							With directives, Angular lets
							you create reusable components.
						</p>
					</div>
				</div>
			</div>
		</>
    );
};

export default Blog;