export default values => {
    const transformation = [];

    for (let i = 0; i < values.length; i++) {
        if(values[i].name && values[i].value)
        { transformation.push(`${values[i].name}=${values[i].value}`); }
    }

    return transformation;
};
