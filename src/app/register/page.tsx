"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { TreePalm } from 'lucide-react';

function Registro() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState<string[]>([]);
    const [modalErrors, setModalErrors] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [securityQuestions, setSecurityQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');

    const router = useRouter();

    useEffect(() => {
        const fetchSecurityQuestions = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/security-questions');
                const data = await response.json();
                setSecurityQuestions(data);
            } catch (error) {
                console.error('Error fetching security questions', error);
            }
        };

        fetchSecurityQuestions();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar que no haya campos vacíos
        const newErrors: string[] = [];
        for (const key in formData) {
            if (formData[key as keyof typeof formData] === '') {
                newErrors.push('Todos los campos son obligatorios');
                break; // Salir del bucle después de encontrar el primer campo vacío
            }
        }

        // Validar que las contraseñas coincidan
        if (formData.password !== formData.password_confirmation) {
            newErrors.push('Las contraseñas no coinciden');
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        setShowModal(true);
    };

    const handleSecuritySubmit = async () => {
        const newErrors: string[] = [];

        if (selectedQuestion === '') {
            newErrors.push('Debe seleccionar una pregunta de seguridad');
        }

        if (securityAnswer === '') {
            newErrors.push('La respuesta de seguridad no puede estar en blanco');
        }

        if (newErrors.length > 0) {
            setModalErrors(newErrors);
            return;
        }

        const finalFormData = {
            ...formData,
            question_id: selectedQuestion,
            security_answer: securityAnswer
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finalFormData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Registro exitoso', data);
                router.push('/login');
            } else {
                console.error('Error en el registro', data);
                setErrors([data.message || 'Error en el registro']);
            }
        } catch (error) {
            console.error('Error en la solicitud', error);
            setErrors(['Error en la solicitud']);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalErrors([]);
        setSelectedQuestion('');
        setSecurityAnswer('');
    };

    return (
        <>
            <header className="w-full fixed top-0 left-0 bg-white flex justify-between p-4 border border-[#B82132]">
                <h1 className="text-red-600 font-bold text-[30px] ml-10">Registro</h1>
                <div className="flex items-center gap-2 mr-10">
                    <TreePalm className="text-red-600 text-[30px]" size="3rem" />
                    <span className="text-red-600 font-bold text-[30px]">Kankun 4.0</span>
                </div>
            </header>

            <div className="flex flex-col items-center justify-center min-h-screen bg-red-100/30 pt-16">
                <div className="bg-white shadow-red-400 border border-black/10 p-8 rounded-lg shadow-lg w-96 mt-10">
                    <h2 className="text-center text-3xl font-bold text-red-700 p-3">Crear cuenta</h2>
                    <form className="mt-4 p-5" onSubmit={handleSubmit}>
                        {errors.length > 0 && (
                            <div className="mb-5">
                                {errors.map((error, index) => (
                                    <p key={index} className="text-red-600">{error}</p>
                                ))}
                            </div>
                        )}
                        <div className="mb-5">
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400 " 
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="mb-5">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400" 
                                placeholder="Correo"
                            />
                        </div>

                        <div className="mb-5">
                            <input 
                                type="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400" 
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="mb-5">
                            <input 
                                type="password" 
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                className="text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400" 
                                placeholder="Confirmar contraseña"
                            />
                        </div>

                        <button className="w-full bg-[#F6DED8] text-[#B82132] py-2 rounded-md border border-black/30">Crear Cuenta</button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-700 p-4">
                        ¿Ya tienes cuenta? <a href="/login" className="text-red-600 font-bold">Inicia Sesion</a>
                    </p>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                        <h2 className="text-center text-2xl font-bold text-red-700">Pregunta de Seguridad</h2>
                        {modalErrors.length > 0 && (
                            <div className="mb-5">
                                {modalErrors.map((error, index) => (
                                    <p key={index} className="text-red-600">{error}</p>
                                ))}
                            </div>
                        )}
                        <div className="mt-4">
                            <select
                                className="w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400"
                                value={selectedQuestion}
                                onChange={(e) => setSelectedQuestion(e.target.value)}
                            >
                                <option value="">Selecciona una pregunta</option>
                                {securityQuestions.map((question) => (
                                    <option key={question.id} value={question.id}>{question.question}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-4">
                            <input
                                type="text"
                                className="text-black w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Respuesta de seguridad"
                                value={securityAnswer}
                                onChange={(e) => setSecurityAnswer(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button className="bg-gray-600 text-white py-2 px-4 rounded-md" onClick={handleCloseModal}>Cerrar</button>
                            <button className="bg-red-600 text-white py-2 px-4 rounded-md" onClick={handleSecuritySubmit}>Enviar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Registro