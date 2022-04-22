import React from 'react';
import styles from './HeaderUserInfo.scss';
import UserAvatarFilledAlt32 from '@carbon/icons-react/es/user--avatar/32';
import { Grid, Row, Tile, Column, Select } from 'carbon-components-react';
import { useEffect, useState } from 'react';
import { LoggedInUser } from '../../types';
import { PostUserProperties } from '../choose-locale/change-locale.resource';
import SelectItem from 'carbon-components-react/es/components/SelectItem';
import { postUserPropertiesOnline, postUserPropertiesOffline } from '../choose-locale/change-locale.resource';
import { refetchCurrentUser } from '@openmrs/esm-framework';
import ChangeLocale from '../choose-locale/change-locale.component';

function HeaderUserInfo({ user, onClickChange, allowedLocales }) {

  return ( console.log(user),
    <div className={styles.HeaderUserInfo}  >
      <UserAvatarFilledAlt32 onClick={onClickChange} className={styles.userAvatar} />
      <Tile className={styles.HeaderUserInfoTile} onClick={onClickChange}>
        <Row>
          <Column>
            <Row className={styles['usernameInfoValue']}>{user.person.display}</Row>
            <Row className={styles['userInfoFonction']}> { (user.systemId).split("-")[0]}</Row>
          </Column>

        </Row>
      </Tile>
      <ChangeLocale user={user} allowedLocales={allowedLocales} postUserProperties={postUserPropertiesOnline || postUserPropertiesOffline} />
    </div>
  )
}
export default HeaderUserInfo;