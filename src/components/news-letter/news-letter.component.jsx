import React from 'react';
import './news-letter.styles.css';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const NewLetter = () => {
	return (
		<div className="news-letter">
			<div className="left">
				<div className="news-letter-icon-container">
					<FaEnvelopeOpenText />
				</div>
				<div className="new-letter-content">
					<h2>Get Our Latest Update In Your Email</h2>
					<p>Subscribe to get receive Updates on sales, new arrivals and news.</p>
				</div>
			</div>
			<div className="right">
				<form>
					<FormInput name="email" type="email" placeholder="E-mail" required />
					<div>
						<CustomButton>Subscribe</CustomButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewLetter;
