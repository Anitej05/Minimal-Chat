# MinimalChat: Where Real-Time Conversation Meets AI

MinimalChat isn't just another chat application. It's a dynamic communication platform where **real-time messaging seamlessly integrates with the power of artificial intelligence**. Built with a modern technology stack including React, Express.js, and MongoDB, MinimalChat offers a fluid and engaging user experience, enhanced by the intelligence of Google's Gemini AI model. Whether you're connecting with friends, collaborating on projects, or seeking quick answers, MinimalChat provides a smart and responsive environment to meet your communication needs.

## Beyond Basic Chat: What Sets MinimalChat Apart

MinimalChat elevates the standard chat experience with a suite of features designed for both simplicity and depth:

-   **AI-Powered Conversations:** At the heart of MinimalChat lies an integrated AI assistant, powered by Google's advanced Gemini model. This isn't just a chatbot; it's a context-aware conversationalist that understands the flow of your discussions. It provides concise, relevant responses, answers factual questions, and offers assistance when you need it, making your chats more productive and engaging.
-   **Seamless Real-Time Interaction:** Experience the immediacy of instant messaging with MinimalChat's real-time capabilities. Messages are delivered and displayed instantly, ensuring natural and fluid conversations.
-   **Secure and Private:** With robust registration and login features, MinimalChat ensures that your conversations remain private and secure.
-   **Intuitive and Responsive Design:** MinimalChat boasts a clean, modern interface that adapts gracefully to any device. Whether you're on a desktop, tablet, or smartphone, you'll enjoy a consistent and enjoyable user experience.
-   **Visually Appealing Customization:** Subtle design touches, like the custom scrollbar, add a layer of polish and enhance the overall aesthetic of the application.

## What Can You Do with MinimalChat?

-   **Engage in Dynamic Group Chats:** Connect with multiple users simultaneously, share ideas, and collaborate in real time.
-   **Get Instant Answers:** Leverage the AI assistant to get quick answers to your questions, whether it's a factual query, a mathematical problem, or a scientific concept.
-   **Streamline Your Workflow:** Use MinimalChat as a communication hub for your team or project, keeping everyone on the same page with instant updates.
-   **Enjoy a Personal Touch:** The AI assistant adapts to the conversation, offering relevant input and making the chat experience more personalized.

## Features

-   **User Authentication:** Secure user registration and login functionality.
-   **Real-time Messaging:** Instantly send and receive messages with other users.
-   **AI Assistant:** Integrated AI assistant using Google's Gemini model to provide helpful responses in the chat.
-   **Responsive Design:** User interface designed to work seamlessly across different devices and screen sizes.
-   **Custom Scrollbar:** A visually appealing custom scrollbar for the chat window.

## Technology Stack

-   **Frontend:**
    -   React
    -   React Router DOM
    -   React Hook Form
    -   Bootstrap
-   **Backend:**
    -   Node.js
    -   Express.js
    -   MongoDB (with Mongoose)
    -   Google Generative AI (for the AI assistant)
    -   CORS

## Setup and Installation

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (Node Package Manager)
-   MongoDB (installed and running locally or a cloud instance)
-   A Google Cloud account with API access for Google Generative AI (Gemini model)

### Installation Steps

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd minimalchat
    ```

2. **Install backend dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**
    -   Create a `.env` file in the root directory.
    -   Add your Google Generative AI API key:

    ```
    GOOGLE_GEN_AI_KEY=your_api_key_here
    ```

4. **Configure MongoDB:**
    -   Ensure MongoDB is running.
    -   Update the connection string in `server.js` if you are not using a local MongoDB instance at `mongodb://localhost:27017/MinimalChat`.

5. **Start the backend server:**

    ```bash
    npm start
    ```

    This will start the server on port 5000.

6. **Start the frontend (in a separate terminal):**
   - Navigate to the root of your project, if not already there.
   - run the development server:
    ```bash
    npm run dev
    ```
    This command is for vite. If you are not using vite, replace `dev` with `start`.

## Usage

1. Open your web browser and go to `http://localhost:5173/` (or the URL indicated by the frontend development server).
2. Register a new user account or log in with an existing account.
3. Start chatting!

## API Endpoints

-   **POST `/login`:** Authenticates a user.
    -   Request Body: `{ "Username": "yourusername", "Password": "yourpassword" }`
-   **POST `/register`:** Registers a new user.
    -   Request Body: `{ "Username": "yourusername", "Password": "yourpassword" }`
-   **POST `/messages/send-message`:** Sends a message to the server.
    -   Request Body: `{ "Username": "yourusername", "Content": "yourmessage" }`
-   **POST `/messages/get-messages`:** Retrieves messages after a specific timestamp.
    -   Request Body: `{ "Timestamp": "yourtimestamp" }`

## AI Assistant

The AI assistant is integrated into the chat and will respond under the following conditions:

-   When directly addressed.
-   When asked a factual, mathematical, or scientific question.
-   When the user's input clearly requires a response from the AI.

The AI will not respond if the user is engaging in conversation with other users or if the context does not necessitate AI intervention.

## Contributing

Contributions to MinimalChat are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the ISC License.

## Acknowledgements

-   [React](https://react.dev/)
-   [React Router](https://reactrouter.com/)
-   [Express.js](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [Google Generative AI](https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview)
-   [React Hook Form](https://react-hook-form.com/)
-   [Bootstrap](https://getbootstrap.com/)
