import { useSession } from 'next-auth/client'
import React from 'react'
import SlidebarRow from "./SlidebarRow"
import{
    ChevronDownIcon,
    UserGroupIcon,
    ShoppingBagIcon,
}from "@heroicons/react/outline";

import{
    CalenderIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
}from "@heroicons/react/solid";

function Sidebar() {
    const [session, loading]=useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[100px]">
            <SlidebarRow src={session.user.image} tittle={session.user.name}/>
            <SlidebarRow Icon={UsersIcon} tittle="Friends"/>
            <SlidebarRow Icon={UserGroupIcon} tittle="Groups"/>
            <SlidebarRow Icon={ShoppingBagIcon} tittle="Marketplace"/>
            <SlidebarRow Icon={DesktopComputerIcon} tittle="Watch"/>
            <SlidebarRow Icon={CalenderIcon} tittle="Events"/>
            <SlidebarRow Icon={ClockIcon} tittle="Memories"/>
            <SlidebarRow Icon={ChevronDownIcon} tittle="See More"/>
        </div>
    )
}

export default Sidebar
