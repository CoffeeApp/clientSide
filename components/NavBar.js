import React from 'react'
import style from './style.css'

const NavBar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.row}>
				<div className={style.navmenubutton}>
					<img
						alt="Nav icon"
						className={style.navicon}
					/>
				</div>
				<div className={style.navmenu}>
					<a className={style.navlink}>Home</a>
					<a className={style.navlink}>About</a>
					<a className={style.navlink}>Contact</a>
				</div>
				<span className={style.logo}>Coffee App</span>
			</div>
			<div className={style.row}>
				<form className={style.navform}>
					<input
						className={style.searchbar}
						placeholder="What coffee would you like to order?"
						type="text"
					/>
				</form>
			</div>
		</div>
	)
}
