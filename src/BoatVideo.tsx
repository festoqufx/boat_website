function BoatVideo() {
  return (
    <video
      className="h-100vh w-full object-cover animate-clip-from-top-animation"
      autoPlay
      muted
      loop
    >
      <source src="https://fluffy-tarsier-407be1.netlify.app/boat-video.mp4" type="video/mp4" />
    </video>
  );
}

export default BoatVideo;
