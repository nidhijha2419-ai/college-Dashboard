import './App.css';
import  React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import {Grid, IconButton,Typography,Paper,InputBase,Badge,Avatar,Tabs,Tab,ListItemAvatar,ButtonGroup,Button} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FcSearch,FcMenu,FcExpand } from "react-icons/fc";
import {FaGraduationCap,FaPen,FaBook,FaReceipt,FaCalendarAlt,FaHandsHelping,FaAddressBook,FaCamera,FaLongArrowAltRight,FaHeadphones} from "react-icons/fa";
import { MdOutlineDashboardCustomize,MdAttachEmail,MdNotifications,MdMoreVert } from "react-icons/md";
import {GiTeacher} from "react-icons/gi";
import {AiOutlineLaptop} from "react-icons/ai";
import {BiLineChart} from "react-icons/bi"
const drawerWidth = 240;

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];
function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const [inbox,setInbox]= useState([{img:"https://mui.com/static/images/avatar/1.jpg", title:"Kaushik Sharma",msg:4, designation:"Principal", text:"Lorem ipson dolor sit amet, consectetur edit. The following demo generates the color based.sdsd"},{img:"https://mui.com/static/images/avatar/3.jpg", title:"Nidhi Jha",msg:0, designation:"Chemistry Lab Assistant", text:"Lorem ipson dolor sit amet, consectetur edit. The following demo generates the color based.sdsd"},{img:"https://mui.com/static/images/avatar/4.jpg", title:"snehal Dubey",msg:0, designation:"Biology Lab Assistant", text:"Lorem ipson dolor sit amet, consectetur edit. The following demo generates the color based.sdsd"}])
  const [menuList] = useState([{title:"Dashboard",active:true, icon:<MdOutlineDashboardCustomize/>},{title:"Attendance",icon:<BiLineChart/>},{title:"Student Manage",icon:<FaGraduationCap/>},{title:"Examination",icon:<FaPen/>},{title:"Add Assignment",icon:<FaHandsHelping/>},{title:"Syllabus",icon:<FaBook/>},{title:"Lesson Plan",icon:<GiTeacher/>},{title:"Reports",icon:<FaReceipt/>},{title:"E-Contents",icon:<FaCalendarAlt/>}])
  const [genMenu] = useState([{title:"My Profile", icon:<FaAddressBook/>},{title:"Communications", icon:<MdAttachEmail/>},{title:"Service Request", icon:<FaCamera/>}])
  const [events] = useState([{date:"9th",title:"Summer Examination Starts", msg:"Lorem ipson dolor sit amet."},{date:"14th",title:"Practical Submissions", msg:"Lorem ipson dolor sit amet, edit."},{date:"15th",title:"Assignment Checking", msg:"Lorem ipson dolor sit amet, edit."}])


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:"#161e29",height:"100vh",color:"aquamarine"}}>
        <img src='https://res.cloudinary.com/oasismanors/image/upload/v1696958794/Logo_hsf3ba.jpg' style={{width:"100%"}} alt='Logo'/> 
     
    <Typography sx={{marginLeft:"20px"}} variant="body2" color="yellow">MENU</Typography>
      <List>
        {menuList && menuList.map((m, index) => (
          <ListItem key={index} sx={m.active && {background:"grey"}}>
              <ListItemIcon style={{color:"aquamarine",fontSize:"22px",marginLeft:"25px"}}>
                {m.icon}
              </ListItemIcon>
              <ListItemText   primary={m.title} />
          </ListItem>
        ))} 
      </List>
      <Divider light sx={{color:"#fff",margin:"20px 0px",border:"0.2px solid"}}/>
      
    <Typography sx={{marginLeft:"20px"}} variant="body2" color="yellow">General</Typography>
      <List>
        {genMenu && genMenu.map((m, index) => (
          <ListItem key={index} sx={m.active && {background:"grey"}}>
              <ListItemIcon style={{color:"aquamarine",fontSize:"22px",marginLeft:"25px"}}>
                {m.icon}
              </ListItemIcon>
              <ListItemText primary={m.title} />
          </ListItem>
        ))}
      </List>
      <Box sx={{position:"absolute",bottom:10,width:"100%"}}>
      <Typography  variant="subtitle2" align="center" color="antiquewhite">© All Rights Reserved.</Typography>
      </Box>
    </div> 
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
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
            Dashboard
          </Typography>
          <span style={{flexGrow:0.6}}/>
          <SearchBox/>
            <span style={{flexGrow:1}}/>
          <IconButton sx={{marginLeft:"150px"}}>
          <Badge  variant="dot" color="secondary">
    <MdNotifications/>
    </Badge>
   </IconButton>
   <IconButton sx={{marginLeft:"20px"}}>
          <Badge  variant="dot" color="secondary">
    <FaHeadphones/>
    </Badge>
   </IconButton>
      <Box sx={{display:"flex",flexDirection:"row",marginLeft:'20px'}}>
      <Avatar sx={{border:"2px solid #cdc2fc"}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
      <Box sx={{marginLeft:"5px",marginRight:"5px",lineHeight:0}}>
      <Typography variant="subtitle2">Jay Verma </Typography>
      <Typography variant="caption" color="gray">Teacher</Typography>
      </Box>
      <FcExpand />
      </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth },flexShrink: { sm: 0 } }}
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
        sx={{ flexGrow: 1, p: 3,backgroundColor:"#f6f7fb",minHeight:"100vh", width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar /><br/>
      
        <Grid container spacing={4}>
          <Grid item xs={8}> 
          <Box sx={{borderRadius:"30px",backgroundColor:"#fff",height:"222px", padding:"50px"}}>
            <Grid container>
              <Grid item xs={8}>
              <Typography variant="h5">Hello, <b>Hello, Jay Verma</b></Typography>
              <Typography variant="caption" color="gray">Lorem ipsum is placeholder text commonly used in the graphic, print. </Typography><br/>
              <Typography variant="caption" color="gray">Sed do eiusmad tempar Inciddidunt. </Typography><br/><br/>
              <Box sx={{display:"flex",flexDirection:"row"}}>
                <AiOutlineLaptop style={{color:"#8c74ed",fontSize:"18px",marginRight:"10px"}}/>
                <Typography variant="body2" color="gray"><b>Senior Teacher</b> (Physics) </Typography>
              </Box>
              </Grid>
              <Grid item xs={4}>
              <img src='https://res.cloudinary.com/oasismanors/image/upload/v1696967843/Dashboard_Inbox_-_Copy_qgeelp.jpg' style={{position:"relative",height:"250px", bottom:80,right:10}} alt='Img'/>
              </Grid>
            </Grid>
          </Box>
          <br/>
          <Box sx={{ borderBottom: 1,  borderColor: '#fff' }}>
            <Tabs aria-label="basic tabs example">
              <Tab label="Inbox" sx={{backgroundColor:"#fff",borderRadius:"10px"}}  />
              <Tab label="Circulars"  />
              <Tab label="Student's Birthday"  />
            </Tabs>
          </Box>
          <Box sx={{ backgroundColor:"#fff",height:"400px",borderRadius:"10px",padding:"20px" }}>
          <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Typography variant="h6"><b>Message Inbox</b></Typography>
          <Typography variant="body1" color="purple">VIEW ALL</Typography>
          </Box>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {inbox && inbox.map((l,i)=>  <Badge key={i} badgeContent={l.msg} color="secondary" >
            <ListItem sx={{backgroundColor:"mintcream",borderRadius:"20px",marginTop:"10px",width:"100%"}}>
        <ListItemAvatar>
          <Avatar src={l.img} alt={l.title} />
        </ListItemAvatar>
        <ListItemText primary={<Typography><b>{l.title}</b>, ({l.designation})</Typography>} secondary={l.text} />
      </ListItem>

          </Badge> )}
          
          </List>
   
         
          </Box>
           </Grid>
          <Grid item xs={4} >
            <Grid container spacing={2} sx={{backgroundColor:"#fff",borderRadius:"10px",marginTop:"0px"}}>
              <Grid item xs={12}>
              <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"0px 20px"}}>
          <Typography variant="h6">Calender</Typography>
          <Typography variant="body1" color="purple">October 2023</Typography>
          </Box>

          <br/>
          <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",padding:"0px 20px"}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button variant="text">Week</Button>
            <Button variant="contained" sx={{backgroundColor:"#8c74ed",borderRadius:"10px !important"}}>Month</Button>
            <Button variant="text">year</Button>
            </ButtonGroup>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",padding:"0px 20px",marginTop:"10px"}}>
            <Calendar onChange={onChange} value={value} />
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"centre",padding:"0px 20px"}}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {events && events.map((l,i)=>  
            <ListItem key={i} secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <MdMoreVert />
              </IconButton>
            }
sx={{backgroundColor:"ghostwhite",borderRadius:"20px",marginTop:"10px",width:"100%"}}>
           <Box sx={{borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"20px", width:"50px", backgroundColor:"#fff", height:"50px"}}>
            {l.date}
           </Box>
        <ListItemText primary={<Typography>{l.title}</Typography>} secondary={l.msg} />
      </ListItem> )}
          
          </List>
          </Box>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};



export function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <FcSearch />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Text"
        inputProps={{ 'aria-label': 'Search Text' }}
      />
      <Box sx={{width:"40px",height:"40px",backgroundColor:"#cdc2fc",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"20px"}}>
        <FaLongArrowAltRight />
      </Box>
  
    </Paper>
  );
}

export default App;



