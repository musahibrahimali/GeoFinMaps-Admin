import { useState, useEffect } from 'react';
import { Header, Footer, SideBar } from '../exports';

const Layout = (props) => {
    const { children } = props;

    const [openDrawer, setOpenDrawer] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleTheme = () => {
        setDarkMode(!darkMode);
    }

    // open the side bar (drawer logic)
    const handleOpenDrawer = () => {
        setOpenDrawer(!openDrawer);
    }

    // remove event listener from the  window
    const removeEventListener = () => {
        if (typeof window !== 'undefined') {
            return window.removeEventListener("resize", handleHideMenu);
        }
    };

    /// hiding the sidebar on large screens (during resizing)
    const handleHideMenu = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth <= 960) {
                window.removeEventListener("resize", removeEventListener);
            } else {
                setOpenDrawer(false);
            }
        }
    }

    /// this function handles adding shaddow to the header upon scrolling
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const header = document.querySelector(".header");
            const nav = document.querySelector(".navbar_t");
            const headerOffsetTop = header.offsetHeight + 20;
            const headerScrollTop = header.offsetTop;
            if (headerScrollTop >= headerOffsetTop) {
                header.classList.add("custom__shadow");
                nav.classList.remove("custom__divider");
            } else {
                nav.classList.add("custom__divider");
                header.classList.remove("custom__shadow");
            }
        }
    }

    // on component mount (when it is rendered in the browser)
    useEffect(() => {
        // hide sidebar on screen sizes larger than mobile devices
        window.addEventListener('resize', handleHideMenu);

        /// add shaddow to header on scroll
        window.addEventListener('scroll', handleScroll);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-white dark:bg-gray-900">
                <div
                    className="h-full w-screen bg-white dark:bg-gray-900 header z-50 sticky top-0"
                >
                    <Header
                        openDrawer={openDrawer}
                        setOpenDrawer={setOpenDrawer}
                        handleOpenDrawer={handleOpenDrawer}
                    />
                </div>
                <div
                    className="bg-white dark:bg-gray-900"
                >
                    <div
                        className="max-w-screen-lg mx-auto flex flex-row overflow-auto"
                    >
                        <div className=" bg-white dark:bg-gray-900">
                            <SideBar
                                openDrawer={openDrawer}
                                setOpenDrawer={setOpenDrawer}
                                handleOpenDrawer={handleOpenDrawer}
                            />
                        </div>
                        <div className="bg-white dark:bg-gray-900">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    handleTheme={handleTheme}
                />
            </div>
        </div>
    );
}

export default Layout;