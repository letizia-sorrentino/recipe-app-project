import joi from "joi";

//define schema for joi validation

// Search recipe form
export const searchRecipeSchema = {
    searchInput: joi.string().required().max(32).allow(''),
}

// Create account form
export const createAccountSchema = {
    username: joi.string().min(3).max(20),
    email: joi.string().required().email({ tlds: { allow: false } }),
    password: joi.string().required().min(8).max(32),

}