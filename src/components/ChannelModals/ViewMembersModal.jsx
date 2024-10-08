/* eslint-disable import/no-unresolved */
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// 改変済
/* Copyright 2024 Riaton. All Rights Reserved. */

import React from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButtonGroup,
  ModalButton,
} from 'amazon-chime-sdk-component-library-react';

import './ChannelModals.css';

export const ViewMembersModal = ({ onClose, channel, members, moderators }) => {
  const modArns = moderators.map((m) => m.Moderator.Arn);

  const channelMembers = members.map((m) => {
    if (modArns.indexOf(m.Member.Arn) >= 0) {
      return { name: m.Member.Name, role: 'Moderator', arn: m.Member.Arn };
    }
    return { name: m.Member.Name, role: 'Member', arn: m.Member.Arn };
  });

  const sortedMembers = channelMembers.sort((a, b) =>
    a.role.length > b.role.length ? -1 : 1
  );

  const memberListItems = sortedMembers.map((m) => (
    <li key={m.arn} className="row">
      <div className="name">{m.name}</div>
      <div className="role">{m.role}</div>
    </li>
  ));

  return (
    <Modal onClose={onClose} className="view-members">
      <ModalHeader title={`チャネル「${channel.Name}」メンバー一覧`} className="modal-header" />
      <ModalBody className="main-section">
        <ul className="list">
          <li className="list-header row">
            <div className="name">ユーザーID</div>
            <div className="role">ロール</div>
          </li>
          {memberListItems}
        </ul>
      </ModalBody>
      <ModalButtonGroup
        primaryButtons={[
          <ModalButton label="OK" variant="primary" closesModal />,
        ]}
      />
    </Modal>
  );
};

export default ViewMembersModal;
