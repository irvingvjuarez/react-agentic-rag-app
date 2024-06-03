import { OpenAI, OpenAIEmbedding, ResponseSynthesizer, RetrieverQueryEngine, serviceContextFromDefaults, SimpleDirectoryReader, SimpleResponseBuilder, VectorIndexRetriever, VectorStoreIndex } from "llamaindex";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Detailed process about how to create a RAG app
        const documents = await new SimpleDirectoryReader().loadData({directoryPath: './data'})
        const index = await VectorStoreIndex.fromDocuments(documents);

        const customLLM = new OpenAI();
        const customEmbedding = new OpenAIEmbedding();
        const customServiceContext = serviceContextFromDefaults({
            llm: customLLM,
            embedModel: customEmbedding
        })

        const assistantInitialPropmt = ({context = '', query = ''}) => {
            return `
                Context information is below wrapped in triple quotes:
                """${context}"""

                Given the context information, answer the query
                At the end of the response, don't forget to add a farewell message from Jarvis, the AI assistant.
                Query: ${query}
                Answer: 
            `;
        }

        const responseBuilder = new SimpleResponseBuilder(customServiceContext, assistantInitialPropmt);
        const customSynthesizer = new ResponseSynthesizer({
            responseBuilder,
            serviceContext: customServiceContext
        });
        const customRetriever = new VectorIndexRetriever({
            index
        })

        const customQueryEngine = new RetrieverQueryEngine(
            customRetriever,
            customSynthesizer
        )

        const request = await customQueryEngine.query(req.body);
        const response = request.toString();
        
        res.status(200).json({response});
    } else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}