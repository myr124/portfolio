'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";


const MyMesh = () => {
    const meshMat = React.useRef(null)
    useFrame(() => {
        meshMat.current.rotation.x += 0.01
        meshMat.current.rotation.y += 0.01
    })
    return (
        <mesh ref={meshMat}>
            <boxGeometry position={[0, 0, 0]} args={[20, 20, 20]}></boxGeometry>
            <meshStandardMaterial color="red"  ></meshStandardMaterial>
        </mesh>
    )
}


export default function Home() {
    return (
        <div className="h-full">
            <Canvas camera={{ position: [10, 10, 10] }}>
                <MyMesh></MyMesh>
                <ambientLight intensity={0.9} />
                <directionalLight color="red" position={[0, 0, 5]} />
            </Canvas>
        </div>
    );
}
