export const testTrue = () => {
    return {
        type: 'testTrue',
    }
}
export const testFalse = () => {
    return {
        type: 'testFalse',
    }
}

export const saveSpecifications = (specifications) => {
    return {
        type: 'SAVE_SPECIFICATIONS',
        payload: specifications,
    };
};

