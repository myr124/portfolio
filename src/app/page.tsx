'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";


const MyMesh = () => {
    const meshMat = React.useRef(null)
    const [color, setcolor] = useState("blue")
    useFrame(() => {
        meshMat.current.rotation.x = 0.1
    })
    return (
        <mesh onClick={() => { setcolor("red") }}>
            <boxGeometry position={[0, 0, 0]} args={[10, 10, 10]}></boxGeometry>
            <meshStandardMaterial ref={meshMat} color={color}  ></meshStandardMaterial>
        </mesh>
    )
}


export default function Home() {
    return (
        <div>
            <Canvas camera={{ position: [10, 10, 10] }}>
                <MyMesh></MyMesh>
                <ambientLight intensity={0.9} />
                <directionalLight color="red" position={[0, 0, 5]} />
            </Canvas>
        </div>
    );
}
