import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the Settings page
const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #102a43;
  font-size: 2.5rem;
`;

const SettingsSection = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const SettingsLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
`;

const SettingsInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SettingsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

const SettingsToggle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ToggleLabel = styled.label`
  margin-left: 0.5rem;
  color: #333;
`;

const LogoutButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EmailInput = styled(SettingsInput)`
  flex: 1;
  margin-right: 1rem;
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

const PasswordContainer = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
`;

const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const SettingsPage = () => {
  const [email, setEmail] = useState('user@example.com');
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailEdit = () => {
    setIsEmailEditable(true);
  };

  const handleEmailSave = () => {
    setIsEmailEditable(false);
    // Реалізація збереження нової електронної адреси буде додана пізніше
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleTogglePasswordChange = () => {
    setIsPasswordOpen(!isPasswordOpen);
  };

  const handlePasswordSave = () => {
    // Реалізація збереження нового пароля буде додана пізніше
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    // Реалізація виходу з облікового запису буде додана пізніше
  };

  return (
    <SettingsContainer>
      <Title>Settings</Title>
      <SettingsSection>
        <SettingsLabel htmlFor="email">Email:</SettingsLabel>
        <EmailContainer>
          <EmailInput
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            disabled={!isEmailEditable}
          />
          <EditButton onClick={handleEmailEdit}>
            <i className="fas fa-pencil-alt"></i>
          </EditButton>
        </EmailContainer>
        {isEmailEditable && (
          <SettingsButton onClick={handleEmailSave}>Save</SettingsButton>
        )}
      </SettingsSection>
      <SettingsSection>
        <SettingsButton onClick={handleTogglePasswordChange}>
          Change Password
        </SettingsButton>
        <PasswordContainer isOpen={isPasswordOpen}>
          <SettingsLabel htmlFor="old-password">Old Password:</SettingsLabel>
          <SettingsInput
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
          <SettingsLabel htmlFor="new-password">New Password:</SettingsLabel>
          <SettingsInput
            type="password"
            id="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <SettingsButton onClick={handlePasswordSave}>Change</SettingsButton>
        </PasswordContainer>
      </SettingsSection>
      <SettingsSection>
        <SettingsToggle>
          <ToggleLabel htmlFor="dark-mode">Dark Mode</ToggleLabel>
          <ToggleSwitch>
            <ToggleInput
              type="checkbox"
              id="dark-mode"
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
            <Slider />
          </ToggleSwitch>
        </SettingsToggle>
      </SettingsSection>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SettingsContainer>
  );
};

export default SettingsPage;