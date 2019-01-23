import React from "react";
// import { Link } from "react-router-dom";
import "./SimpsonCard.css";


const SimpsonCard = props => (

  <div class="card" onClick={props.cardClick}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
		</div>


);

	export default SimpsonCard;
	