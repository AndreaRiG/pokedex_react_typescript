import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./footer.module.css";

import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";


const Footer = () => {
    return (
        <footer className={styles.footer}>
           <Link className={styles.footerLink} to="/pokemons">
            <img className={styles.footericon} src ={PokemonPic} alt="Pokeball" />
            Pokemons
            </Link>

            <Link 
            onClick={(event) => event.preventDefault()}
            className={styles.footerLink} to="/items">
            <img className={styles.footericon} src ={ItemsPic} alt="Items" />
            Items
            </Link>

            <Link 
            onClick={(event) => event.preventDefault()}
            className={styles.footerLink} to="/map">
            <img className={styles.footericon} src ={LocationPic} alt="Location" />
            Map
            </Link>


        </footer>
    );
};

export default Footer;