import React from 'react'

const SearchBar = ({searchWord, updateSearchWord}) => {
	console.log('IMPORTANT STUFF', searchWord, updateSearchWord)
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
						value={searchWord}
						onChange={(e) => updateSearchWord(e.target.value)}
					/>
				</form>
			</div>
		</div>
	)
}

export default SearchBar
