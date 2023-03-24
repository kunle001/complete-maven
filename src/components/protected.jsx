import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />
    }
    return children
}
export default Protected