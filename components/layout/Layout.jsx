import { useState } from 'react';
import { Header, Footer, SideBar } from '../exports';

const Layout = (props) => {
    const { children } = props;

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = (event) => {
        event.preventDefault();
        setOpenDrawer(!openDrawer);
    }

    return (
        <div>
            <div className="bg-white h-auto w-screen shadow-md sticky z-40 top-0">
                <Header
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                    handleOpenDrawer={handleOpenDrawer}
                />
            </div>
            <div className="max-w-screen-lg mx-auto flex flex-row overflow-auto">
                <div className="z-50">
                    <SideBar
                        openDrawer={openDrawer}
                        setOpenDrawer={setOpenDrawer}
                        handleOpenDrawer={handleOpenDrawer}
                    />
                </div>
                <div className="z-0">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;