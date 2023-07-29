import { queryAccount } from '@/services/ant-design-pro/api';
import { useIntl } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Pagination, Row, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const AccountList: React.FC = () => {
  // 初始化 dataSource 状态为空数组
  const [dataSource, setDataSource] = useState([]);

  const intl = useIntl();
  const defaultHeader = intl.formatMessage({
    id: 'menu.list.account-list',
    defaultMessage: 'Account Table',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await queryAccount({});
      // 使用状态 setter 函数更新 dataSource
      setDataSource(res.content);
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: '账号名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '状态',
      dataIndex: 'enable',
      key: 'enable',
      render: (enable) => {
        let color = enable ? 'green' : 'volcano';
        let text = enable ? '正常' : '关闭';
        return (
          <Tag color={color} key={enable}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: 'Remix',
      dataIndex: 'remix',
      key: 'remix',
      render: (remix) => {
        let color = remix ? 'green' : 'volcano';
        let text = remix ? '开启' : '关闭';
        return (
          <Tag color={color} key={remix}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: '账号模式',
      dataIndex: 'mode',
      key: 'mode',
    },
    {
      title: '快速时间剩余',
      dataIndex: 'fastTimeRemaining',
      key: 'fastTimeRemaining',
    },
    {
      title: '总用量',
      dataIndex: 'lifetimeUsage',
      key: 'lifetimeUsage',
    },
    {
      title: '订阅计划',
      dataIndex: 'subscribePlan',
      key: 'subscribePlan',
    },
    {
      title: '计费方式',
      dataIndex: 'billedWay',
      key: 'billedWay',
    },
    {
      title: '续订日期',
      dataIndex: 'renewDate',
      key: 'renewDate',
    },
  ];

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
            <Button type={'primary'}>Del</Button>
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
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        {afterLayout()}
      </Card>
    </PageContainer>
  );
};

export default AccountList;
