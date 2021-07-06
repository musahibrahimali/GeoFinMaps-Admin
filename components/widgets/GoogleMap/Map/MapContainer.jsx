import { withScriptjs, withGoogleMap } from 'react-google-maps';
import { Map } from '../../../exports';

const MapWrapper = withScriptjs(withGoogleMap(() =>
    <Map />
));

export default MapWrapper;