import { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

const ErrorMsg = styled.div`
    color: red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password, passwordCheck]);

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(true);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }

        console.log('회원가입 정보 출력', id, nickname, password);

    }, [password, passwordCheck, term]);

    return (
        <>
            <Head>
                <title>NodeBirdExercise - 회원가입</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name='user-id' value={id} onChange={onChangeId} required/>
                    </div>
                    <div>
                        <label htmlFor="user-nickname">닉네임</label>
                        <br />
                        <Input name='user-nickname' value={nickname} onChange={onChangeNickname} required/>
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name='user-password' type='password' value={password} onChange={onChangePassword} required/>
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호 확인</label>
                        <br />
                        <Input name='user-password-check' type='password' value={passwordCheck} onChange={onChangePasswordCheck} required/>
                        {passwordError && <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>}
                    </div>
                    <div>
                        <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                        {termError && <ErrorMsg>약관에 동의하셔야 합니다.</ErrorMsg>}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    )
};

export default Signup;
