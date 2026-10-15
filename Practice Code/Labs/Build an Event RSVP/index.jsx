import { useState } from "react";

export const EventRSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noOfAttendees, setNoOfAttendees] = useState(1);
  const [dietPref, setDietPref] = useState("");
  const [guest, setGuest] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container">
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="section">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="section">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="section">
          <label htmlFor="noOfAttendees">Number of Attendees</label>
          <input
            type="number"
            id="noOfAttendees"
            min="1"
            value={noOfAttendees}
            onChange={(e) => setNoOfAttendees(Number(e.target.value))}
            required
          />
        </div>
        <div className="section">
          <label htmlFor="dietPref">Dietary Preferences</label>
          <input
            type="text"
            id="dietPref"
            value={dietPref}
            onChange={(e) => setDietPref(e.target.value)}
          />
        </div>
        <div className="section">
          <label htmlFor="guest">Bringing additional guests?</label>
          <input
            type="checkbox"
            id="guest"
            value={guest}
            onChange={(e) => setGuest(e.target.checked)}
          />
        </div>
        <button type="submit">Submit RSVP</button>
      </form>

      {submitted && (
        <div className="result-box">
            <h2>RSVP Submitted</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number of attendees: {noOfAttendees}</p>
            <p>Dietary Preferences: {dietPref || "None"}</p>
            <p>Bringing additional guests: {guest ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};
