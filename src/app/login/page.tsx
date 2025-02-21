"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { TreePalm } from 'lucide-react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                // Manejar la respuesta exitosa aquí
                console.log(data);
                // Redirigir al dashboard correspondiente según el rol
                if (data.user.role === 'user') {
                    router.push('/dashboard/user');
                } else {
                    router.push('/dashboard/admin');
                }
            } else {
                setMessage('Error al iniciar sesión');
            }
        } catch (error) {
            setMessage('Error al conectar con el servidor');
        }
    };

    return (
        <>
            <header className="w-full fixed top-0 left-0 bg-white flex justify-between p-4 border border-[#B82132]">
                <h1 className="text-red-600 font-bold text-[30px] ml-10">Iniciar sesión</h1>
                <div className="flex items-center gap-2 mr-10">
                    <TreePalm className="text-red-600 text-[30px]" size="3rem" />
                    <span className="text-red-600 font-bold text-[30px]">Kankun 4.0</span>
                </div>
            </header>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-16">
                <div className="bg-[#FFD4D4]/50 border border-black/10 p-8 rounded-lg shadow-xl w-96 mt-10">
                    <h2 className="text-center text-3xl font-bold text-red-700 p-3">Iniciar Sesión</h2>
                    <form className="mt-4 p-5" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <input
                                type="email"
                                className="w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400 "
                                placeholder="Correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="password"
                                className="w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="w-full bg-[#F6DED8] text-[#B82132] py-2 rounded-md border border-black/30">Iniciar sesión</button>
                    </form>
                    {message && <p className="mt-4 text-center text-sm text-red-700">{message}</p>}
                    <div className="mt-4 text-center text-sm text-gray-700 p-4">
                        <p >
                            ¿No tienes una cuenta? <a href="/register" className="text-red-600 font-bold">Regístrate</a>
                            <br></br>
                            <a  className="text-red-400 font-bold" href='/forgetPassword'>Olvide mi contraseña</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login