import React, { useEffect, useState } from "react";

const NavBar = ({ menuItems = [{route: "/", label: "Home"}], brand = "ITxPRO" }) => {

    const [toggle, setToggle] = useState(false)
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 600px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 600px)")
            .addEventListener('change', e => {
                setMatches(e.matches);
                setToggle(false);
            });
    }, []);

    const toggleHandler = () => {
        setToggle(!toggle);
    }


    const desktopMenu = (
        <ul className="flex last:pr-3">
            {menuItems.map(item => {
                return <li key={item.route}><a href={item.route} className="p-2 hover:bg-gray-100 mx-1 rounded">{item.label}</a></li>
            })}
        </ul>
    );

    const mobileMenu = (
        <ul className="flex flex-col text-center bg-gray-700 text-gray-50">
            {menuItems.map(item => {
                return <li key={item.route}><a href={item.route} className="block p-2 hover:bg-gray-600">{item.label}</a></li>
            })}
        </ul>
    );

    return (
        <nav>
            <div className="bg-gray-800 text-white flex justify-between items-center w-full">
                <div className={`flex justify-between ${!matches && "w-full"}`}>
                    <h1 className=" p-2 h-14 text-2xl font-bold px-7 flex items-center">{brand}</h1>
                    {!matches && <button onClick={toggleHandler}><i className="pr-4">fx</i></button>}
                </div>
                {matches && desktopMenu}
            </div>
            {(!matches && toggle) && mobileMenu}
        </nav>
    )
}

export default NavBar;