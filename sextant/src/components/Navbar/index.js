import React from 'react';


    const navbar = {
        color: 'white',
        backgroundColor: 'black',
        fontSize: '1.1rem',
        height: '4rem',
        fontFamily: '"Times New Roman",Times,serif',
        paddingTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const headingPhoto = {
      width: '120px',
      height: '5rem',
      marginBottom: '1.4rem',
      marginLeft: '2rem',
      float: 'right'
    }

const Home = () => {
  return (
    <div style={navbar}>
        <h1>S E X T A N T</h1><img src="https://pbs.twimg.com/profile_images/1544364484310884353/6XyYwg0j_400x400.jpg" style={headingPhoto} alt="Cisco Logo"></img>
    </div>
  );
}
  
export default Home;