// 在 MoreContent.jsx 文件中

import { Card, Form, Input, Switch } from 'antd';

/**
 * 定义more按钮的表单内容
 * @param form 表单
 * @constructor
 */
const EditContent = () => {
  return (
    <>
      <Card type="inner" title="账户信息">
        <Form.Item label="账号名" name="name" style={{ marginBottom: '16px' }}>
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item label="服务器ID" name="guildId" style={{ width: '400px', marginBottom: '16px' }}>
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item label="频道ID" name="channelId" style={{ width: '400px', marginBottom: '16px' }}>
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="用户Token"
          name="userToken"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="用户SessionId"
          name="sessionId"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="remix"
          name="remix"
          style={{ width: '400px', marginBottom: '16px' }}
          valuePropName="checked"
        >
          <Switch checkedChildren="开启" unCheckedChildren="关闭" disabled />
        </Form.Item>
        <Form.Item
          label="raw"
          name="raw"
          style={{ width: '400px', marginBottom: '16px' }}
          valuePropName="checked"
        >
          <Switch checkedChildren="开启" unCheckedChildren="关闭" disabled />
        </Form.Item>
        <Form.Item
          label="publicMode"
          name="publicMode"
          style={{ width: '400px', marginBottom: '16px' }}
          valuePropName="checked"
        >
          <Switch checkedChildren="开启" unCheckedChildren="关闭" disabled />
        </Form.Item>
      </Card>
      <Card style={{ marginLeft: 16 }} type="inner" title="基本信息">
        <Form.Item
          label="状态"
          name="enable"
          style={{ width: '400px', marginBottom: '16px' }}
          valuePropName="checked"
        >
          <Switch checkedChildren="开启" unCheckedChildren="关闭" disabled />
        </Form.Item>
        <Form.Item label="mj版本" name="version" style={{ width: '400px', marginBottom: '16px' }}>
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item label="账号模式" name="mode" style={{ width: '400px', marginBottom: '16px' }}>
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="快速时间剩余"
          name="fastTimeRemaining"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="总用量"
          name="lifetimeUsage"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="relax用量"
          name="relaxedUsage"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
      </Card>
      <Card style={{ marginTop: 16 }} type="inner" title="并发信息">
        <Form.Item label="并发数" name="coreSize" style={{ width: '400px', marginBottom: '16px' }}>
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="等待队列长度"
          name="queueSize"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="任务超时时间(分钟)"
          name="timeoutMinutes"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
      </Card>
      <Card style={{ marginTop: 16, marginLeft: 16 }} type="inner" title="额外信息">
        <Form.Item
          label="创建时间"
          name="dateCreated"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="stylize级别"
          name="stylize"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="variation级别"
          name="variation"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="订阅计划"
          name="subscribePlan"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="计费方式"
          name="billedWay"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
        <Form.Item
          label="续订日期"
          name="renewDate"
          style={{ width: '400px', marginBottom: '16px' }}
        >
          <Input bordered={false} disabled />
        </Form.Item>
      </Card>
    </>
  );
};

export default EditContent;
