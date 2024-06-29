import './App.css';
import  React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import {Grid, IconButton,Button,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FcAddRow, FcHeatMap,FcMenu,FcDeleteRow } from "react-icons/fc";
const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [days] = useState(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
  const [sub]= ["Math","Phy","Che","Social", "Hindi", "Eng", "Phycial", "Bio","History","Computer","Economy","Sanskrit"]
  const [teachers]=useState([{name:"Naresh Sir",sub:"Math"},{name:"Sanjay Sir",sub:"Phy"},{name:"Nakul sir", sub:"Che"},{name:"D Alam",sub:"Social"}, {name:"Ashok Sir", sub:"Hindi"},{name:"Ajay Sir", sub:"Eng"},{name:"Monu sir", sub:"Phycial"},{name:"Bharti Mam",sub:"Bio"},{name:"Navin Sir",sub:"History"},{name:"Sumit Sir",sub:"Computer"},{name:"D Alam", sub:"Economy"},{name:"Shree Dev Sir",sub:"Sanskrit"}])
  const [timeTable, setTimeTable] = useState([{day:"",class:[]}])

  const generateTimeTable=()=>{
    let newTimeTable = []; const totalClass = 36; let totalTeacher = teachers.length; let weekClass = [];
   
    
      for (let i = 0; i < teachers.length; i++) {
          for(let j=0; j< (totalClass/totalTeacher); j++){
            weekClass.push(teachers[i])
          }
      }

      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      shuffle(weekClass);
      let todayClass = [];
      
      
      const result = weekClass.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/6)
      
        if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }
      
        resultArray[chunkIndex].push(item)
      
        return resultArray
       
      }, [])

      
    for (let i = 0; i < result.length; i++) {
      newTimeTable.push({day:days[i],class:result[i]})
  
    }
    setTimeTable(newTimeTable)
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Contact', 'Charts & Map'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FcAddRow /> : <FcHeatMap />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FcAddRow /> : <FcHeatMap />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <FcMenu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Random Time Table
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <center> <Button variant="outlined" onClick={()=> generateTimeTable()}>Generate Time Table</Button> </center> 
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Timing → <br/> Day ↓</TableCell>
              <TableCell align="left">9:00-10AM</TableCell>
              <TableCell align="left">10:00 - 11AM</TableCell>
              <TableCell align="left">11:00-12 Noon</TableCell>
              <TableCell align="left">12:00-01 PM</TableCell>
              <TableCell align="left">Break (1PM-2PM)</TableCell>
              <TableCell align="left">02-03PM</TableCell>
              <TableCell align="left">03-04PM</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeTable.map((row) => (
                <TableRow
                key={row.day}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
              <Typography>{row.day}</Typography>  
              </TableCell>
              {row.class && row.class.map((c,j)=> {
                if(j < 4){
                  return (<TableCell key={j} component="th" scope="row">
                  <Typography>{c.name}</Typography>
                  <Typography variant="subtitle2" color="teal">{c.sub}</Typography> 
                 </TableCell>) 
                }else if(j===4) {
                  return (<> <TableCell key={Math.random(j)} component="th" scope="row">
                  <Typography>Break</Typography>
                  <Typography variant="subtitle2" color="teal">Lunch</Typography>  
                  </TableCell>
                  <TableCell key={Math.random(j)} component="th" scope="row">
                  <Typography>{row.class[4]?.name}</Typography>
                  <Typography variant="subtitle2" color="teal">{row.class[4]?.sub}</Typography>  
                  </TableCell>
                  </>)
                }
                else if(j===5) {
                  return ( <TableCell key={Math.random(j)} component="th" scope="row">
                  <Typography>{row.class[j]?.name}</Typography>
                  <Typography variant="subtitle2" color="teal">{row.class[j]?.sub}</Typography>  
                  </TableCell>)
                }
              }  )} 
                
              </TableRow>)
            )}
          </TableBody>
        </Table>

      </Box>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;



