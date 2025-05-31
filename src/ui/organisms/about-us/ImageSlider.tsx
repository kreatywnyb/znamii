const ImageSlider = () => {
	return (
		<div>
			<video
				src="https://api.znami.usermd.net/wp-content/uploads/2025/05/O-nas-Na-kanapie.mp4"
				className="aspect-video w-full"
				autoPlay
				muted
				loop
				playsInline
				controls
				disablePictureInPicture
			></video>
		</div>
	);
};

export default ImageSlider;
