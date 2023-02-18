import NavHead from '../NavHead/NavHead';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Maps() {
  const [center, setCenter] = useState(null);
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const saveLocation = () => {
    console.log(center);
    const message = `Do you want to save your current location Latitude : ${center.lat} , Longitude : ${center.lng}?`;
    if (window.confirm(message)) {
      // User clicked OK, handle the save action here
      alert('Success!');
    } else {
      // User clicked Cancel, handle the cancel action here
      console.log('Location not saved');
    }
  };

  

  return (
    <>
      <NavHead />
      <div style={{ marginTop: '0px', marginBottom: '10px' }}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          {center ? (
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '510px',
              }}
              center={center}
              zoom={18}
            >
              <Marker position={center} onClick={saveLocation} />
            </GoogleMap>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '75vh',
              }}
            >
              <h1
                style={{
                  color: 'orange',
                  textAlign: 'center',
                  backgroundColor: 'black',
                  borderRadius: '10px',
                }}
              >
                Loading...
              </h1>
            </div>
          )}
        </LoadScript>
      </div>
      <Footer />
    </>
  );
}
export default Maps;
