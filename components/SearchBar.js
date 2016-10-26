import React from 'react'
import { hashHistory } from 'react-router'
import LinkOrderHistory from './LinkOrderHistory'
import LinkBack from './LinkBack'
import LinkCart from './LinkCart'
import Logo from './Logo'

const SearchBar = ({order, screen, updateScreen, searchWord, updateSearchWord, placeholder}) => (
 <div className="navbar">
   <div className="row">
     <span className="logo">
       <Logo />
     </span>
   </div>
   <div className="row">
     <div className="searchbarcontainer">
       {
         ((screen === 'cart') || (screen === 'orders'))
         ? <LinkBack updateScreen={updateScreen} />
         : null
       }
       {
         (screen === 'coffees')
         ? <LinkOrderHistory updateScreen={updateScreen} />
         : null
       }
       <input
         className="searchbar"
         placeholder={placeholder}
         type="text"
         value={searchWord}
         onChange={(e) => updateSearchWord(e.target.value)}
       />
       {
         (
           (Object.keys(order.orderCoffees).length > 0) &&
           (screen === 'coffees') || (screen === 'shops')
         )
         ? <LinkCart updateScreen={updateScreen} />
         : null
       }
     </div>
   </div>
 </div>
)

export default SearchBar
