import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {AdvancedConfigEditor} from "./AdvancedConfigEditor";
import {DisplayConfig, newEmptyConfig} from "./DisplayConfig";

export type HistoryNavigatorProps = {
    maxHistories: number,
    initialHistory: DisplayConfig[]
}

export const HistoryNavigator: React.FC<HistoryNavigatorProps> = ({maxHistories, initialHistory}) => {
    const [history, setHistory] = useState<DisplayConfig[]>(initialHistory);
    const [currentIndex, setCurrentIndex] = useState(0);

    const displayedConfig: DisplayConfig = history.length > 0 ? history[currentIndex] : newEmptyConfig();
    console.log("displayed config:", displayedConfig, "history:", history)
    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const navigateTo = (index: number) => {
        setCurrentIndex(index);
    };

    const addToHistory = (config: DisplayConfig) => {
        const editingHistory = currentIndex != history.length - 1
        if (editingHistory) {
            setHistory([...history.slice(0, currentIndex + 1), config])
            setCurrentIndex(currentIndex + 1)
        } else {
            setHistory([...history, config]);
            setCurrentIndex(currentIndex + 1)
        }
    };

    return (
        <div>
            <div>
                <Button variant="contained" color="primary" onClick={goToPrevious}>
                    Previous
                </Button>
                <Button variant="contained" color="primary" onClick={goToNext}>
                    Next
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={() => {
                    addToHistory(displayedConfig)
                }}>
                    Add to History
                </Button>
            </div>
            <div>
                {history.map((item, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        onClick={() => navigateTo(index)}
                        style={{margin: '5px'}}
                        disabled={index === currentIndex}
                    >
                        historic config
                    </Button>
                ))}
                <AdvancedConfigEditor initialConfig={displayedConfig}/>
            </div>
        </div>
    );
};
