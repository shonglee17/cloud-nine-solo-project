import './NavHead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function NavHead() {
  const style = { color: 'orange' };
  const history = useHistory();

  const maps = () => {
    history.push('/maps')
  };

  const about = () => {
    history.push('/used')

  };
  const auto = () => {
          setDate(2023-5-5)
          setLocation('North Dakota')
          setSpecies('Ducks')
          setEquipment('12 ga.')
          setRestrictions('4 drakes 2 hens')
  }
  return (
    <div className="navIcons">
      <div className="personIcon" onClick={about}>
        
          <i style={style} className="fas fa-user" ></i>
        
      </div>

      <img
        className="crosshair"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiwAQuUxE9bJ8SkaianA82-9Rsswe01dnQzeIoEzK1Q6IxLZxLZQ-1QETHDX1fUJu9D8&usqp=CAU"
      />

      <div className="navigation" onClick={maps}>
  
          <i
            style={style}
            className="fas fa-location-arrow text-orange"
          ></i>
  
      </div>
    </div>
  );
}

export default NavHead;
