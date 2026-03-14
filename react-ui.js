const { useState } = React;

const SocPanel = () => {

const [status,setStatus] = useState("Monitoring");
const [feed,setFeed] = useState("Waiting for scan...");
const [engine,setEngine] = useState("Idle");
const [loading,setLoading] = useState(false);

/* called when scan starts */
window.startScan = function(){

setEngine("Scanning...");
setLoading(true);

/* simulate 3 second scan animation */
setTimeout(()=>{
setLoading(false);
},3000);

}

/* called when scan finishes */
window.updateThreatFeed = function(result){

setFeed(result);
setEngine("Idle");
setLoading(false);

}

return (

<div>

{/* SCANNING OVERLAY */}

{loading && (

<div style={{
position:"fixed",
top:0,
left:0,
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.45)",   // transparent overlay
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
zIndex:9999
}}>

<div style={{
background:"#ffffff",
padding:"40px",
borderRadius:"10px",
textAlign:"center",
boxShadow:"0 0 20px rgba(0,0,0,0.3)"
}}>

<div style={{
width:"60px",
height:"60px",
border:"6px solid #eee",
borderTop:"6px solid #e63946",
borderRadius:"50%",
margin:"auto",
animation:"spin 1s linear infinite"
}}></div>

<p style={{
marginTop:"20px",
fontSize:"18px",
color:"#111",
fontWeight:"bold"
}}>
Scanning underway...
</p>

<p style={{color:"#666"}}>
Your results will appear shortly
</p>

</div>

</div>

)}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"15px",
marginTop:"20px"
}}>

<div style={{
background:"#ffffff",
border:"2px solid #e63946",
padding:"15px",
borderRadius:"8px",
textAlign:"center"
}}>
<h4 style={{color:"#e63946"}}>System Status</h4>
<p style={{color:"#111"}}>{status}</p>
</div>


<div style={{
background:"#ffffff",
border:"2px solid #e63946",
padding:"15px",
borderRadius:"8px",
textAlign:"center"
}}>
<h4 style={{color:"#e63946"}}>Threat Feed</h4>
<p style={{color:"#111"}}>{feed}</p>
</div>


<div style={{
background:"#ffffff",
border:"2px solid #e63946",
padding:"15px",
borderRadius:"8px",
textAlign:"center"
}}>
<h4 style={{color:"#e63946"}}>Detection Engine</h4>
<p style={{color:"#111"}}>{engine}</p>
</div>

</div>

</div>

)

}

/* spinner animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

ReactDOM.createRoot(
document.getElementById("react-soc-panel")
).render(<SocPanel />);