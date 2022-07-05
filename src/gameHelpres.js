export const STGAE_WIDTH = 10;
export const STGAE_HEIGHT = 20;


export const createStage = () => 
    Array.from(Array(STGAE_HEIGHT), () =>
        new Array(STGAE_WIDTH).fill([0,'clear'])
)