import './NavHead.css';

function NavHead() {
    const style = {color: "orange"}
    const hi = () => {
        console.log('hi');
    }

    const bye = () => {
        console.log('bye');
    }
  return (
    <div className="navIcons">
      
        
          <div className="personIcon">
            <a
              
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i style={style} className="fas fa-user" onClick={bye}></i>
            </a>
            
          </div>

          <img className="crosshair" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiwAQuUxE9bJ8SkaianA82-9Rsswe01dnQzeIoEzK1Q6IxLZxLZQ-1QETHDX1fUJu9D8&usqp=CAU"/>

          <div className="navigation">
            <a className="nav-link" href="#">
              <i style = {style} className="fas fa-location-arrow text-orange" onClick={hi}></i>
            </a>
          </div>
        
      
    </div>
  );
}

export default NavHead;
