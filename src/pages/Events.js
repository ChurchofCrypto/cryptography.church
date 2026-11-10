const WORKSHOPS_40C3 = [
  {
    title: 'Intro to Zero Knowledge',
    length: '2 h',
    desc: 'A speedrun from introductory zero knowledge to polynomial commitments, PLONK and layered proving systems.',
  },
  {
    title: 'The Alberti Cipher: Build It, Use It, Break It',
    length: '1 h',
    desc: (
      <>
        Build a paper copy of the 40C3 coin's cipher disk, send secret messages, then break them, and learn why
        "secret" is not "secure". No laptop needed. Try it now:{' '}
        <a href="/alberti.html" className="cipher-link">the Alberti disk</a>.
      </>
    ),
  },
  {
    title: 'Halo2 Tutorial',
    length: '1 h',
    desc: 'Everybody writes a ZK circuit for a simple program. How ZK developed, from theory to smart contracts and beyond, and what its role in our world should be.',
  },
  {
    title: 'Trustworthy AI',
    length: '1 h',
    desc: 'Federated learning with secure, robust and verifiable aggregation: a neural network whose (limited) trust comes only from cryptography and a majority of N parties, with no central authority.',
  },
  {
    title: 'Garbled Circuits with Ireul',
    length: '1 h',
    desc: 'Multi-party computation with garbled circuits, using Ireul, an engine that brings together a decade of improvements. Maybe it is time for a comeback.',
  },
  {
    title: "Formal Verification Quick-Dive: Proving Alberti's Cipher in Lean",
    length: '1.5 h',
    desc: (
      <>
        Learn formal verification by proving the Alberti cipher correct, and see why "proved correct" is not "hard to
        break". Preview it now: <a href="/lean.html" className="cipher-link">Proving the Alberti disk</a>.
      </>
    ),
  },
  {
    title: 'Dabao Eval Board: Walkthrough + Hello World',
    length: 'TBA',
    desc: 'Hands-on with the Baochip Dabao board, compared with other small boards; secure computing at the edge.',
  },
  {
    title: 'Meshtastic, Reticulum and Friends',
    length: 'TBA',
    desc: 'All the cool ways to message your friends off the grid, and the cryptography involved. Devices to try.',
  },
];

const ALSO_PLANNED_40C3 = [
  {
    title: 'Crepes & Coffee',
    desc: 'Crepe hours after brunch, and perhaps at midnight, if the kitchen rules allow. Coffee and tea either way.',
  },
];

function Events() {
  return (
    <section id="events" className="page-section">
      <h2>Sacred Gatherings</h2>
      <div className="content-wrapper">
        <div className="event-header">
          <h3>40C3 - Chaos Communication Congress</h3>
          <a href="https://events.ccc.de/congress/2026/infos/startpage.html"
             target="_blank"
             rel="noopener noreferrer"
             className="event-link">About 40C3</a>
        </div>
        <p className="event-note">
          Hamburg, 27–30 December 2026. Find us inside the Milliways assembly. Times and places to be announced;
          the program may still change.
        </p>

        <div className="event-schedule">
          <h4>Workshops</h4>
          {WORKSHOPS_40C3.map((w) => (
            <div className="event-item" key={w.title}>
              <span className="event-time">{w.length}</span>
              <strong>{w.title}</strong>
              <p className="event-desc">{w.desc}</p>
            </div>
          ))}

          <h4>Also planned</h4>
          {ALSO_PLANNED_40C3.map((w) => (
            <div className="event-item" key={w.title}>
              <strong>{w.title}</strong>
              <p className="event-desc">{w.desc}</p>
            </div>
          ))}
        </div>

        <div className="event-header">
          <h3>38C3 - Chaos Communication Congress (2024)</h3>
          <a href="https://events.ccc.de/congress/2024/hub/en/assembly/CoC/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="event-link">View Assembly Details</a>
        </div>

        <div className="event-schedule">
          <h4>Day 1</h4>
          <div className="event-item">
            <span className="event-time">13:00</span>
            <p>Genesis: Safely Generating Keys with Chaos</p>
          </div>
          <div className="event-item">
            <span className="event-time">16:00</span>
            <p>The Holy Trinity of Randomness: Entropy, Chaos, and the Divine</p>
          </div>

          <h4>Day 2</h4>
          <div className="event-item">
            <span className="event-time">13:00</span>
            <p>From Cypherpunks to Crypto Priests: Mastering PGP</p>
          </div>
          <div className="event-item">
            <span className="event-time">16:00</span>
            <p>Conjuring AI Angels: Summoning Wisdom in the Age of Algorithms</p>
          </div>
          <div className="event-item">
            <span className="event-time">17:30</span>
            <p>The Sacred Mesh: Weaving a Network of Faith Through Meshtastic</p>
          </div>

          <h4>Day 3</h4>
          <div className="event-item">
            <span className="event-time">13:00</span>
            <p>Sanctuary in Silicon: Shielding Keys, Gods, and Prayer Portals in Trusted Execution Environments</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events; 