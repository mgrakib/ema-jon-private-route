import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContextAPI } from '../AuthContext';

const PrivatePage = ({ children }) => {
	const {user} = useContext(AuthContextAPI)

	if (user) {
		return children;
	}
	return <Navigate to={"/login"}></Navigate>;
};

export default PrivatePage;