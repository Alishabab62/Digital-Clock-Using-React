import React from "react";


function ShowCurrentTime(){
    let [time ,setTime] = React.useState(new Date());
   
        setInterval(()=>setTime(new Date()), 1000 );

    const styleMainDiv={
        display:"flex" ,
        alignItems:"center" ,
        justifyContent:"center" , 
        height:"100vh" , 
        backgroundColor:"lightblue" ,
    }
    return(
        <div style={styleMainDiv}>
            <div style={{border:"3px solid green" ,borderRadius:"5px", padding:"30px", display:"flex" , flexDirection:"column" , alignItems:"center"}}>
            <p style={{fontSize:"50px"}}>Current Time and Date</p>
            <div style={{fontSize:"35px" , display:"block" , color:"blue" , marginTop:"20px"}}>{time.toLocaleTimeString()}</div>
            <div style={{fontSize:"35px",color:"blue"}}>{time.toLocaleDateString()}</div>
            </div>
        </div>
    )
}

export default ShowCurrentTime;