import { Form, Modal as AntModal } from 'antd';
import React from 'react';

const Modal = ({
  modalVisible,
  hideModal,
  modalContent,
  value,
  form,
}: {
  modalVisible: boolean;
  hideModal: () => void;
  modalContent: React.JSX.Element;
  value: any;
  form: any;
}) => {
  const [fieldsValue, setFieldsValue] = React.useState({});

  React.useEffect(() => {
    if (modalVisible) {
      setFieldsValue(value);
    } else {
      setFieldsValue({});
    }
  }, [modalVisible]);

  React.useEffect(() => {
    form.setFieldsValue(fieldsValue);
  }, [fieldsValue]);

  return (
    <AntModal
      title="Basic Modal"
      open={modalVisible}
      // onOk={handleOk}
      onCancel={hideModal}
      width={1000}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        labelAlign="left"
        layout="inline"
        style={{ maxWidth: 'none' }}
        form={form}
      >
        {modalContent}
      </Form>
    </AntModal>
  );
};

export default Modal;
