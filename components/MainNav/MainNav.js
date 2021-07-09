import {
	Container,
	Nav,
	Navbar,
	NavDropdown,
} from 'react-bootstrap';
import Link from 'next/link';

const logo = '/logo.svg';

const MainNav = () => {
	return (
		<Navbar
			collapseOnSelect
			bg='light'
			expand='lg'
			className='p-3'>
			<Container>
				<Link href='/' passHref>
					<Navbar.Brand>
						<img
							src={logo}
							height={75}
							alt='Hawaii Associatoin of the Blind Home'
							className='d-inline-block align-top'
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Link href='/' passHref>
							<Nav.Link>Home</Nav.Link>
						</Link>
						<Link href='/about' passHref>
							<Nav.Link>About</Nav.Link>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MainNav;
