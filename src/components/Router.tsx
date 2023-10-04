import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LayoutPage } from '../pages/LayoutPage/LayoutPage';
import { Hotel } from '../pages/HotelChek';

export const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LayoutPage />} />
                <Route path='/main' element={<Hotel />} />
                <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </div>
    );
};
