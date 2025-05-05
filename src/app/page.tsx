'use client'

import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";

export default function Home() {
    const meshMat = React.useRef(null)
    const [color, setcolor] = useState("blue")
    return (
        <div>
            <Canvas camera={{ position: [10, 0, 10] }}>
                <mesh onClick={() => { setcolor("red") }}>
                    <boxGeometry position={[0, 0, 0]} args={[10, 10, 10]}></boxGeometry>
                    <meshStandardMaterial ref={meshMat} color={color}  ></meshStandardMaterial>
                </mesh>
                <ambientLight intensity={0.9} />
                <directionalLight color="red" position={[0, 0, 5]} />
            </Canvas>
        </div>
    );
}
