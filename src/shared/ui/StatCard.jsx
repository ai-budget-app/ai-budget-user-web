import styled from 'styled-components';

const StatCardContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e0e0e0;
`;

const StatLabel = styled.p`
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 4px;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StatChange = styled.p`
  font-size: 0.75rem;
  margin-top: 4px;
  color: ${({ positive }) => (positive ? '#22c55e' : '#ef4444')};
`;

export const StatCard = ({ label, value, change, positive }) => {
  return (
    <StatCardContainer>
      <StatLabel>{label}</StatLabel>
      <StatValue>{value}</StatValue>
      {change && <StatChange positive={positive}>{change}</StatChange>}
    </StatCardContainer>
  );
};