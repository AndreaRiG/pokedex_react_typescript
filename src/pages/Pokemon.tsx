import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";

import Footer from "../components/Footer";
import styles from "./pokemon.module.css";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
const fetchedPokemon = await fetchPokemon(name as string);
setPokemon(fetchedPokemon);
 }
 getPokemon();
    }, [name]);

    return (
        <div>
            <button className={styles.pokeballButton}onClick={() =>navigate(-1)}>
              <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> 
              Go back
            </button>

            <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
            <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
            <div> Nr.{pokemon?.id}</div>
            <div>
            <img className={styles.pokemonInfoImg}
            src={pokemon?.imgSrc} alt={pokemon?.name} /> 
            </div>
            <div> HP: {pokemon?.hp}</div>
            <div> Attack: {pokemon?.attack}</div>
            <div> Defense: {pokemon?.defense}</div>
        </main>
            </div>

            <Footer />

        </div>
    );
};

export default Pokemon;