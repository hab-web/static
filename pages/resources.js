import {
	Card,
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import Main from '../templates/Main/Main';

import Video from '../components/Video/Video';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faFax,
	faGlobe,
	faMapMarkerAlt,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';

const headerImage = '/We_are_HAB.png';
const video = '/We_are_HAB.mp4';

export default function Home() {
	return (
		<Main
			title='Resources - Hawaii Association of the Blind'
			headline='Resources'>
			<Container>
				<Row>
					<Col lg={4}>
						<h2>American Council of the Blind</h2>
						<p>
							ACB advocates for equality of people
							who are blind and visually impaired,
							inspires community, and connects you
							with education, resources, and each
							other to support your independence.
						</p>
						<p>
							<a href='tel:(202) 467-5081'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(202)
								467-5081
							</a>
						</p>
						<p>
							<a href='tel:(800) 424-8666'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Toll-free: </strong>
								(800) 424-8666
							</a>
						</p>
						<p>
							<FontAwesomeIcon
								icon={faFax}
								className='mr-2'
							/>
							<strong>Fax: </strong>
							(703) 465-5085
						</p>
						<p>
							<a href='mailto:info@acb.org'>
								<FontAwesomeIcon
									icon={faEnvelope}
									className='mr-2'
								/>
								<strong>Email: </strong>
								info@acb.org
							</a>
						</p>
						<p>
							<a href='  https://acb.org/'>
								<FontAwesomeIcon
									icon={faGlobe}
									className='mr-2'
								/>
								<strong>Website: </strong>
								https://acb.org/
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/American+Council+of+the+Blind/@38.831669,-77.1248677,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b689e4e1e47f:0xc05d2655436a97c8!8m2!3d38.8318093!4d-77.1225983'>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								American Council of the Blind Inc
							</a>
							<br />
							1703 N Beauregard St, Suite 420
							<br />
							Alexandria, VA 22311
						</p>
					</Col>
					<Col lg={4}>
						<h2>
							Hawaii Division of Vocational
							Rehabilitation
						</h2>
						<p>
							Hawaii Division Vocational
							Rehabilitation (DVR) under the
							Department of Human Services is a
							statewide resource for people with
							disabilities seeking employment.
							Services provided by the Division of
							Vocational Rehabilitation is
							tailored to help persons with
							disabilities obtain competitive
							employment that is aligned with
							their job skills, interests, and
							abilities.
						</p>
						<p>
							<a href='tel:(808) 586-9729'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(808)
								586-9729
							</a>
						</p>
						<p>
							<a href='mailto:mbates@dhs.hawaii.gov'>
								<FontAwesomeIcon
									icon={faEnvelope}
									className='mr-2'
								/>
								<strong>Email: </strong>
								mbates@dhs.hawaii.gov
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/Division+of+Vocational+Rehabilitation+of+Hawaii/@21.3052169,-157.8597552,17z/data=!4m9!1m2!2m1!1sHawaii+Division+of+Vocational+Rehabilitation+1010+Richard+Street,+Suite+217+Honolulu,+Hawaii+96813!3m5!1s0x7c006de76020e643:0x5a3e04300a1070d!8m2!3d21.3031036!4d-157.8549538!15sCmJIYXdhaWkgRGl2aXNpb24gb2YgVm9jYXRpb25hbCBSZWhhYmlsaXRhdGlvbiAxMDEwIFJpY2hhcmQgU3RyZWV0LCBTdWl0ZSAyMTcgSG9ub2x1bHUsIEhhd2FpaSA5NjgxM5IBFXJlaGFiaWxpdGF0aW9uX2NlbnRlcg'>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								Hawaii Division of Vocational
								Rehabilitation
							</a>
							<br /> 600 Kapiolani Blvd Ste. 301,
							<br /> Honolulu, HI 96813
						</p>
					</Col>
					<Col lg={4}>
						<h2>Ho'opono</h2>
						<p>
							Ho'opono, from "ho'oponopono"
							meaning to make things right, is a
							branch of the Division of Vocational
							Rehabilitaion, Department of Human
							Services, State of Hawaii. Ho'opono
							assists blind and Visually impaired
							persons regardless of financial
							status, ethnic or national origin,
							religion, gender or disability.
							There is no fee for services,
							although there may be some
							incidental costs if you need to
							purchase adaptive aids and devices.
							You do not have to be totally blind
							to use Ho'opono's services.
							Blindness can vary from total
							blindness with no light perception
							to being able to read large print at
							a comfortable distance. If you are
							having difficulty doing tasks either
							at work or home because of poor
							vision, Ho'opono may be able to help
							you in a number of ways.
						</p>
						<p>
							<a href='tel:(808) 586-5269'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(808)
								586-9729
							</a>
						</p>
						<p>
							<a href='mailto:gabe@dhs.hawaii.gov'>
								<FontAwesomeIcon
									icon={faEnvelope}
									className='mr-2'
								/>
								<strong>Email: </strong>
								mbates@dhs.hawaii.gov
							</a>
						</p>
						<p>
							<a href="https://www.google.com/maps/place/Ho'opono+Service+For+the+Blind/@21.322826,-157.8570423,17z/data=!3m1!4b1!4m5!3m4!1s0x7c006dd6768aee55:0x7d0acbe9482628f8!8m2!3d21.3228714!4d-157.8548288">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								Ho'opono
							</a>
							<br />
							1901 Bachelot Street
							<br />
							Honolulu, Hawaii 96817
						</p>
					</Col>
					<Col lg={4}>
						<h2>
							Hawaii Centers for Independent
							Living
						</h2>
						<p>
							The Hawaii Centers for Independent
							Living (HCIL) is a state-wide,
							non-profit agency dedicated to
							ensuring the rights of peoples with
							disabilities to live fully
							integrated in the community with
							equal opportunities and choices in
							life.
						</p>
						<p>
							<a href='tel:(808) 586-9729'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(808)
								522-5400
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/Hawaii+Centers+For+Independent/@21.3167862,-157.8687614,17z/data=!3m1!4b1!4m5!3m4!1s0x7c006e7052976c2d:0xf73a474c3296d88d!8m2!3d21.316618!4d-157.8668501'>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								Hawaii Centers for Independent
								Living
							</a>
							<br />
							414 Kuwili St. Suite 102
							<br />
							Honolulu, Hawaii 96817
						</p>
					</Col>
					<Col lg={4}>
						<h2>
							Hawaii State Library for the Blind
							and Print Disabled
						</h2>
						<p>
							The Hawaii State Library for the
							Blind and Print Disabled lends
							reading materials in audio, braille,
							and large print formats to people of
							all ages who have a visual or
							physical disability that prevents
							them from reading standard printed
							material. Our services are free of
							charge.
						</p>
						<p>
							<a href='tel:(808) 733-8444'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(808)
								733-8444
							</a>
						</p>
						<p>
							<FontAwesomeIcon
								icon={faFax}
								className='mr-2'
							/>
							<strong>Fax: </strong>
							(808) 733-8449
						</p>
						<p>
							<a href='mailto:olbcirc@librarieshawaii.org'>
								<FontAwesomeIcon
									title="Email Ho'opono"
									icon={faEnvelope}
									className='mr-2'
								/>
								<strong>Email: </strong>
								olbcirc@librarieshawaii.org
							</a>
						</p>
						<p>
							<a href='http://www.librarieshawaii.org/lbph'>
								<FontAwesomeIcon
									icon={faGlobe}
									className='mr-2'
								/>
								<strong>Website: </strong>
								http://www.librarieshawaii.org/lbph
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/402+Kapahulu+Ave,+Honolulu,+HI+96815/@21.2748398,-157.819161,17z/data=!3m1!4b1!4m5!3m4!1s0x7c00727919c32f19:0x9e352c9b145c3867!8m2!3d21.2748398!4d-157.8169723'>
								<FontAwesomeIcon
									title="Get directions to Ho'opono"
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								Hawaii State Library for the Blind
								and Print Disabled
							</a>
							<br />
							402 Kapahulu Avenue
							<br />
							Honolulu, Hawaii, 96815-3848
						</p>
					</Col>
					<Col lg={4}>
						<h2>
							Hawaii Disability Rights Center
						</h2>
						<p>
							The Hawaii Disability Rights Center
							is Hawaii’s designated Protection
							and Advocacy (P&A) System for people
							with disabilities and Hawaii’s
							designated Client Assistance Program
							(CAP) for applicants and clients of
							programs funded under the federal
							Rehabilitation Act.
						</p>
						<p>
							<a href='tel:(808) 949-2922'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong> (808)
								949-2922
							</a>
						</p>
						<p>
							<a href='tel:1-800-882-1057'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Toll Free: </strong>
								1-800-882-1057
							</a>
						</p>
						<p>
							<FontAwesomeIcon
								icon={faFax}
								className='mr-2'
							/>
							<strong>Fax: </strong>
							(808)949-2928
						</p>
						<p>
							<a href='mailto:info@hawaiidisabilityrights.or'>
								<FontAwesomeIcon
									title="Email Ho'opono"
									icon={faEnvelope}
									className='mr-2'
								/>
								<strong>Email: </strong>
								info@hawaiidisabilityrights.or
							</a>
						</p>
						<p>
							<a href=' https://www.hawaiidisabilityrights.org'>
								<FontAwesomeIcon
									icon={faGlobe}
									className='mr-2'
								/>
								<strong>Website: </strong>
								https://www.hawaiidisabilityrights.org
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/Hawaii+Disability+Rights+Center/@21.310052,-157.8625675,17z/data=!3m1!4b1!4m5!3m4!1s0x7c006e7452ec94e5:0x5a994a9dc49e5c43!8m2!3d21.3098938!4d-157.8602564'>
								<FontAwesomeIcon
									title="Get directions to Ho'opono"
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								Hawaii Disability Rights Center
							</a>
							<br />
							1132 Bishop Street, Suite 2102
							<br />
							Honolulu, HI 9681
						</p>
					</Col>
					<Col lg={4}>
						<h2>
							National Library Services for the
							Blind and Print-Disabled
						</h2>
						<p>
							National Library Service (NLS) is a
							free braille and talking book
							library service for people with
							temporary or permanent low vision,
							blindness, or a physical,
							perceptual, or reading disability
							that prevents them from using
							regular print materials.
						</p>
						<p>
							<a href='tel:(202) 707-5100'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(202)
								707-5100
							</a>
						</p>
						<p>
							<a href='tel: (800) 424-8567'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Toll Free: </strong>
								(800) 424-8567
							</a>
						</p>
						<p>
							<FontAwesomeIcon
								icon={faFax}
								className='mr-2'
							/>
							<strong>Fax: </strong>
							(202) 707-0712
						</p>
						<p>
							<a href='mailto: nsl@loc.gov'>
								<FontAwesomeIcon
									title="Email Ho'opono"
									icon={faEnvelope}
									className='mr-2'
								/>
								<strong>Email: </strong>
								nsl@loc.gov
							</a>
						</p>
						<p>
							<a href='https://www.loc.gov/nls'>
								<FontAwesomeIcon
									icon={faGlobe}
									className='mr-2'
								/>
								<strong>Website: </strong>
								https://www.loc.gov/nls
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/1291+Taylor+St+NW,+Washington,+DC+20542/@38.9412921,-77.0306584,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7c816a78d8e4f:0x2f47af5b5eaed0e2!8m2!3d38.9412921!4d-77.0284697'>
								<FontAwesomeIcon
									title="Get directions to Ho'opono"
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								National Library Services for the
								Blind and Print-Disabled
							</a>
							<br />
							1291 Taylor Street, NW
							<br />
							Washington, DC 20542-4962
						</p>
					</Col>
					<Col lg={4}>
						<h2>Perkins School for the Blind</h2>
						<p>
							Perkins provides unparalleled
							educational services to children and
							young adults with blindness,
							deafblindness and multiple
							disabilities. They also share their
							expertise and collaborate with
							global changemakers in the fields of
							education, business, medicine and
							policy.
						</p>
						<p>
							<a href='tel: (617) 924-3434'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(617)
								924-3434
							</a>
						</p>
						<p>
							<a href='mailto:Info@Perkins.or'>
								<FontAwesomeIcon
									title="Email Ho'opono"
									icon={faEnvelope}
									className='mr-2'
								/>
								<strong>Email: </strong>
								Info@Perkins.or
							</a>
						</p>
						<p>
							<a href='https://www.perkins.org'>
								<FontAwesomeIcon
									icon={faGlobe}
									className='mr-2'
								/>
								<strong>Website: </strong>
								https://www.perkins.org
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/Perkins+School+for+the+Blind/@42.360959,-71.1774907,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3781093534039:0x31aa255844888e81!8m2!3d42.360959!4d-71.175302'>
								<FontAwesomeIcon
									title="Get directions to Ho'opono"
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								Perkins School for the Blind
							</a>
							<br />
							175 North Beacon Street
							<br />
							Watertown, MA 02472
						</p>
					</Col>
					<Col lg={4}>
						<h2>
							American Foundation for the Blind
						</h2>
						<p>
							AFB's mission is to create a world
							of no limits for people who are
							blind or visually impaired. Part of
							their effortis to mobilize leaders,
							advance understanding, and champion
							impactful policies and practices
							using research and data.
						</p>
						<p>
							<a href='tel:(212) 502-7600'>
								<FontAwesomeIcon
									icon={faPhone}
									className='mr-2'
								/>
								<strong>Phone: </strong>(212)
								502-7600
							</a>
						</p>
						<p>
							<a href='https://www.afb.org/support-afb-research'>
								<FontAwesomeIcon
									icon={faGlobe}
									className='mr-2'
								/>
								<strong>Website: </strong>
								https://www.afb.org/support-afb-research
							</a>
						</p>
						<p>
							<a href='https://www.google.com/maps/place/Perkins+School+for+the+Blind/@42.360959,-71.1774907,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3781093534039:0x31aa255844888e81!8m2!3d42.360959!4d-71.175302'>
								<FontAwesomeIcon
									title="Get directions to Ho'opono"
									icon={faMapMarkerAlt}
									className='mr-2'
								/>
								American Foundation for the Blind
							</a>
							<br />
							1401 South Clark Street Suite 730
							<br />
							Arlington, VA 22202
						</p>
					</Col>
				</Row>
			</Container>
		</Main>
	);
}
