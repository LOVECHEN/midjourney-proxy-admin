import { Card, Descriptions, Modal as AntModal, Tag, Tooltip } from 'antd';
import moment from 'moment';

const MoreModal = ({
  modalVisible,
  hideModal,
  record,
}: {
  modalVisible: boolean;
  hideModal: () => void;
  record: any;
}) => {
  const getStatusTag = (enable: boolean, enableText: string, disableText: string) => {
    let color = enable ? 'green' : 'volcano';
    let text = enable ? enableText : disableText;
    return <Tag color={color}>{text}</Tag>;
  };

  const changeDate = (date: string) => {
    return moment(date).format('YYYY-MM-DD HH:mm');
  };

  if (!record || Object.keys(record).length === 0) {
    return (<AntModal></AntModal>);
  }

  return (
    <AntModal title="完整信息" open={modalVisible} onCancel={hideModal} width={1000} footer={null}>
      <Card type="inner" title="账户信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="账号名">{record.name}</Descriptions.Item>
          <Descriptions.Item label="服务器ID">{record.guildId}</Descriptions.Item>
          <Descriptions.Item label="频道ID">{record.channelId}</Descriptions.Item>
          <Descriptions.Item label="用户Token">
            <Tooltip title={record.userToken}>
              {(record.userToken && record.userToken.substring(0, 12) + '...') || '未提供'}
            </Tooltip>
          </Descriptions.Item>
          <Descriptions.Item label="用户SessionId">
            <Tooltip title={record.sessionId}>
              {(record.sessionId && record.sessionId.substring(0, 12) + '...') || '未提供'}
            </Tooltip>
          </Descriptions.Item>
          <Descriptions.Item label="用户UserAgent">
            <Tooltip title={record.userAgent}>
              {(record.userAgent && record.userAgent.substring(0, 12) + '...') || '未提供'}
            </Tooltip>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Card type="inner" title="基本信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="状态">
            {getStatusTag(record.enable, '正常', '关闭')}
          </Descriptions.Item>
          <Descriptions.Item label="mj版本">{record.version}</Descriptions.Item>
          <Descriptions.Item label="账号模式">{record['displays']['mode']}</Descriptions.Item>
          <Descriptions.Item label="remix">
            {getStatusTag(record.remix, '正常', '关闭')}
          </Descriptions.Item>
          <Descriptions.Item label="raw">
            {getStatusTag(record.raw, '正常', '关闭')}
          </Descriptions.Item>
          <Descriptions.Item label="公开">
            {getStatusTag(record.publicMode, '是', '否')}
          </Descriptions.Item>
          <Descriptions.Item label="快速时间剩余">{record.fastTimeRemaining}</Descriptions.Item>
          <Descriptions.Item label="relax用量">{record.relaxedUsage}</Descriptions.Item>
          <Descriptions.Item label="总用量">{record.lifetimeUsage}</Descriptions.Item>
        </Descriptions>
      </Card>
      <Card type="inner" title="并发信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="并发数">{record.coreSize}</Descriptions.Item>
          <Descriptions.Item label="等待队列长度">{record.queueSize}</Descriptions.Item>
          <Descriptions.Item label="任务超时时间(分钟)">{record.timeoutMinutes}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card type="inner" title="额外信息" style={{ margin: '10px' }}>
        <Descriptions column={3}>
          <Descriptions.Item label="创建时间">{changeDate(record.dateCreated)}</Descriptions.Item>
          <Descriptions.Item label="stylize级别">{record['displays']['stylize']}</Descriptions.Item>
          <Descriptions.Item label="variation级别">{record['displays']['variation']}</Descriptions.Item>
          <Descriptions.Item label="订阅计划">{record['displays']['subscribePlan']}</Descriptions.Item>
          <Descriptions.Item label="计费方式">{record['displays']['billedWay']}</Descriptions.Item>
          <Descriptions.Item label="续订日期">{changeDate(record.renewDate)}</Descriptions.Item>
        </Descriptions>
      </Card>
    </AntModal>
  );
};

export default MoreModal;
