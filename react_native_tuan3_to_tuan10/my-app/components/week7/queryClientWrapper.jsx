// QueryClientWrapper.js
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Khởi tạo QueryClient
const queryClient = new QueryClient();

const QueryClientWrapper = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryClientWrapper;
