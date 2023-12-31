// CustomModal.stories.tsx

import { Meta, Story } from '@storybook/react';
import { Modal } from '@with-nx/react-ui';
import { useModal } from './use-modal';

export default {
  title: 'Components/CustomModal',
  component: Modal,
} as Meta;

const Template: Story = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isShowing={isShowing} toggle={toggle} title="Checkout">
        Text here
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
