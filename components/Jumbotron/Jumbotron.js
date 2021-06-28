import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const Jumbotron = ({ bgImage, children }) => {
	return (
		<div
			className='jumbotron p-4 p-md-5 text-white rounded min-vh-100 d-flex justify-content-center align-items-center'
			style={{
				background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
				backgroundSize: 'cover'
			}}>
			<Container className='text-center'>
				{children}
			</Container>
		</div>
	);
};

Jumbotron.propTypes = {
	/**
	 * Path to the background image of the Jumobotron
	 */
	bgImage: PropTypes.string.isRequired,
	/**
	 * The content of the Jumbotron
	 */
	children: PropTypes.arrayOf(PropTypes.element)
		.isRequired
};

export default Jumbotron;
