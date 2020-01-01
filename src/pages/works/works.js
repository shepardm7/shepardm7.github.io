import React from 'react';
import blastImg from '../../assets/works/blast-img.png';
import crwnImg from '../../assets/works/crwn-img.png';
import pixabayImg from '../../assets/works/pixabay-img.png';

const WorkDescriptionComp = ({desc, list}) => (
	<div className="work-desc-container">
		{desc}<br/>
		{list ? <ul>{list.map((item, index) =>
			<li key={index} style={{ listStyle: 'none' }}>
			<strong>{item.title}: </strong>{item.desc}<br />
			</li>)}</ul> : null}
	</div>
);

const Works = [
	{
		title: 'CRWN Shopping',
		visible: true,
		description: <WorkDescriptionComp desc="A simple shopping website for clothes and apparels." list={[
			{ title: 'Frontend', desc: 'React JS' },
			{ title: 'Backend', desc: 'Firebase' },
			{ title: 'Authentication', desc: 'Firebase Auth' },
			{ title: 'Others', desc: <React.Fragment><em>Stripe</em> for payment, <em>Redux</em> for state management</React.Fragment> },
		]}/>,
		image: crwnImg
	},
	{
		title: 'Pixabay Image Search Engine',
		visible: false,
		description: <WorkDescriptionComp desc="An image search engine that uses Pixabay's API." list={[
			{ title: 'Frontend', desc: 'HTML, CSS, JS and jQuery' },
			{ title: 'Others', desc: 'Pixabay\'s API' }
		]}/> ,
		image: pixabayImg
	},
	{
		title: 'BLAST (Beacontree Library Automated System)',
		visible: false,
		description: <WorkDescriptionComp desc={<React.Fragment>This a work related project that I worked on at Beacontree. I was responsible for developing and maintaining most of the backend and frontend (Website and Android mobile/kiosk) A checkout system for libraries. Items in the library must be tagged with a unique barcode/RFID tag. Patrons who use the library use the system to checkout items by logging in and scanning the item&apos;s barcode. Thus, keeping a track of <em>who has what</em> in the system. The BLAST system comes in the form of a website, Android/iOS app and an Android Kiosk (for use in the library).<br />Note: This system is only available for use to registered clients.</React.Fragment>} list={[
			{ title: 'Web', desc: 'React JS' },
			{ title: 'Mobile', desc: 'Android' },
			{ title: 'Backend', desc: 'PHP, MySQL' },
			{ title: 'Authentication', desc: 'JWT and Redis for caching tokens' }
		]}/>,
		image: blastImg
	}
];

export const resetWorksState = () => {
	Works.forEach(work => work.visible = false);
	Works[0].visible = true;
};

export default Works;