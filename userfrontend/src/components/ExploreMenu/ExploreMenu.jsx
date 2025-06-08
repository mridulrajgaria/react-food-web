import {menu_list} from '../../assets/assets'
import React from 'react'
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Discover a variety of mouthwatering dishes crafted to delight your taste buds. Indulge in rich flavors and enjoy a dining experience that's satisfying from the first bite to the last</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(category=>category===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu