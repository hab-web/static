import {
	Button,
	Col,
	Container,
	Row
} from 'react-bootstrap';
import Main from '../templates/Main/Main';

import Video from '../components/Video/Video';
import Jumbotron from '../components/Jumbotron/Jumbotron';

const headerImage = '/we_are_hab.png';
const video = '/HAB_WE-ARE-HAB_A_PL.mp4';

export default function Home() {
	return (
		<Main title='Home - Hawaii Association of the Blind'>
			<Jumbotron bgImage={headerImage}>
				<h1>Hawaii Association of the Blind</h1>
				<p>
					“advocating independence, equality, and
					opportunity or the blind”
				</p>
			</Jumbotron>
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
