import { Button } from 'antd'
import React, { useEffect } from 'react'
import { LoginAPI } from '../../../services/LoginService'
import { useNavigate } from 'react-router'

type Props = {}

export const HomePage = (props: Props) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/login')
        }
    }, [])
    return (<>

        <div>HomePage</div>
        <Button type='primary' danger onClick={handleLogout}>Logout</Button>
    </>
    )
}

