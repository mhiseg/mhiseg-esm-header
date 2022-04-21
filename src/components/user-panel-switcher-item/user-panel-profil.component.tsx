import React from 'react';
import { ConfigurableLink } from '@openmrs/esm-framework';
import { Button } from 'carbon-components-react';
import { RequestQuote20 } from '@carbon/icons-react';
import root from '../../root.scss';
import { useTranslation } from "react-i18next";

export default function AppointmentScheduling() {
  const {t}=useTranslation();
  return (
    <ConfigurableLink to="${openmrsBase}/spa/profil">{
      <Button className={root.headerPanel}
        style={{ backgroundColor: root['brand-02'] }}  role="button">
        <RequestQuote20 />  {t('Edited profil','profilChange')}
      </Button>
    }</ConfigurableLink>
  );
}
