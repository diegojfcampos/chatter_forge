import { connectToDB } from '@utils/db'
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try{ 
        await connectToDB();

        const prompts = await Prompt.find({}).populare('creator');

        return new REsponse(Json.stringfy(prompts), {
            status: 200
        })

    }catch(error){
        return new REsponse("Failed to fetch all prompts", {
            status: 500
        })
    }
}