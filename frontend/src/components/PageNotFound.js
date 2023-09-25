import React from 'react'

export default function PageNotFound() {
  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      height:'100vh'
    }}>
    <center>
    <div>
        <h2>The page you are looking for does not exist.</h2>
      </div>
      <div>
      <p>Click <a href={`http://localhost:3000/UserDashboard/`} style={{textDecoration:'none'}}>here</a> to return to the home page.</p>
      </div>
    </center>
     
      
        

    </div>
  )
}
