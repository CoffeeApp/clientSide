wrapComponent(SelectCoffee, {store: store, coffees: store.getState().coffees}
)

<SelectCoffee store={store} coffees={store.getState().coffees} />
					{/*<Cart store={store} />*/}
					{/* <SelectCafe /> */}
          <SelectCoffee store={store} coffees={store.getState().coffees} />
					{/*<Cart store={store} />*/}
					{/* <SelectCafe /> */}


// ROutes

<Router history={browserHistory}>
	<Route path="/" component={App}>
		<Route path="/coffee" component={SelectCoffee}/>
	</Route>
</Router>
