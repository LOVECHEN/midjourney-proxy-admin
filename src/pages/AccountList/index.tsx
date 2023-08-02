import ColumnBuilder from '@/pages/AccountList/components/ColumnBuilder';
import Modal from '@/pages/AccountList/components/Modal';
import MoreModal from '@/pages/AccountList/components/modals/MoreModal';
import { queryAccount } from '@/services/ant-design-pro/api';
import { useIntl } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Form, Pagination, Row, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const AccountList: React.FC = () => {
  // 初始化 dataSource 状态为空数组
  const [dataSource, setDataSource] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [moreModalVisible, setMoreModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.JSX.Element>({});
  const [fieldsValue, setFieldsValue] = useState({});
  const [moreField, setMoreField] = useState({});
  const [form] = Form.useForm();

  const openModal = (content: React.JSX.Element, record: any) => {
    setModalContent(content);
    setFieldsValue(record);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalContent({});
    setModalVisible(false);
  };

  const openMoreModal = (record: any) => {
    console.log(record)
    setMoreField(record);
    setMoreModalVisible(true);
  };

  const hideMoreModal = () => {
    setMoreModalVisible(false);
  };

  const intl = useIntl();
  const defaultHeader = intl.formatMessage({
    id: 'menu.list.account-list',
    defaultMessage: 'Account Table',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await queryAccount({});
      setDataSource(res.content);
    };

    fetchData();
  }, []);

  const searchLayout = () => {};
  const beforeLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          {defaultHeader}
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Space>
            <Button type={'primary'}>Add</Button>
          </Space>
        </Col>
      </Row>
    );
  };
  const afterLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination></Pagination>
        </Col>
      </Row>
    );
  };

  return (
    <PageContainer>
      {searchLayout()}
      <Card>
        {beforeLayout()}
        <Table
          rowKey="id"
          dataSource={dataSource}
          columns={ColumnBuilder({ openMoreModal, openModal, form })}
          pagination={false}
        />
        {afterLayout()}
      </Card>
      <Modal
        modalVisible={modalVisible}
        hideModal={hideModal}
        modalContent={modalContent}
        value={fieldsValue}
        form={form}
      ></Modal>
      <MoreModal
        modalVisible={moreModalVisible}
        hideModal={hideMoreModal}
        record={moreField}
      ></MoreModal>
    </PageContainer>
  );
};

export default AccountList;
