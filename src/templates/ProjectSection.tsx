import React, {useMemo, useState, useRef } from "react";
import { promises as fs } from "fs";
import { useControls, useCreateStore, Leva, LevaPanel } from "leva";

import Data  from "@/data/data.json";
import { Section } from "@/components/canvas/View";

const _array = [...Data];

const Widget = () => {
    const MLStore = useCreateStore();
    const VizStore = useCreateStore();
    const CVStore = useCreateStore();
    const HobbiesStore = useCreateStore();

    let [ active, setActive ] = useState("");

    const machineLearning = useControls(
        {
            "Machine Learning": {
                value: true,
                onChange: (value) => {
                    setActive("machine-learning");
                }
            },
        },
        { store: MLStore }
    );

    const visualizations = useControls(
        {
            Visualizations: {
                value: true,
                onChange: (value) => {
                    setActive("visualizations")
                }
            }
        },
        { store: VizStore }
    );

    const computerVision = useControls(
        {
            "Computer Vision": {
                value: true,
                onChange: (v) => {
                    setActive("computer-vision");
                }
            }
        },
        { store: CVStore }
    );

    const hobbies = useControls(
        {
            Hobbies: {
                value: true,
                onChange: (v) => {
                    setActive("hobbies");
                }
            }
        },
        { store: HobbiesStore }
    );

    return(
        <div
            style={{
                width: 350,
            }}>
            <Leva />
            <LevaPanel fill flat titleBar={false} store={MLStore} />
            <LevaPanel fill flat titleBar={false} store={VizStore} />
            <LevaPanel fill flat titleBar={false} store={CVStore} />
            <LevaPanel fill flat titleBar={false} store={HobbiesStore} />
        </div>
    );
}

//TODO: Switch data to be programmatic
export function ProjectSection(props) {
    let [ currentArray, setArray ] = useState([..._array]);
    let [ active, setActive ] = useState("");

    const filter = useMemo(() => {
        currentArray.filter(item => item.categoryKey == active).map(item => item.applied = !(item.applied));
        return currentArray.filter(name => name.applied == true);
    }, [active])

    return(
    <>
        <Widget/>
        <Section list={..._array} {...props} />
    </>)
}
