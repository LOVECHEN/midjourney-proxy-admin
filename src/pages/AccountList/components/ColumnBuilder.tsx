import { Button, Space, Tag } from 'antd';
import moment from 'moment';
import React from 'react';

const ColumnBuilder = ({
  openMoreModal,
  openModal,
}: {
  openMoreModal: (record: any) => void;
  openModal: (content: React.JSX.Element, record: any) => void;
}) => {
  const columns = [
    {
      title: '账号名',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <a onClick={() => openMoreModal(record)}>{text}</a>,
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
      title: '模式',
      dataIndex: 'mode',
      key: 'mode',
    },
    {
      title: '快速时间',
      dataIndex: 'fastTimeRemaining',
      key: 'fastTimeRemaining',
    },
    {
      title: '续订日期',
      dataIndex: 'renewDate',
      key: 'renewDate',
      render: (renewData) => {
        return moment(renewData).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return (
          <Space>
            <Button key="Edit" type={'primary'} onClick={openModal}>
              Edit
            </Button>
            <Button key="Del" onClick={openModal}>
              Del
            </Button>
          </Space>
        );
      },
    },
  ];

  return columns;
};

export default ColumnBuilder;
