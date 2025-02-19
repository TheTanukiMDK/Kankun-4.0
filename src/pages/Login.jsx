import React from 'react'

function Login() {
    return (
        <>
            <header className="w-full fixed top-0 left-0 bg-white flex justify-between p-4">
                <h1 className="text-red-600 font-bold text-[30px]">Iniciar sesión</h1>
                <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold text-[30px]">Kankun 4.0</span>
                    <span className="text-red-600 text-[30px]">🌴</span>
                </div>
            </header>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-16">
                <div className="bg-[#FFD2D2] border border-black/10 p-8 rounded-lg shadow-xl w-96 mt-10">
                    <h2 className="text-center text-3xl font-bold text-red-700 p-3">Iniciar Sesión</h2>
                    <form className="mt-4 p-5">
                    <div className="mb-5">
                            <input 
                                type="email" 
                                className="w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400" 
                                placeholder="Correo electrónico"
                            />
                        </div>
                        <div className="mb-5">
                            <input 
                                type="password" 
                                className="w-full p-2 border border-black/40 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-red-400" 
                                placeholder="Contraseña"
                            />
                        </div>
                        <button className="w-full bg-[#F6DED8] text-[#B82132] py-2 rounded-md border border-black/30">Iniciar sesión</button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-700 p-4">
                        ¿No tienes una cuenta? <a href="#" className="text-red-600 font-bold">Regístrate</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
