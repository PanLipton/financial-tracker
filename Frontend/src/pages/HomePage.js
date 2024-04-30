import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for a modern look
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: auto;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

const WelcomeText = styled.h1`
  color: #102a43;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const DescriptionText = styled.p`
  color: #627d98;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background: #f0f4f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const FeatureLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  
  &:hover {
    color: #0056b3;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <WelcomeText>Manage Your Finances with Ease</WelcomeText>
      <DescriptionText>
        Take control of your spending and save money. Our easy-to-use tools will help you understand your expenses and make better financial decisions.
      </DescriptionText>

      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon src="/images/dashboard-icon.png" alt="Dashboard" />
          <h3>Dashboard</h3>
          <p>Get a complete overview of your financial health in one glance.</p>
          <FeatureLink to="/dashboard">Go to Dashboard</FeatureLink>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="/images/expense-icon.png" alt="Expenses" />
          <h3>Expenses</h3>
          <p>Track every dollar you spend to manage your budget effectively.</p>
          <FeatureLink to="/expenses">Track Expenses</FeatureLink>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="/images/income-icon.png" alt="Income" />
          <h3>Income</h3>
          <p>Monitor your income streams and grow your financial stability.</p>
          <FeatureLink to="/income">Manage Income</FeatureLink>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="/images/settings-icon.png" alt="Settings" />
          <h3>Settings</h3>
          <p>Customize your preferences and manage your account.</p>
          <FeatureLink to="/settings">Adjust Settings</FeatureLink>
        </FeatureCard>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default HomePage;
