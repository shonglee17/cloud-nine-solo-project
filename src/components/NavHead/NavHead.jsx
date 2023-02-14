import './NavHead.css';
import { Grid, Avatar } from '@material-ui/core';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
function NavHead() {
  return (
    <div className="navIcons">
    <Grid container spacing={10} alignItems="center">
      <Grid item>
        <Avatar><PersonOutlineOutlinedIcon/></Avatar>
      </Grid>
      <Grid item>
        <Avatar>
          <img
            src="https://play-lh.googleusercontent.com/5cpsDta8hXwWPukv1M6TrRfLrBMJxoQq_dmqrQouAwW7B-5wFC1DewgU0_Kqzujf-w"
            alt="Crosshair"
          />
        </Avatar>
      </Grid>
      <Grid item>
        <Avatar>
          <NavigationOutlinedIcon />
        </Avatar>
      </Grid>
    </Grid>
    </div>
  );
}

export default NavHead;
