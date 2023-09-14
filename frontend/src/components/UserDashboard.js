import './App.css';
import React,{useState,useEffect} from 'react';
import {useSpring,animated} from 'react-spring';

function UserDashboard() {
  
    const [isHoveringone,setHoveringone]=useState(false);
  
  const handleMouseEnterone=()=>{
    setHoveringone(true);
  }
  const handleMouseLeaveone=()=>{
    setHoveringone(false);
  }
  const [isHoveringtwo,setHoveringtwo]=useState(false);
  
  const handleMouseEntertwo=()=>{
    setHoveringtwo(true);
  }
  const handleMouseLeavetwo=()=>{
    setHoveringtwo(false);
  }
  const [isHoveringthree,setHoveringthree]=useState(false);
  
  const handleMouseEnterthree=()=>{
    setHoveringtwo(true);
  }
  const handleMouseLeavethree=()=>{
    setHoveringtwo(false);
  }
  const props=useSpring({opacity:1,from:{opacity:0}});
  const [currentDateTime,setCurrentDateTime]=useState(new Date());
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentDateTime(new Date());
    },1000);
    return ()=>clearInterval(interval);
  },[]);
  const linkStyleone={
    textDecoration:'none',
    display:'inline',
    margin:'5px',
     padding:'5px 5px',backgroundColor:isHoveringone?'red':'yellow',color:isHoveringone?'white':'black',borderRadius:'5px',};
     const linkStyletwo={
      textDecoration:'none',
      display:'inline',
      margin:'5px',
       
      padding:'5px 5px',backgroundColor:isHoveringtwo?'red':'yellow',color:isHoveringtwo?'white':'black',borderRadius:'5px',transition:'background-color 0.3s ease'  };
      const linkStylethree={
        textDecoration:'none',
        display:'inline',
        margin:'5px',
         padding:'5px 5px',backgroundColor:isHoveringthree?'red':'yellow',color:isHoveringthree?'white':'black',borderRadius:'5px',transition:'background-color 0.3s ease'  };
      const dateTimeStyle={
    
    fontSize:'20px',
    color:'black',
    position:'absolute',
    right:'20px'
  }
  const currentHour=currentDateTime.getHours();
  let greetingmsg='';
  if(currentHour>=12 && currentHour<15){
    greetingmsg='Good Afternoon'
  }
  else if(currentHour>=5 && currentHour<12){
    greetingmsg='Good Morning'
  }
  else{
    greetingmsg='Good Evening'
  }
const containerStyle={
  textAlign:'center',
  padding:'15px',backgroundColor:"red",color:"white"
};
const titleStyle={
  color:'white',
  marginBottom:'20px'
}
const linkcontainerStyle={
  display:'flex',
  padding:'10px',backgroundColor:"yellow",justifyContent:'right',padding:'5px'
};
const greetingsStyle={
  marginTop:'10px',
  positon:'absolute',
  fontSize:'20px',
  left:'20px',
  color:'red', fontSize:'25px',marginLeft:'20px'
}
const containercircle={
  marginTop:'20px',marginLeft:'20px',color:"maroon",
  width:'500px',height:'200px',fontSize:'20px',backgroundColor:'BEIGE',display:'flex',alignItems:'center'
}
const containercc={
  marginLeft:'10px',marginTop:'20px',backgroundColor:"#dba800",color:'#8b0000',marginRight:'20px',
  
  width :'500px',height:'200px',fontSize:'20px',display:'flex',justifyContent:'center',alignItems:'center'
}
const twoline={
  display:'flex',justifyContent:'space-between'
}
const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    const formattedDateTiem=currentDateTime.toLocaleDateString('en-US',options)+' '+' | '+currentDateTime.toLocaleTimeString();
  
    sessionStorage.setItem('Name:','Virat');
    

    return (
    <div>
    <div className="App" style={containerStyle}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactloan
        </a>
      </header> */}
      {/*<BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      <ul>
      <li>Hom
      <h1 style={titleStyle}> User Dashboard</h1>e</li>
    </ul>*/}
    
    
    <h1 style={titleStyle}> Loan Management Application</h1>
    <h2 style={titleStyle}> {sessionStorage.getItem('Name:')}'s Dashboard</h2>
    <div style={linkcontainerStyle}>
      <a href="https://localhost:3000"style={linkStyleone} onMouseEnter={handleMouseEnterone} onMouseLeave={handleMouseLeaveone}>View Loans&gt;</a>
    <a href="https://localhost:3000"style={linkStyletwo} onMouseEnter={handleMouseEntertwo} onMouseLeave={handleMouseLeavetwo}>Apply for Loans&gt;</a>
    <a href="https://localhost:3000"style={linkStylethree} onMouseEnter={handleMouseEnterthree} onMouseLeave={handleMouseLeavethree}>View Items Purchased&gt;</a>
    </div>
    </div>
<div>
    <div style={dateTimeStyle}>{formattedDateTiem}</div>
    <div style={greetingsStyle}>{greetingmsg} {sessionStorage.getItem('Name:')}!</div>
    </div>
    <div style={twoline}>
    
    <div style={containercircle}><h1>In need of a Loan? {'\n'}
    It's never been so simple!</h1></div>
    <div style={containercc}><h1>Home Loans @6.80%</h1></div>
    </div> 
    </div>
      
  );
}

export default UserDashboard;
