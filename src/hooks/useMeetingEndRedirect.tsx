// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// 改変済
/* Copyright 2024 Riaton. All Rights Reserved. */

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  MeetingStatus,
  useNotificationDispatch,
  Severity,
  ActionType,
  useMeetingStatus
} from 'amazon-chime-sdk-component-library-react';
import routes from '../constants/routes';

const useMeetingEndRedirect = () => {
  const history = useHistory();
  const dispatch = useNotificationDispatch();
  const meetingStatus = useMeetingStatus();

  useEffect(() => {
    if (meetingStatus === MeetingStatus.Ended) {
      console.log('[useMeetingEndRedirect] Meeting ended');
      dispatch({
        type: ActionType.ADD,
        payload: {
          severity: Severity.INFO,
          message: 'The meeting was ended by another attendee',
          autoClose: true,
          replaceAll: true
        }
      });
      history.push(routes.CHAT);
    }
  }, [meetingStatus]);
};

export default useMeetingEndRedirect;
