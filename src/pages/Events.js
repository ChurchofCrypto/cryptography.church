function Events() {
  return (
    <section id="events" className="page-section">
      <h2>Sacred Gatherings</h2>
      <div className="content-wrapper">
        
        {/* Current Event - WHY 2025 */}
        <div className="event-header">
          <h3>WHY 2025 - Hackercamp</h3>
          <p className="event-description">Join us for four days of sacred digital communion in the Netherlands</p>
        </div>

        <div className="event-schedule">
          <h4>Saturday 9th</h4>
          <div className="event-item">
            <span className="event-time">11:00</span>
            <p>Morning Espresso</p>
          </div>

          <h4>Sunday 10th</h4>
          <div className="event-item">
            <span className="event-time">10:00</span>
            <p>Morning Espresso</p>
          </div>
          <div className="event-item">
            <span className="event-time">14:00</span>
            <p>Turn your Raspberry Pi into a Passkey.</p>
          </div>

          <h4>Monday 11th</h4>
          <div className="event-item">
            <span className="event-time">10:00</span>
            <p>Morning Espresso</p>
          </div>
          <div className="event-item">
            <span className="event-time">11:30</span>
            <p>Espresso Workshop: how to make a good espresso at home, coffee science and tips.</p>
          </div>

          <h4>Tuesday 12th</h4>
          <div className="event-item">
            <span className="event-time">10:00</span>
            <p>Morning Espresso</p>
          </div>

          <div className="event-item">
            <span className="event-time">14:00</span>
            <p>Turn your Raspberry Pi into a Passkey. (bis)</p>
          </div>
        </div>

        {/* Previous Gatherings - Collapsible */}
        <details className="previous-gatherings">
          <summary>
            <h3>Previous Gatherings</h3>
          </summary>
          
          <div className="event-header">
            <h4>38C3 - Chaos Communication Congress</h4>
            <a href="https://events.ccc.de/congress/2024/hub/en/assembly/CoC/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="event-link">View Assembly Details</a>
          </div>

          <div className="event-schedule">
            <h5>Day 1</h5>
            <div className="event-item">
              <span className="event-time">13:00</span>
              <p>Genesis: Safely Generating Keys with Chaos</p>
            </div>
            <div className="event-item">
              <span className="event-time">16:00</span>
              <p>The Holy Trinity of Randomness: Entropy, Chaos, and the Divine</p>
            </div>

            <h5>Day 2</h5>
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

            <h5>Day 3</h5>
            <div className="event-item">
              <span className="event-time">13:00</span>
              <p>Sanctuary in Silicon: Shielding Keys, Gods, and Prayer Portals in Trusted Execution Environments</p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}

export default Events; 