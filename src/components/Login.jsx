import React from "react";
import loginImg from "../assets/Login_patineta.jpeg";

function Login() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                 <img className="w-full h-full object-cover" src={loginImg} alt="" ></img>
            </div>

            <div className="bg-zippy-blue-fondo flex flex-col justify-center ">
                <forms className="max-w-[400px] w-full mx-auto bg-zippy-blue p-8 px-8 rounded-lg">
                    <h2 className="text-4xl text-white font-bold text-center">REGISTRATE</h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Nombre de usuario</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text"></input>
                    </div>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Contraseña</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password"></input>
                    </div>

                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center"><input className="mr-2" type="checkbox"></input>Recuerdame</p>
                        <p>Olvidaste tu Contraseña ?</p>
                    </div>

                    <button className="w-full my-5 py-5 bg-zippy-yellow shadow-lg shadow-yellow-300/50 hover:shadow-yellow-300/30 text-dark font-semibold rounded-lg">Registrate</button>
                </forms>
            </div>
        </div>
    )
}

export default Login;
