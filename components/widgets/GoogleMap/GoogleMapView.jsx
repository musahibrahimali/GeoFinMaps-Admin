import { MapWrapper } from "../../exports";
const mapApiKey = "AIzaSyBxez--w-bonusq592_-nLeqakIAXje2BU";

const GoogleMapView = () => {

    return (
        <div className="h-screen w-screen z-40">
            <MapWrapper
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapApiKey}`}
                loadingElement={<div className="h-full" />}
                containerElement={<div className="h-full" />}
                mapElement={<div className="h-full" />}
            />
        </div>
    );
}

export default GoogleMapView;