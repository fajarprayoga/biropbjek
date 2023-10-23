import React from 'react'
import { Button } from "@material-tailwind/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className='' >
                <Button>HAlo</Button>
            </div>
        </AuthenticatedLayout>
    )
}

export default Dashboard
