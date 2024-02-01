// GoalsWrapper.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoalsWrapper: React.FC = ({ goals }) => {
  const navigate = useNavigate();

  return (
    <div>
      {goals.map((goal) => (
        <h1
          onClick={() => {
            goal.id ? navigate(`/goals/${goal.id}`) : '';
          }}
        >
          {goal.title}
        </h1>
      ))}
    </div>
  );
};

export default GoalsWrapper;
