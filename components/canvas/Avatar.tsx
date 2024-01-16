import React, { useEffect, useRef } from "react";
import {useGLTF, useAnimations, useFBX} from "@react-three/drei";

export function AvatarAnimation(props) {
    const animation = props;
    const group = useRef();
    
    const { animations: impactAnimation } = useGLTF("/assets/impact.glb");
    const { animations: standingAnimation } = useGLTF("/assets/standing.glb");
    const { animations: startledAnimation } = useGLTF("/assets/startled.glb");
    const { animations: wavingAnimation } = useGLTF("/assets/waving.glb");
    const { animations: idleAnimation } = useGLTF("/assets/idle.glb");
    const { animations: fallingAnimation } = useGLTF("/assets/falling.glb");

    fallingAnimation[0].name = "Falling";
    impactAnimation[0].name = "Impact";
    standingAnimation[0].name = "Standing";
    startledAnimation[0].name = "Startled";
    idleAnimation[0].name = "Idle";
    wavingAnimation[0].name = "waving";

    const { actions } = useAnimations(
        [fallingAnimation[0], impactAnimation[0], standingAnimation[0], startledAnimation[0]], group
    );
    
    useEffect(() => {
        actions[animation].reset().play();
    });
}

export function Falling(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/assets/falling.glb");
    const { animations: fallingAnimation } = useFBX("/assets/falling.fbx");
    fallingAnimation[0].name = "Falling";
    
    const { actions } = useAnimations(
        fallingAnimation, group
    );
    useEffect(() => {
        actions["Falling"].reset().play();
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" scale={0.01} >
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

export function Impact(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/assets/falling.glb");
    const { animations: impactAnimation } = useFBX("/assets/impact.fbx");
    impactAnimation[0].name = "Impact";

    const { actions } = useAnimations(
        impactAnimation, group
    );
    useEffect(() => {
        actions["Impact"].reset().play();
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" scale={0.01} >
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
export function Standing(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/assets/falling.glb");
    const { animations: standingAnimation } = useFBX("/assets/standing.fbx");
    standingAnimation[0].name = "Standing";

    const { actions } = useAnimations(
        standingAnimation, group
    );
    useEffect(() => {
        actions["Standing"].reset().play();
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" scale={0.01} >
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
export function Waving(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/assets/falling.glb");
    const { animations: wavingAnimation } = useFBX("/assets/waving.fbx");
    wavingAnimation[0].name = "Waving";

    const { actions } = useAnimations(
        wavingAnimation, group
    );
    useEffect(() => {
        actions["Waving"].reset().play();
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" scale={0.01} >
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

export function Idle(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/assets/falling.glb");
    const { animations: idleAnimation } = useFBX("/assets/idle.fbx");
    idleAnimation[0].name = "Idle";

    const { actions } = useAnimations(
        idleAnimation, group
    );
    useEffect(() => {
        actions["Idle"].reset().play();
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" scale={0.01} >
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