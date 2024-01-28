import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassroomBookingApp = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  useEffect(() => {
    // Fetch available classrooms
    axios.get('http://localhost:3000/classrooms')
      .then(response => setClassrooms(response.data))
      .catch(error => console.error('Error fetching classrooms:', error));
  }, []);

  const handleClassroomSelect = (classroom) => {
    setSelectedClassroom(classroom);
  };

  const handleBooking = () => {
    // Implement booking logic (e.g., send a request to the server)
    console.log(`Booking classroom ${selectedClassroom.name}`);
  };

  return (
    <div>
      <h1>Classroom Booking System</h1>
      <div>
        <h2>Available Classrooms</h2>
        <ul>
          {classrooms.map(classroom => (
            <li key={classroom.id} onClick={() => handleClassroomSelect(classroom)}>
              {classroom.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedClassroom && (
        <div>
          <h2>Selected Classroom: {selectedClassroom.name}</h2>
          <button onClick={handleBooking}>Book Classroom</button>
        </div>
      )}
    </div>
  );
};

export default ClassroomBookingApp;
