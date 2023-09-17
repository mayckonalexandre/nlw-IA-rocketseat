import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploalVideoRoute } from "./routes/upload-video";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { fastifyCors } from '@fastify/cors'

const app = fastify()
app.register(fastifyCors, {
    origin: '*'
})
app.register(getAllPromptsRoute)
app.register(uploalVideoRoute)
app.register(generateAICompletionRoute)
app.register(createTranscriptionRoute)

app.listen({
    port: 3333,
}).then(() => console.log('HTTP Server Running!'))