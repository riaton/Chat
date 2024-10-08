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

import ContactPicker from '../ContactPicker';

export const ManageMembersModal = ({
  onClose,
  channel,
  members,
  handlePickerChange,
  handleDeleteMemberships,
}) => {
  return (
    <Modal onClose={onClose}>
      <ModalHeader title={`チャネル「${channel.Name}」のメンバー編集`} />
      <ModalBody className="modal-body">
        <ContactPicker onChange={handlePickerChange} options={members} />
      </ModalBody>
      <ModalButtonGroup
        primaryButtons={[
          <ModalButton
            label="Remove"
            onClick={handleDeleteMemberships}
            variant="primary"
            closesModal
          />,
          <ModalButton label="Cancel" closesModal variant="secondary" />,
        ]}
      />
    </Modal>
  );
};

export default ManageMembersModal;
