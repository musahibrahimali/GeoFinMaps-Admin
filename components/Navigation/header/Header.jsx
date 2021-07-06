import { NavBar } from '../navigation';

const Header = (props) => {

    const { openDrawer, setOpenDrawer, handleOpenDrawer } = props;

    return (
        <div className="bg-white">
            <NavBar
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                handleOpenDrawer={handleOpenDrawer}
            />
        </div>
    );
}

export default Header;