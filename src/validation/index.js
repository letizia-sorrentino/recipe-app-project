import joi from "joi";
import { createAccountSchema, searchRecipeSchema } from "./schemas";

export const validate = async (payload, type) => {
    let r;
    switch (type) {
        case "createAccount":
            r = joi.object(createAccountSchema);
            break;
        case "searchRecipe":
            r = joi.object(searchRecipeSchema);
            break;
        default:
            break;
    }

    try {
        const results = await r.validateAsync(payload);
        return null;
    } catch (errors) {
        const errorsMod = {};
        errors.details.forEach((error) => {
            errorsMod[error.context.key] = error.message
        });
        return errorsMod;
    }


};