import React from 'react'

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="row">
				<span className="logo">Coffee App</span>
			</div>
			<div className="row">
				<form className="searchbarcontainer">
					<input
						className="searchbar"
						placeholder="What coffee would you like to order?"
						type="text"
					/>
				</form>
			</div>
		</div>
	)
}

export default NavBar
