import { useState, useEffect } from 'react';
import { Header, Footer, SideBar } from '../exports';

const Layout = (props) => {
    const { children } = props;

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = (event) => {
        event.preventDefault();
        setOpenDrawer(!openDrawer);
    }
    /* 
        const hideOpenDrawer = (event) => {
            if (window.innerWidth <= 960) {
                setButton(false);
            }
        }
    
        window.addEventListener('resize', hideOpenDrawer);
    
        useEffect(() => { hideOpenDrawer() }, []); */

    return (
        <div>
            <div className="h-full w-screen z-50 shadow-md sticky top-0">
                <Header
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                    handleOpenDrawer={handleOpenDrawer}
                />
            </div>
            <div className="max-w-screen-lg mx-auto flex flex-row overflow-auto">
                <div className=" bg-white">
                    <SideBar
                        openDrawer={openDrawer}
                        setOpenDrawer={setOpenDrawer}
                        handleOpenDrawer={handleOpenDrawer}
                    />
                </div>
                <div className="bg-white mx-4">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;