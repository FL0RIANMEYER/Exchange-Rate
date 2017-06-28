/**
 * transform form values from object to array, to easiely concat them to url querystring
 * @param  {Object} values to wrap in array
 * @return {Array}         wrapped form values
 */
export default values => {
    const transformation = [];

    for (let i = 0; i < values.length; i++) {
        if(values[i].name && values[i].value)
        { transformation.push(`${values[i].name}=${values[i].value}`); }
    }

    return transformation;
};
