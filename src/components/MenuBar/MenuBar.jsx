import React, { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
import { Link } from 'react-router-dom'
import './MenuBar.css'
import Datas from '../../Datas'

export default function MenuBar() {
    const { menuActive, closeMenu } = useContext(Context)

    return (
        <div className="menu active">
            <Link onClick={closeMenu} to={'/'} className='btn_Menu'>Home</Link>
            {Datas.map((data) => (
                <div key={data.id} className="group_Menu">
                    <span className="title_Menu">{data.title}</span>
                    <div className="Menu_btn">
                        {data.routeAddress.map((routes) => (
                            <Link key={routes.id} onClick={closeMenu} to={routes.route} className='btn_Menu'>{routes.name}</Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
