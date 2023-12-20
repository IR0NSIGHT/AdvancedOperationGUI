import TerrainSelector from "./TerrainSelector";
import {getTerrainById, sortTerrainAlphabetically, wpTerrainTypes, WpTerrainType} from "./WpTerrainTypes";

export type WeightedTerrainSetting = { terrain: WpTerrainType, weight: number }

export type TerrainSettingMenuProps = {
    terrainSetting: WeightedTerrainSetting
    onUpdateSetting: (oldSetting: WeightedTerrainSetting, newSetting: WeightedTerrainSetting) => void
}

const TerrainSettingMenu: React.FC<TerrainSettingMenuProps> =
    ({terrainSetting, onUpdateSetting}: TerrainSettingMenuProps) => {

        const onTerrainTypeChanged = (id: number) => {
            const newTerrain = getTerrainById(id, wpTerrainTypes)
            if (newTerrain == undefined) {
                console.error("terrain type with id " + id + " was not found!")
                return
            }
            onUpdateSetting(terrainSetting, {...terrainSetting, terrain: newTerrain})
        }
        const onValueChange = (value: number) => {
            console.log("on value change: newValue", value)
            onUpdateSetting(terrainSetting, {...terrainSetting, weight: value})
        }
        return (
            <div>
                <TerrainSelector onUpdateTerrainName={onTerrainTypeChanged} terrain={terrainSetting.terrain}
                                 terrainList={sortTerrainAlphabetically(wpTerrainTypes)}/>
                <div>weight: 1</div>
            </div>
        );
    };

export default TerrainSettingMenu;
