import { Form, Input, InputNumber, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { addPhoneNumber } from "../../Redux/auth_reducer";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export function AddNumberForm({ setActive }) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    let key = Math.floor(Math.random() * 1000);
    let user = {
      ...values.user,
      key: "" + key,
    };
    console.log(user);
    console.log(values);
    dispatch(addPhoneNumber(user));
    setActive(false);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "firstName"]}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "lastName"]}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "age"]}
        label="Age"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={["user", "address"]} label="Address">
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "phone"]}
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
