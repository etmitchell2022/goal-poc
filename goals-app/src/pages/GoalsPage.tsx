import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoalsWrapper from '../components/GoalsWrapper';

const GoalsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [goals, setGoals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const parentGoals = [
    { id: 1, title: 'Goal 1' },
    { id: 2, title: 'Goal 2' },
  ];

  const subgoals = [
    { parentId: 1, title: 'Subgoal 1' },
    { parentId: 2, title: 'Subgoal 2' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (id) {
          // Use id of parent goal to get subgoals
          //   const goalData = await fetchSubgoals(id);
          setGoals(subgoals);
        } else {
          // get top level goals
          //   const goalsData = await fetchGoals();
          setGoals(parentGoals);
        }
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <GoalsWrapper goals={goals} />;
};

export default GoalsPage;
