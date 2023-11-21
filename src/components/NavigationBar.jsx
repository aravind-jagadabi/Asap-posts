import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../styles/asapmark.png'
import SideBar from './SideBar';
import NationSelection from './NationSelection';

const NavigationBar = ({setDomain, selectedCountry, setSelectedCountry}) => {
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx = {{backgroundColor: 'white'}}>
          <Toolbar>
            <SideBar setDomain = {setDomain}/>
            <img src = {Logo} alt = 'asap-logo' style={{ height: '45px', margin: 'auto', paddingRight: '55px'}}/>
            <NationSelection selectedCountry = {selectedCountry} setSelectedCountry = {setSelectedCountry} />
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavigationBar;