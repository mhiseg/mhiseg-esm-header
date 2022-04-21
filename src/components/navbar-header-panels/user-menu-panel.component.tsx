import React from 'react';
import { ExtensionSlot } from '@openmrs/esm-framework';
import { HeaderPanel } from 'carbon-components-react/es/components/UIShell';
import { HeaderPanelProps } from 'carbon-components-react';
import { LoggedInUser, UserSession } from '../../types';
import root from '../../root.scss';

interface UserMenuPanelProps extends HeaderPanelProps {
  user: LoggedInUser;
  allowedLocales: any;
  onLogout(): void;
  session: UserSession;
}

const UserMenuPanel: React.FC<UserMenuPanelProps> = ({ expanded, user, allowedLocales, onLogout, session }) => {
  return (
    <HeaderPanel
      className={root.headerPanel}
      style={{ backgroundColor: root['brand-02'] }}
      expanded={expanded}>
      <ExtensionSlot
        extensionSlotName="user-panel-slot"
        state={{
          user: user,
          onLogout: onLogout
        }}
      />
    </HeaderPanel>
  );
};

export default UserMenuPanel;
