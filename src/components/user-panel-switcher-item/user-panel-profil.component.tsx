import React from 'react';
import { ConfigurableLink } from '@openmrs/esm-framework';
import { Button } from 'carbon-components-react';
import UserAvatarFilledAlt32 from '@carbon/icons-react/es/user--avatar--filled--alt/32';
import root from '../../root.scss';
import { useTranslation } from "react-i18next";

export default function AppointmentScheduling() {
  const { t } = useTranslation();
  return (
    <ConfigurableLink to="${openmrsBase}/spa/profil">{
      <Button className={root.headerPanel}
        style={{ backgroundColor: root['brand-02']  }} role="button">
        <UserAvatarFilledAlt32 />  { t(' profil Change') }</Button>
    }</ConfigurableLink>
  );
}
