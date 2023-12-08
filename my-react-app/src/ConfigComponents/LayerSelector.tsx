import React from 'react';

export type LayerSelectorProps = {
    layerName: string,
    layerList: string[],
    onUpdateLayerName: (newName: string) => void
}
export const LayerSelector: React.FC<LayerSelectorProps> = ({
                                                                layerName,
                                                                layerList,
                                                                onUpdateLayerName
                                                            }: LayerSelectorProps) => {
    const handleNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newName = (event.target as HTMLSelectElement).value;
        onUpdateLayerName(newName); // Call the prop function to update the name in the parent component
    };

    const layerListComps = layerList.map((name) => (
        <option key={name} value={name}>
            {name}
        </option>
    ))

    return (
        <div>
            <label htmlFor="nameDropdown">Layer: </label>
            <select id="nameDropdown" onChange={handleNameChange} value={layerName}>
                {layerListComps}
            </select>
        </div>
    );
};

export default LayerSelector;
