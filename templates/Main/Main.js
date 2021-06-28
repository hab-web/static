import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import {
	Button,
	Container,
	Nav
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';

import MainNav from '../../components/MainNav/MainNav';

const Main = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<script
					src='https://kit.fontawesome.com/6dce789bf3.js'
					crossOrigin='anonymous'></script>
			</Head>
			<MainNav />
			{children}
			<section className='bg-primary text-white text-center mt-5 py-5'>
				<Container>
					<p className='lead'>
						Your support helps give people who are
						blind and visually impaired the tools
						of independence
					</p>
					<Link href='/donate' passHref>
						<Button as='a' variant='secondary'>
							Donate
						</Button>
					</Link>
				</Container>
			</section>
			<footer>
				<Container className='d-flex justify-content-between py-5'>
					<Nav>
						<Link href='/' passHref>
							<Nav.Link>Home</Nav.Link>
						</Link>
					</Nav>
					<Nav>
						<Link
							href='https://www.facebook.com/hawaiiassociationoftheblind'
							passHref>
							<Nav.Link>
								<FontAwesomeIcon
									size='2x'
									icon={faFacebookF}
								/>
							</Nav.Link>
						</Link>
						<Link
							href='https://www.youtube.com/channel/UCQs2vVnHl8dOHnIUJJQltOg'
							passHref>
							<Nav.Link>
								<FontAwesomeIcon
									size='2x'
									icon={faYoutube}
								/>
							</Nav.Link>
						</Link>
					</Nav>
				</Container>
			</footer>
		</>
	);
};

Main.propTypes = {
	/**
	 * The content of the <title> tag
	 */
	title: PropTypes.string.isRequired
};

export default Main;
