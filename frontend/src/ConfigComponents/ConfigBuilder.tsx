import React, { useState } from 'react';

const ConfigBuilder: React.FC = () => {
    const [globalWPOperation, setGlobalWPOperation] = useState({
        name: '',
        layer: ['', 0], // Placeholder for layer name and value
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGlobalWPOperation({ ...globalWPOperation, name: event.target.value });
    };

    const handleLayerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLayer = event.target.value;
        const selectedValue = event.target.selectedIndex; // index serves as the value (0 to 15)
        setGlobalWPOperation({ ...globalWPOperation, layer: [selectedLayer, selectedValue] });
    };

    const layerOptions = Array.from({ length: 16 }, (_, index) => index).map(value => (
        <option key={value} value={`Layer ${value}`}>
            Layer {value}
        </option>
    ));

    return (
        <div>
            <h2>Create Config</h2>
            <div>
                <label htmlFor="nameInput">Operation Name:</label>
                <input
                    type="text"
                    id="nameInput"
                    value={globalWPOperation.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="layerSelect">Layer:</label>
                <select id="layerSelect" onChange={handleLayerChange} value={globalWPOperation.layer[0]}>
                    {layerOptions}
                </select>
            </div>
            <div>
                {/* Skip onlyOnLayer and perlin for now */}
            </div>
            <div>
                <pre>{JSON.stringify(globalWPOperation, null, 2)}</pre>
                {/* This displays the current JSON representation of the globalWPOperation */}
            </div>
            {/* Implement download button and JSON generation logic here */}
        </div>
    );
};

export default ConfigBuilder;
