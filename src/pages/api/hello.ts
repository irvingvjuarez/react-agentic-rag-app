import { RouterQueryEngine, SimpleDirectoryReader, VectorStoreIndex } from "llamaindex";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const beginningSpaceXData = await new SimpleDirectoryReader().loadData({directoryPath: './data'});
        const beginningSpaceXIndex = await VectorStoreIndex.fromDocuments(beginningSpaceXData);
        const beginningSpaceXQueryEngine = beginningSpaceXIndex.asQueryEngine();

        const futureSpaceXData = await new SimpleDirectoryReader().loadData({directoryPath: './data-source2'});
        const futureSpaceXIndex = await VectorStoreIndex.fromDocuments(futureSpaceXData);
        const futureSpaceXQueryEngine = futureSpaceXIndex.asQueryEngine();

        const queryEngine = RouterQueryEngine.fromDefaults({
            queryEngineTools: [
                {
                    queryEngine: beginningSpaceXQueryEngine,
                    description: 'Beginnings of space exploration'
                },
                {
                    queryEngine: futureSpaceXQueryEngine,
                    description: 'Future of space exploration'
                }
            ]
        })
        const request = await queryEngine.query(req.body)
        const response = request.toString();
        res.status(200).json({response});
    } else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}