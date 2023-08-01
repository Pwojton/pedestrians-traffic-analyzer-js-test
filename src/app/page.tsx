export default function Home() {
  return (
    <div>
      <video autoPlay={true} width="100%">
        <source
          src="http://live.uci.agh.edu.pl/video/stream2.cgi?start=1572349755"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
