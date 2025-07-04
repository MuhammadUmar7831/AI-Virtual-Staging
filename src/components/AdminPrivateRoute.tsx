import { getUserApiCall } from '@/api/user';
import { useUserStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react'

const AdminPrivateRoute = ({children}: {children: ReactNode}) => {
    const { user, setUser } = useUserStore();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserApiCall();
            if (res) {
                setUser(res.data);
            } else {
                router.push('/signin');
            }
            setLoading(false);
        };

        if (!user) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, [user, setUser, router]);

    if (loading || !user || user.role !== 'admin') return <div className="p-4">Loading...</div>;
    return children;
}

export default AdminPrivateRoute
