import React from 'react'
import { UseAuth } from '../context/AuthContext'

function PrivateRouter({ children }) {
    const { currentUser } = UseAuth()||{};

    if (currentUser) {
        return children
    }
}

export default PrivateRouter