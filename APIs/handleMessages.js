const express = require('express');
const userApp = express.Router();
userApp.use(express.json());
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
const { Message } = require('../server.js');
const msg = []
const textprompt = 'You are an AI assistant integrated into a chat application. Your role is to provide concise, context-aware responses based on the last 20 messages in JSON format. Each message contains the username, content, and timestamp. If the username is "AI," it means you have previously responded in the chat. Use the context to understand the conversation flow and craft a relevant, clear, and short response to the last user message. Focus on being helpful, polite, and engaging. Here is the JSON of the last 20 messages:'
const checktextprompt = 'You are an AI assistant integrated into a group chat application. You will be given the last user message in JSON format. Your task is to decide if a response is necessary. Respond only if the user explicitly addresses you, asks a factual, mathematical, or scientific question, or clearly expects your input. If the user is chatting with others in the group or does not require your input, do not respond. Reply with a single word: "YES" if a response is needed or "NO" if it is not. Do not include any explanations or additional text. Here is the last message:'

async function getResponse(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text().trim()
}

// Route to send the client's message to the server
userApp.post('/send-message', async(req, res) => {
    const {Username, Content} = req.body;
    try{
        const response = await Message.create({
            Username : Username,
            Content : Content
        })
        res.status(200).send(response);
        console.log("Received a message:",Content);
        // AI will check to answer or not
        let lastmsg = {Username: Username, Content: Content, timestamp: Date.now()};
        msg.push(lastmsg);
        if(msg.length > 20){
            msg.shift();
        }
        if(Username != "AI"){
            var checkprompt = checktextprompt + JSON.stringify({lastmsg})
            var aicheckresponse = await getResponse(checkprompt);
            console.log(aicheckresponse.trim());
            if(aicheckresponse.trim() == "YES"){
                var jsonprompt = JSON.stringify({msg});
                console.log(jsonprompt)
                var prompt = textprompt + jsonprompt;
                var airesponse = await getResponse(prompt);
                const response = await Message.create({
                    Username : "AI",
                    Content : airesponse
                })
                var aimessage = {Username: "AI", Content: airesponse, timestamp: Date.now()}
                msg.push(aimessage);
            }
        }
    } catch(error) {
        res.status(500).send(JSON.stringify("Could not obtain the message. Please check your network connection."));
    }
})

// Route to send the messages of one user to others
userApp.post('/get-messages', async(req, res) => {
    const {Timestamp} = req.body;
    try{
        const messages = await Message.find({
            'Timestamp': {'$gt': Timestamp}
        })
        res.status(200).send(messages);
        console.log("Sent messages after:",Timestamp);
    } catch(error) {
        res.status(500).send(JSON.stringify("Could not send the messages."));
    }
});

module.exports = userApp;