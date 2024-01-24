import React, {useEffect, useState} from 'react';

export const Video = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const breakPoint = 540
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, []);


	return (
		<div>
			{
				width < breakPoint ? <MobileVideos/> : <DesktopVideos/>
			}
		</div>
	);
}

const MobileVideos = () => {
	return (
		<iframe width="360" height="202" src="https://www.youtube.com/embed/jm4q7_nbJ88?si=ENsWaubqrkRWZwGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
	)
}

const DesktopVideos = () => {
	return (
		<iframe width="560" height="315" src="https://www.youtube.com/embed/jm4q7_nbJ88?si=ENsWaubqrkRWZwGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
	)
}