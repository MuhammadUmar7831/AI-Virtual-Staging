'use client';

import { useRouter } from 'next/navigation';
import { getUserApiCall } from '@/api/user';
import { useUserStore } from '@/lib/store';
import { ReactNode, useEffect, useState } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
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

  if (loading) return <div className="p-4">Loading...</div>;

  return children;
}
