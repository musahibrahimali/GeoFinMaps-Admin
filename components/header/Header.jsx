import { NavBar } from '../exports';

const Header = (props) => {

    const { isSideBar, setIsSideBar, handleSideBarActive } = props;

    return (
        <div>
            <NavBar
                isSideBar={isSideBar}
                setIsSideBar={setIsSideBar}
                handleSideBarActive={handleSideBarActive}
            />
        </div>
    );
}

export default Header;