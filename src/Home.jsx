const Home = () => {
  return (
    <main className="home">
      <div className="home-container">
        <section className="about-section">
          <p className="about-text">
            Hey there! I'm Kia Jalali. I studied computer science at <a href="https://www.sfu.ca" target="_blank" rel="noopener noreferrer">Simon Fraser University</a>. I've been fortunate enough to intern at a few places along the way.
          </p>

          <p className="about-text">
            I interned at <a href="https://www.snap.com" target="_blank" rel="noopener noreferrer">Snapchat</a>, 2x Amazon (<a href="https://github.com/alexa/avs-device-sdk" target="_blank" rel="noopener noreferrer">Alexa C++ SDK</a> and <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS</a>), <a href="https://drw.com" target="_blank" rel="noopener noreferrer">DRW Trading</a>, and <a href="https://www.sap.com" target="_blank" rel="noopener noreferrer">SAP</a>.
          </p>

          <p className="about-text">
            I'm starting my new job as a full-time software engineer at <a href="https://www.bloomberg.com" target="_blank" rel="noopener noreferrer">Bloomberg</a> this January. I'm mostly interested in distributed systems, backend and infrastructure work.
          </p>

          <p className="about-text">
            Outside of work, I like to ski (shoutout to whistler ifykyk), play chess, and soccer.
          </p>

          <p className="about-email">
            if you want to chat: <a href="mailto:kia.jjalali@gmail.com">kia.jjalali@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
