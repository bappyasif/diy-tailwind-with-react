import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill, BsAlarmFill } from "react-icons/bs"
import { FaFire, FaPoo, FaContao, FaArrowUp } from "react-icons/fa"

function SideBar() {
    return (
        <div className='fixed top-[-0px] left-0 h-screen w-16 m-0
                    flex flex-col bg-gray-600 text-secondary shadow-lg
                    dark:bg-gray-900 dark:text-white'>

            <SidebarIcon icon={<FaFire size={29} />} />
            <SidebarIcon icon={<BsPlus size={33} />} />
            <SidebarIcon icon={<BsFillLightningFill size={20} />} />
            <SidebarIcon icon={<FaPoo size={20} />} />

            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
            <i>F</i>
        </div>
    )
}

export const HorizontalAppbar = () => {
    let navs = [
        { name: "Menu", icon: <FaArrowUp size={20} /> },
        { name: "About", icon: <BsAlarmFill size={20} /> },
        { name: "Contact", icon: <FaContao size={20} /> },
        { name: "Settings", icon: <BsGearFill size={20} /> },
    ];

    // let renderIcons = () => navs.map(item => <SidebarIcon key={item.name} text={item.name} icon={item.icon} />)
    let renderIcons = () => navs.map(item => <AppbarHorizontal key={item.name} text={item.name} icon={item.icon} />)
    return (
        <div className='fixed top-0 left-6 w-screen h-fit mx-11 p-1
                        bg-gray-600 text-white
                        flex flex-row justify-evenly items-start'>
            {renderIcons()}
        </div>
    )
}

const AppbarHorizontal = ({ icon, text = "Tooltips" }) => {
    return (
        <div className='appbar-horizontal group 
                      active:bg-red-800'>
            <p className='flex justify-center max-w-fit items-center'>
                {icon}
                <span className='font-extrabold text-2xl ml-2 mr-1'>
                    {text}
                </span>
            </p>
            <span className='appbar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

const SidebarIcon = ({ icon, text = "Tooltip" }) => {
    // using group on prent element to make child elements state changes on hover
    return (
        <div className='sidebar-icon group'>
            {icon}

            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default SideBar