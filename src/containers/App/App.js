import React from 'react'

const App = ({
  people,
  status,
  statuses,
  onPersonClick
}) => (
  <div>
    {status === 'PENDING' ? (
      <div>Loading data...</div>
    ) : (
      <div>Complete!</div>
    )}
    <div>
      {people.map((person, i) => (
        <div
          key={person.title}
          onClick={() => onPersonClick(person.id)}
        >
          {i}: {person.title} <span style={{ color: 'red' }}>{statuses[person.id]}</span>
        </div>
      ))}
    </div>
  </div>
)

export default App
