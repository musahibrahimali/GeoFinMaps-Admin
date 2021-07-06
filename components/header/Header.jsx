import { NavBar } from '../exports';

const Header = (props) => {

    const { openDrawer, setOpenDrawer, handleOpenDrawer } = props;

    return (
        <div>
            <NavBar
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                handleOpenDrawer={handleOpenDrawer}
            />
        </div>
    );
}

export default Header;