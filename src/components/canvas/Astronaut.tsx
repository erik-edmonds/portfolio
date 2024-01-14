import React, {useEffect, useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import { OBJLoader } from "@/helpers/js/OBJLoaderFaces";
//import * as THREE from '@/helpers/js/threeMod';
import {createVertices} from "@/helpers/components/VertexConversion";

export function Astronaut(props) {
    const { nodes, materials } = useGLTF("/assets/astronaut.glb");


    const obj = useLoader(OBJLoader, '/assets/astronaut.obj');
    
    useEffect(() => {
        Object.values(nodes).forEach((material) => {
            if ( material instanceof THREE.Mesh ) {
                let scale = 2.1;
    
                let area = new THREE.Box3();
                area.setFromObject(material);
                let yOffset = (area.max.y * scale) / 2;
    
                material.geometry.scale(scale,scale,scale);
                rocketPoints = THREE.GeometryUtils.randomPointsInBufferGeometry(material.geometry, particleCount);
                createVertices(rocketParticles, rocketPoints, yOffset, 2);
            }
        });
    })
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Astronaut.geometry}
                material={materials.Astronaut_mat}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("/assets/astronaut.glb");