import React from 'react';

import ReactPlayer from 'react-player';

const video = ({ video, poster }) => {
	return (
		<ReactPlayer
			url={video}
			width={350}
			height={200}
			controls
			config={{
				file: {
					attributes: {
						poster: poster,
						controlsList: 'nodownload'
					}
				}
			}}
			style={{ display: 'inline' }}
		/>
	);
};

export default video;
