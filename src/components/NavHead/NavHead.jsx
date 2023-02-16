import './NavHead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function NavHead() {
  const style = { color: 'orange' };
  const history = useHistory();
  const hi = () => {
    console.log('hi');
  };

  const about = () => {
    history.push('/used')
  };
  return (
    <div className="navIcons">
      <div className="personIcon" onClick={about}>
        
          <i style={style} className="fas fa-user" ></i>
        
      </div>

      <img
        className="crosshair"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiwAQuUxE9bJ8SkaianA82-9Rsswe01dnQzeIoEzK1Q6IxLZxLZQ-1QETHDX1fUJu9D8&usqp=CAU"
      />

      <div className="navigation">
        <a className="nav-link" href="#">
          <i
            style={style}
            className="fas fa-location-arrow text-orange"
            onClick={hi}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default NavHead;
