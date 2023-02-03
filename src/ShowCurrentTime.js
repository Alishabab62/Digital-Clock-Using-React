import React from "react";


function ShowCurrentTime(){
    let [time ,setTime] = React.useState(new Date());
   
    React.useEffect(() => {
        setInterval(()=>setTime(new Date()), 1000 )
    });
    return(
        <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , height:"100vh" , backgroundColor:"lightblue"}}>
            <p style={{fontSize:"50px"}}>Current Time</p>
            <div style={{fontSize:"35px" , display:"block" , color:"orange"}}>{time.toLocaleTimeString()}</div>
            {/* <div style={{fontSize:"35px",color:"orange"}}>{time.toLocaleDateString()}</div> */}
        </div>
    )
}

export default ShowCurrentTime;