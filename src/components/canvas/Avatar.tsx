import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { ST } from "next/dist/shared/lib/utils";

export function Avatar(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/assets/falling.glb");
    /*
    const { animations: impactAnimation } = useGLTF("/assets/impact.glb");
    const { animations: standingAnimation } = useGLTF("/assets/standing.glb");
    const { animations: startledAnimation } = useGLTF("/assets/startled.glb");

    fallingAnimation[0].name = "Falling";
    impactAnimation[0].name = "Impact";
    standingAnimation[0].name = "Standing";
    startledAnimation[0].name = "Startled";

    const { actions } = useAnimations(
        [fallingAnimation[0], impactAnimation[0], standingAnimation[0], startledAnimation[0]], group
    );
    useEffect(() => {
        actions["Falling"].reset().fadeIn(0.5).play();
        actions["Falling"].reset().fadeOut(3.0);
    }, []);

    useEffect(() => {
        actions["Impact"].reset().fadeIn(3.0).play();
        actions["Impact"].reset().fadeOut(6.0);
    }, []);

    useEffect(() => {
        actions["Standing"].reset().fadeIn(6.0).play();
        actions["Standing"].reset().fadeOut(9.0);
    }, []);

    useEffect(() => {
        actions["Startled"].reset().fadeIn(9.0).play();
        actions["Startled"].reset().fadeOut(12.0);
    }, []); */

    const { animations: fullAnimation } = useGLTF("/assets/animation.glb");

    fullAnimation[0].name = "Full";
    const { actions } = useAnimations(
        fullAnimation, group
    );
    useEffect(() => {
        actions["Full"].reset().play();
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" scale={0.01}>
                    <skinnedMesh
                        name="Body"
                        geometry={nodes.Body.geometry}
                        material={materials.Body}
                        skeleton={nodes.Body.skeleton}
                    />
                    <skinnedMesh
                        name="Head"
                        geometry={nodes.Head.geometry}
                        material={materials.Body}
                        skeleton={nodes.Head.skeleton}
                    />
                    <group name="Jacket">
                        <skinnedMesh
                            name="GiacconePattern2D_3686_Giacca_Color_0"
                            geometry={nodes.GiacconePattern2D_3686_Giacca_Color_0.geometry}
                            material={materials.Giacca_Color}
                            skeleton={nodes.GiacconePattern2D_3686_Giacca_Color_0.skeleton}
                        />
                        <skinnedMesh
                            name="GiacconePattern2D_3686_Giacca_Color_0_1"
                            geometry={nodes.GiacconePattern2D_3686_Giacca_Color_0_1.geometry}
                            material={materials.Polsini}
                            skeleton={nodes.GiacconePattern2D_3686_Giacca_Color_0_1.skeleton}
                        />
                        <skinnedMesh
                            name="GiacconePattern2D_3686_Giacca_Color_0_2"
                            geometry={nodes.GiacconePattern2D_3686_Giacca_Color_0_2.geometry}
                            material={materials.Cerniera}
                            skeleton={nodes.GiacconePattern2D_3686_Giacca_Color_0_2.skeleton}
                        />
                        <skinnedMesh
                            name="GiacconePattern2D_3686_Giacca_Color_0_3"
                            geometry={nodes.GiacconePattern2D_3686_Giacca_Color_0_3.geometry}
                            material={materials.Shirt}
                            skeleton={nodes.GiacconePattern2D_3686_Giacca_Color_0_3.skeleton}
                        />
                    </group>
                    <skinnedMesh
                        name="LeftEye"
                        geometry={nodes.LeftEye.geometry}
                        material={materials.Eye}
                        skeleton={nodes.LeftEye.skeleton}
                    />
                    <skinnedMesh
                        name="LeftEyebrow"
                        geometry={nodes.LeftEyebrow.geometry}
                        material={materials.Eye}
                        skeleton={nodes.LeftEyebrow.skeleton}
                    />
                    <group name="LeftShoe">
                        <skinnedMesh
                            name="Mesh001"
                            geometry={nodes.Mesh001.geometry}
                            material={materials.vans}
                            skeleton={nodes.Mesh001.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh001_1"
                            geometry={nodes.Mesh001_1.geometry}
                            material={materials["vans.002"]}
                            skeleton={nodes.Mesh001_1.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh001_2"
                            geometry={nodes.Mesh001_2.geometry}
                            material={materials["vans.001"]}
                            skeleton={nodes.Mesh001_2.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh001_3"
                            geometry={nodes.Mesh001_3.geometry}
                            material={materials["vans.003"]}
                            skeleton={nodes.Mesh001_3.skeleton}
                        />
                    </group>
                    <skinnedMesh
                        name="Mohawk"
                        geometry={nodes.Mohawk.geometry}
                        material={materials.Hair}
                        skeleton={nodes.Mohawk.skeleton}
                    />
                    <skinnedMesh
                        name="Pants"
                        geometry={nodes.Pants.geometry}
                        material={materials.Pants}
                        skeleton={nodes.Pants.skeleton}
                    />
                    <skinnedMesh
                        name="RightEye"
                        geometry={nodes.RightEye.geometry}
                        material={materials.Eye}
                        skeleton={nodes.RightEye.skeleton}
                    />
                    <skinnedMesh
                        name="RightEyebrow"
                        geometry={nodes.RightEyebrow.geometry}
                        material={materials.Eye}
                        skeleton={nodes.RightEyebrow.skeleton}
                    />
                    <group name="RightShoes">
                        <skinnedMesh
                            name="Mesh002"
                            geometry={nodes.Mesh002.geometry}
                            material={materials.vans}
                            skeleton={nodes.Mesh002.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh002_1"
                            geometry={nodes.Mesh002_1.geometry}
                            material={materials["vans.002"]}
                            skeleton={nodes.Mesh002_1.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh002_2"
                            geometry={nodes.Mesh002_2.geometry}
                            material={materials["vans.001"]}
                            skeleton={nodes.Mesh002_2.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh002_3"
                            geometry={nodes.Mesh002_3.geometry}
                            material={materials["vans.003"]}
                            skeleton={nodes.Mesh002_3.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh002_4"
                            geometry={nodes.Mesh002_4.geometry}
                            material={materials["vans.004"]}
                            skeleton={nodes.Mesh002_4.skeleton}
                        />
                    </group>
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/assets/falling.glb");