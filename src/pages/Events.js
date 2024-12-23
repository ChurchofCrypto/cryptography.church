function Events() {
  return (
    <section id="events" className="page-section">
      <h2>Sacred Gatherings</h2>
      <div className="content-wrapper">
        <div className="event-header">
          <h3>38C3 - Chaos Communication Congress</h3>
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