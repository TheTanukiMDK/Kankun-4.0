/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import * as React from "react"
import { useTitle } from '@/components/titleContext';
import { useEffect } from "react"
import EventForm from "@/components/eventForm";
import { Button } from "@/components/ui/button";

// Esto es para el titulo de cada page.
const root = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle('Gestión de eventos');
  }, [setTitle]);

  return (
      <div className="grid grid-cols-4 gap- p-4 h-[85vh] pt-10">
        <div className="bg-white p-4 rounded-3xl shadow-xl backdrop-contrast-150 w-[20vw] pl-10 pt-10 mr-10">
          <h2 className="text-2xl font-bold text-red-500/90 mb-10">Eventos programados</h2>

            <div className="flex items-center gap-4 mb-5">  
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
                  alt="foto-prueba"
                  className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl"
                />
              <div>
                <h1 className="text-xl font-semibold">Fiesta 24</h1>
                <h3 className="text-sm text-gray-600">2/2/24</h3>
                <h4 className="text-sm text-gray-600">Fiesta en salón centro las palmeras</h4>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
                alt="foto-prueba"
                className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl"
              />
              <div>
                <h1 className="text-xl font-semibold">Fiesta 24</h1>
                <h3 className="text-sm text-gray-600">2/2/24</h3>
                <h4 className="text-sm text-gray-600">Fiesta en salón centro las palmeras</h4>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
                alt="foto-prueba"
                className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl"
              />
              <div>
                <h1 className="text-xl font-semibold">Fiesta 24</h1>
                <h3 className="text-sm text-gray-600">2/2/24</h3>
                <h4 className="text-sm text-gray-600">Fiesta en salón centro las palmeras</h4>
              </div>
            </div>


            <div className="flex items-center gap-4 mb-5">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
                alt="foto-prueba"
                className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl"
              />
              <div>
                <h1 className="text-xl font-semibold">Fiesta 24</h1>
                <h3 className="text-sm text-gray-600">2/2/24</h3>
                <h4 className="text-sm text-gray-600">Fiesta en salón centro las palmeras</h4>
              </div>
            </div>
        </div>
        <div className="flex-wrap bg-white p-4 rounded-3xl shadow-xl backdrop-contrast-150 w-[20vw] pl-10 pt-10 pr-10">
          <div className="flex items-center gap-4 mb-5">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=pexels-danxavier-1239291.jpg&fm=jpg"
                  alt="foto-prueba"
                  className="w-40 h-40 object-cover rounded-tl-2xl rounded-br-2xl"
                />
                <div>
                  <h1 className="text-xl font-semibold">Fiesta 24</h1>
                  <h3 className="text-sm text-gray-600">2/2/24</h3>
              </div>
            </div>
            <h4 className="text-sm text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</h4>  
            <div className="pt-10 mt-[30vh]">
              <Button className="m-1 w-[10vh] col-span-2 bg-orange-600/70 hover:bg-red-600 shadow-sm shadow-red-200 border">
                Editar
              </Button>
              <Button className="m-1 w-[10vh] col-span-2 bg-red-500/70 hover:bg-red-600 shadow-sm shadow-red-200 border">
                Eliminar
              </Button>
            </div>
          </div>
          <EventForm/>
      </div>
  );
};

export default root;