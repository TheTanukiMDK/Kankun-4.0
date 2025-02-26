"use client"
import { Button } from "@/components/ui/button";
import Logo from "@/components/kankunlogo";
import LandingPage from "./Landing-Page/page";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
      const router = useRouter();
      useEffect(() => {
          const token = localStorage.getItem('token');
          if (token) {
            router.push('/dashboard/user'); // Redirigir a la página de usuario autenticado
          }
        }, [router]);
  return (
    <div>
      <LandingPage />
    </div>
  );
};
export default Home;
