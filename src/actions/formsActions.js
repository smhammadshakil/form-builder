const SAVE_FORM = 'save'
export const saveFormAction = (json) =>{
    return ({
        type : SAVE_FORM,
        json
    });
}