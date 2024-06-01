import { SimpleDirectoryReader, VectorStoreIndex } from "llamaindex";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
        const documents = await new SimpleDirectoryReader().loadData({directoryPath: './data'})
        const index = await VectorStoreIndex.fromDocuments(documents);
        const queryEngine = index.asQueryEngine();

        const request = await queryEngine.query(req.body)
        const response = request.toString();
        
        res.status(200).json({response});
    } else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}