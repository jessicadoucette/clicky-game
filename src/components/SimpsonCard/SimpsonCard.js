import React from "react";
// import { Link } from "react-router-dom";
import "./SimpsonCard.css";


const SimpsonCard = props => (

  <div class="card" onClick={props.cardClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={props.image} />
    </div>
		</div>


);

	export default SimpsonCard;
	