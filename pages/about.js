import {
	Card,
	Col,
	Container,
	Row,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUsers,
	faMobileAlt,
	faCameraRetro,
	faBookReader,
	faMoneyBillWaveAlt,
	faCalendarAlt,
	faPhoneVolume,
	faGraduationCap,
	faChild,
	faBolt,
} from '@fortawesome/free-solid-svg-icons';

import Main from '../templates/Main/Main';

import Video from '../components/Video/Video';

const habImage = '/we_are_hab.png';
const habVideo = '/HAB_WE-ARE-HAB_A_PL.mp4';

const loveImage = '/HAB_Love_Is_Blind.png';
const loveVideo = '/HAB_Love_Is_Blind.mp4';

const childImage = '/HAB Child.mp4.png';
const childVideo = '/HAB_Child.mp4';

export default function Home() {
	return (
		<Main
			title='About - Hawaii Association of the Blind'
			headline='About the Hawaii Association of the Blind'>
			<Container>
				<p>
					The Hawai’i Association of the Blind is
					an organization dedicated to advocating
					for independence, striving for equality,
					and creating as many opportunities for
					all blind and visually impaired persons.
				</p>
				<p>
					Guided by its members, HAB works to
					inspire the community. It also works to
					connect persons to education, resources,
					and encouraging the support of one
					another in their goal of independence.
				</p>
				<p>
					The Hawai’i Association of the Blind
					strives to be an active player in
					supporting the well-being of blind
					people. By educating and aiding the
					promotion of self-development,
					emphasizing positive attitudes, and
					furthering the education and training of
					blind and visually impaired people.
				</p>
				<Row className='my-5'>
					<Col md={4}>
						<Video
							video={habVideo}
							poster={habImage}
						/>
					</Col>
					<Col md={4}>
						<Video
							video={childVideo}
							poster={childImage}
						/>
					</Col>
					<Col md={4}>
						<Video
							video={loveVideo}
							poster={loveImage}
						/>
					</Col>
				</Row>
				<h2>HAB Committees</h2>
				<Row className='py-4'>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Membership'
									icon={faUsers}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									Membership
								</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Membership
										committee is to promote and
										educate potential members to
										the Hawai'i Association of the
										Blind. The committee also
										lends support to members by
										reporting all birth
										announcements, marriages, and
										member passings as needed.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Parent and Child Committee'
									icon={faBolt}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>Advocacy</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Advocacy
										committee is to lend support,
										testimonials, and membership
										presence to legislative bills
										that support blind and
										visually impaired persons in
										the state of Hawai'i. The
										committee also provides
										advocacy education to blind
										and visually impaired persons
										in the state of Hawai'i.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Gadgets and Gizmos'
									icon={faMobileAlt}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									Gadgets and Gizmos
								</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Gadgets and
										Gizmos committee is to provide
										educational updates on daily
										living and technology aids.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Publicity and Media'
									icon={faCameraRetro}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									Publicity and Media
								</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Publicity
										and Media committee is to
										provide information and
										historical and pertinent
										information to anyone
										interested in the Hawai'i
										Association of the blind by
										way of the HAB website,
										Facebook, Instagram,
										newsletter, and any other
										forms of social media.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Library'
									icon={faBookReader}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>Library</Card.Title>
								<Card.Text>
									<p>
										Any reports, informational
										notices, etc, will be reported
										through the Publicity and
										Media committee as needed.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Fundraising'
									icon={faMoneyBillWaveAlt}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									Fundraising
								</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Fundraising
										committee is to continue
										mini-fundraisers, such as
										cookie sales, Zippy's tickets,
										etc.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Events'
									icon={faCalendarAlt}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>Events</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Events
										committee is to host all
										special events, including, but
										not limited to, the HAB annual
										convention, Thanksmas and New
										Year's parties, and other
										social events.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Contact'
									icon={faPhoneVolume}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>Contact </Card.Title>
								<Card.Text>
									<p>
										The purpose of the Contact
										committee is to inform members
										of upcoming events, meetings,
										and information regarding the
										blind community at large.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Scholarship'
									icon={faGraduationCap}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									Scholarship
								</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Scholarship
										committee is to promote and
										review applicant submissions
										and the ultimate selection of
										scholarship recipients.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className='text-center py-4'>
							<Card.Header className='text-secondary'>
								<FontAwesomeIcon
									size='5x'
									title='Parent and Child Committee'
									icon={faChild}
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>
									HAB Parent and Child Committee
								</Card.Title>
								<Card.Text>
									<p>
										The purpose of the Parent and
										Child committee is to
										facilitate relationships with
										parents and their blind or
										visually impaired child or
										children. The committee will
										also dedicate themselves to
										holding sessions that will
										provide information and
										education that will enrich the
										lives of parents and blind and
										visually impaired children.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Main>
	);
}
