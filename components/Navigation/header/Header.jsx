import { NavBar } from '../navigation';

const Header = (props) => {

    const { openDrawer, setOpenDrawer, handleOpenDrawer } = props;



    return (
        <header className="bg-white">
            <NavBar
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                handleOpenDrawer={handleOpenDrawer}
            />
        </header>
    );
}

export default Header;