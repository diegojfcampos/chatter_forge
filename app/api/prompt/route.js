import { connectToDB } from '@utils/db'
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try{ 
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(Json.stringfy(prompts), {
            status: 200
        })

    }catch(error){
        return new Response("Failed to fetch all prompts", {
            status: 500
        })
    }
}