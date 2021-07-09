import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import Main from '../templates/Main/Main';

import Video from '../components/Video/Video';
import Jumbotron from '../components/Jumbotron/Jumbotron';

const headerImage = '/We_are_HAB.png';
const video = '/We_are_HAB.mp4';

export default function Home() {
	return (
		<Main title='Home - Hawaii Association of the Blind'>
			<Jumbotron
				bgImage={headerImage}
				height={60}>
				<>
					<h1>Hawaii Association of the Blind</h1>
					<p>
						“advocating independence, equality,
						and opportunity for the blind”
					</p>
				</>
			</Jumbotron>
			<section className='bg-primary text-white text-center py-5'>
				<Container>
					<h2>Upcoming Events</h2>
					<Row className='py-3'>
						<Col md={4}>
							<h3>ACB National Convention</h3>
							<p>July 16 - 23, 2021</p>
						</Col>
						<Col md={4}>
							<h3>HAB Monthly Meeting</h3>
							<p>
								Saturday August 7, 2021 10:00 AM -
								12:00 PM
							</p>
						</Col>
						<Col md={4}>
							<h3>PAC Back To School Event</h3>
							<p>
								Saturday August 21, 2021 11:00 AM
								- 1:00 PM
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			<Container className='py-5'>
				<Row>
					<Col md={6}>
						<Video
							video={video}
							poster={headerImage}
						/>
					</Col>
					<Col
						md={6}
						className='d-flex flex-column justify-content-center'>
						<p>
							Guided by its members, HAB advocates
							equality of people who are blind and
							visually impaired, inspires
							community, and connects you with
							education, resources, and each other
							to support your independence.
						</p>
					</Col>
				</Row>
			</Container>
		</Main>
	);
}
