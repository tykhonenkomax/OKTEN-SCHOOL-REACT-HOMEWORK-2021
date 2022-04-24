

function reducer (state=[],action) {

    switch (action.type){
        case "LOAD":
            return [action.payload];
    }
    return  state;

}

export {reducer}