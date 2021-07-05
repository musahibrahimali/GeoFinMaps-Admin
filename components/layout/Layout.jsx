import { useState } from 'react';
import { Header, Footer, SideBar } from '../exports';

const Layout = (props) => {
    const { children } = props;

    const [isSideBar, setIsSideBar] = useState(false);

    const handleSideBarActive = () => {
        setIsSideBar(!isSideBar);
    }

    return (
        <div>
            <div className="bg-white h-auto shadow-md sticky z-40 top-0">
                <Header
                    isSideBar={isSideBar}
                    setIsSideBar={setIsSideBar}
                    handleSideBarActive={handleSideBarActive}
                />
            </div>
            <div className="max-w-screen-lg mx-auto flex flex-row overflow-hidden">
                <div className="z-50 absolute py-0">
                    {
                        isSideBar &&
                        <SideBar
                            isSideBar={isSideBar}
                            setIsSideBar={setIsSideBar}
                            handleSideBarActive={handleSideBarActive}
                        />
                    }
                </div>
                <div className="z-0 relative">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;