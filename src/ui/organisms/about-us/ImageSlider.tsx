"use client";
import ReactPlayer from "react-player";

const ImageSlider = () => {
	return (
		<div>
			{/* <video
				src="https://api.znami.usermd.net/wp-content/uploads/2025/05/O-nas-Na-kanapie.mp4"
				className="aspect-video w-full"
				autoPlay
				muted
				loop
				playsInline
				controls
				disablePictureInPicture
				controlsList="nodownload nofullscreen noremoteplayback"
			></video> */}
			<ReactPlayer
				url="https://api.znami.usermd.net/o-nas-na-kanapie/"
				width="100%"
				height="100%"
				loop
				controls
				muted
				playing
			/>
		</div>
	);
};

export default ImageSlider;
