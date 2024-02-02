import { config } from '@/helpers/config'
import React from 'react'
import "./topbar.scss";
import UserMenu from './user-menu';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="container">
            <div className="slogan">📢 {config.project.slogan}</div>
            <UserMenu/>
        </div>     
    </div>
  )
}

export default Topbar