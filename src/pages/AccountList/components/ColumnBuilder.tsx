import EditContent from '@/pages/AccountList/components/contents/EditContent ';
import MoreContent from '@/pages/AccountList/components/contents/MoreContent ';
import { ReloadOutlined } from '@ant-design/icons';
import { Button, FormInstance, Space, Tag } from 'antd';
import moment from 'moment';
import DelButton from './button/DelButton';

const ColumnBuilder = ({
  form,
  modalFooter,
  openModal,
  triggerRefreshAccount,
  handleEdit,
  handleRefresh,
}: {
  form: FormInstance;
  modalFooter: any;
  openModal: (title: string, content: any, footer: any, modalWidth: number) => void;
  triggerRefreshAccount: () => void;
  handleEdit: (values: Record<string, string>) => void;
  handleRefresh: (id: string) => void;
}) => {
  const columns = [
    {
      title: '账号名',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Record<string, any>) => (
        <a onClick={() => openModal('账户信息', <MoreContent record={record} />, null, 1000)}>
          {text}
        </a>
      ),
    },
    {
      title: '状态',
      dataIndex: 'enable',
      key: 'enable',
      render: (enable: boolean) => {
        let color = enable ? 'green' : 'volcano';
        let text = enable ? '正常' : '关闭';
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: 'Remix',
      dataIndex: 'remix',
      key: 'remix',
      render: (remix: boolean) => {
        let color = remix ? 'green' : 'volcano';
        let text = remix ? '开启' : '关闭';
        return <Tag color={color}>{text}</Tag>;
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
      render: (renewData: number) => {
        return moment(renewData).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (value: any, record: Record<string, string>) => {
        return (
          <Space>
            <Button
              key="Refresh"
              type={'primary'}
              title={'同步账户信息'}
              icon={<ReloadOutlined />}
              onClick={() => handleRefresh(record.id)}
            />
            <Button
              key="Edit"
              type={'primary'}
              onClick={() =>
                openModal(
                  '修改账户',
                  <EditContent form={form} record={record} onSubmit={handleEdit} />,
                  modalFooter,
                  500,
                )
              }
            >
              Edit
            </Button>
            <DelButton record={record} onSuccess={triggerRefreshAccount} />
          </Space>
        );
      },
    },
  ];

  return columns;
};

export default ColumnBuilder;
