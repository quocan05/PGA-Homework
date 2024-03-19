import { Button, Checkbox, ConfigProvider, Form, FormProps, Input, Space, Typography, message } from 'antd'
import { FieldNamesType } from 'antd/es/cascader'
import React, { useCallback, useState } from 'react'
import { validLogin, validateLogin } from '../utils'
import { LoginAPI } from '../../../services/LoginService'
import { useNavigate } from 'react-router'


export interface Props {
    onLogin(values: ILoginParams): void,
    loading: boolean,
    errMsg: string
}

export interface ILoginParams {
    email: string,
    password: string,
    //remember: boolean
}


export interface ILoginValidation {
    email: string,
    password: string
}

const { Title, Text } = Typography;

export const LoginForm = (props: Props) => {
    const [formValues, setFormValues] = useState<ILoginParams>({ email: '', password: '' });
    const [validate, setValidate] = useState<ILoginValidation>();
    const [messageApi, contextHolder] = message.useMessage();

    const { onLogin, loading, errMsg } = props;
    const navigate = useNavigate();
    const success = () => {
        console.log("call success func")
        messageApi.open({
            type: 'success',
            content: 'Login success',
        });
    };

    const error = (err: string) => {
        messageApi.open({
            type: 'error',
            content: err,
        });
    };

    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    };
    const onSubmit = useCallback(async () => {
        const validate = validateLogin(formValues);
        setValidate(validate);
        if (!validLogin(validate)) {
            return;
        }
        onLogin(formValues);
        const res = await LoginAPI(formValues);
        console.log("check response>>>:", res);


        // {
        //     "email": "admin.training@powergatesoftware.com",
        //     "password": "123123"
        // }

        if (res && res.user_cookie) {
            localStorage.setItem("token", res.user_cookie);
            success();
            navigate('/');

        } else {
            error(res.errors.email);
        }
    }, [formValues, onLogin]);

    return (
        <>
            {contextHolder}
            <Form
                size='large'
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                noValidate
                onFinish={onSubmit}
            // onFinishFailed={onFinishFailed}
            >
                <Title style={{ display: 'flex', justifyContent: 'center' }}>Sign in</Title>
                <Form.Item<ILoginParams>
                    label="Username"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Space >
                        <Input type='text' id='inputEmail' value={formValues.email}
                            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        />
                        {
                            !!validate?.email && (
                                <>
                                    {error("Invalid email!")}
                                </>
                            )
                        }</Space>
                </Form.Item>

                <Form.Item<ILoginParams>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Space>
                        <Input.Password

                            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })} />
                        {
                            !!validate?.password && (
                                <>
                                    {error("Password must be at least 4 characters !")}
                                </>
                            )
                        }
                    </Space>
                </Form.Item>

                {/* <Form.Item<ILoginParams>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox onChange={(e) => setFormValues({ ...formValues, remember: e.target.checked })}>Remember me</Checkbox>
            </Form.Item> */}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Sign in
                        </Button>
                        <Button onClick={() => navigate('/signup')}>
                            Sign up
                        </Button>
                    </Space>
                </Form.Item>

            </Form>
        </>
    )
}

