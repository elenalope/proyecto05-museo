import React, { useState, useEffect } from 'react';
import './home.css';
import BackgroundHome from '../../assets/img/BackgroundHome.png'
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    const fetchBicycles = async () => {
      try {
        const response = await fetch('http://localhost:3000/bicycles');
        const data = await response.json();
        setBicycles(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching bicycles:', error);
      }
    };

    fetchBicycles();
  }, []);
  console.log(bicycles)
  const navigate = useNavigate();
  return (
    <>
        <Nav/>
        <img src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul"/>
        <div>
          <h2>Modelos de bicicletas:</h2>
            {bicycles.map((bicycle) =>(
            <section className='gallery'>
            <div className='gallerygrid '>
              <img className="bicyclesimg" src={bicycle.image}/>
              <p key={bicycle.id}>{bicycle.model}</p>
            </div>
            <button className="editbutton" onClick={() => navigate("/Edit")}>
     <img className="editbutton" src="src\assets\img\Edit.png"></img></button>  
        </section>  
            ))}
        </div>
        <Footer/>  
    </>
  )
}

export default Home