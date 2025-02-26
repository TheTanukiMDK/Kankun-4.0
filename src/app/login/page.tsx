"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TreePalm } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

function Login() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          router.push('/dashboard/user'); // Redirigir a la página de usuario autenticado
        }
      }, [router]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [showSecurityModal, setShowSecurityModal] = useState(false);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState(null); // Nuevo estado para almacenar el user_id
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al iniciar sesión');
            }

            setToken(data.token);
            setUserId(data.user.id); // Almacenar el user_id en el estado
            localStorage.setItem('token', data.token);
           
            // Si la API devuelve una pregunta de seguridad, mostrar el modal.
            if (data.security_question !== null) {
                setShowSecurityModal(true);
            } else {
                // Si no hay pregunta de seguridad, redirigir según el rol.
                if (data.user.role === 'admin') {
                    router.push('/dashboard/admin');
                } else {
                    router.push('/dashboard/user');
                }
            }
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleSecurityAnswer = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/validate-security-answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ user_id: userId, answer: securityAnswer }), // Usar el user_id del estado
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Respuesta incorrecta');
            }

            // Redirigir según el rol
            if (data.user.role === 'admin') {
                router.push('/dashboard/admin');
            } else {
                router.push('/dashboard/user');
            }
        } catch (err: any) {
            setError(err.message);
        }
    };



    return (
        <>
                       <header className="w-full fixed top-0 left-0 bg-white flex justify-between p-4 border border-[#B82132]">
                <h1 className="text-red-600 font-bold text-[30px] ml-10">Registro</h1>
                <Link href="/">
                <div className="flex items-center gap-2 mr-10">
                    <TreePalm className="text-red-600 text-[30px]" size="3rem" />
                    <span className="text-red-600 font-bold text-[30px]">Kankun 4.0</span>
                </div>
                </Link>

            </header>
            <div className="flex flex-col items-center justify-center min-h-screen bg-red-100/30 pt-16">
                <div className="bg-white shadow-red-400 border border-black/10 p-8 rounded-lg shadow-lg w-96 mt-10">
                    <h2 className="text-center text-3xl font-bold text-red-700 p-3">Iniciar Sesión</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="mt-4 p-5" onSubmit={handleLogin}>
                        <div className="mb-5">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400 "
                                placeholder="Correo"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#F6DED8] text-[#B82132] py-2 rounded-md border border-black/30">
                            Iniciar sesión
                        </button>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-700 p-4">
                        <p>
                            ¿No tienes una cuenta? <a href="/register" className="text-red-600 font-bold">Regístrate</a>
                            <br />
                           {/* <a className="text-red-400 font-bold" href='/forgetPassword'>Olvidé mi contraseña</a>*/}
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal para la pregunta de seguridad */}
            {showSecurityModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-center text-2xl font-bold text-red-700">Pregunta de Seguridad</h2>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <form className="mt-4" onSubmit={handleSecurityAnswer}>
                            <input
                                type="text"
                                value={securityAnswer}
                                onChange={(e) => setSecurityAnswer(e.target.value)}
                                className="text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Ingresa tu respuesta"
                                required
                            />
                            <button type="submit" className="w-full bg-[#F6DED8] text-[#B82132] py-2 rounded-md border border-black/30 mt-4">
                                Verificar
                            </button>
                            <button
                onClick={() => setShowSecurityModal(false)}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-md border border-black/30 mt-4"
            >
                Cerrar
            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;