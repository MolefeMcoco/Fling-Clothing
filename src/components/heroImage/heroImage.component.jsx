import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import heroPicture from '../../assets/headerImage.png';
import './heroImage.styles.css';

const HeroImage = () => {
	return (
		<div className="hero-container">
			<div className="left">
				<h1>A Simple Minimalist style</h1>
				<div>
					<Link to="/shop">
						<CustomButton>Shop Now</CustomButton>
					</Link>
				</div>
			</div>
			<div className="right">
				<img src={heroPicture} alt="" />
			</div>
		</div>
	);
};

export default HeroImage;
