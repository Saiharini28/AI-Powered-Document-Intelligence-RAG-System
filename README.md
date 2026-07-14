# Ask My Docs AI

## Overview

Ask My Docs AI is an AI-powered document intelligence platform that enables users to upload PDF documents and interact with them using natural language queries. The application uses Retrieval-Augmented Generation (RAG) to retrieve relevant information from uploaded documents and generate accurate responses with source citations.

## Features

* Upload and process PDF documents
* Ask questions in natural language
* AI-powered document question answering
* Retrieval-Augmented Generation (RAG) pipeline
* Semantic search using vector embeddings
* Source-aware responses with document citations
* Multiple document support
* Chat history management
* User authentication with Firebase
* Secure login and signup functionality
* Responsive and user-friendly interface

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Firebase Authentication

### Backend

* Python
* Flask
* LangChain
* Google Gemini API

### AI & Data Processing

* Retrieval-Augmented Generation (RAG)
* FAISS Vector Database
* Google Gemini Embeddings
* Recursive Character Text Splitting

## Architecture

1. User uploads PDF documents.
2. Documents are processed and split into chunks.
3. Text chunks are converted into vector embeddings.
4. Embeddings are stored in a FAISS vector database.
5. User submits a question.
6. Relevant document chunks are retrieved using semantic search.
7. Retrieved context is sent to Gemini LLM.
8. AI generates a response with supporting sources.

## Project Structure

```text
AskMyDocsAI/
│
├── backend/
│   ├── app.py
│   ├── rag.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── script.js
│   ├── auth.js
│   ├── firebase.js
│   ├── protect.js
│   └── style.css
│
├── uploads/
├── faiss_index/
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Saiharini28/ask-my-docs-ai.git
cd ask-my-docs-ai
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the Flask server:

```bash
python app.py
```

### Frontend Setup

Open the `frontend` folder in VS Code and launch:

```text
Open with Live Server
```

## Usage

1. Sign up or log in.
2. Upload one or more PDF documents.
3. Ask questions related to the uploaded content.
4. Receive AI-generated answers with document references.
5. View and manage chat history.

## Future Enhancements

* Cloud chat storage
* Multi-user document workspaces
* Document summarization
* OCR support for scanned PDFs
* Deployment on cloud platforms
* Multi-model AI support

## Learning Outcomes

This project helped in gaining practical experience with:

* Large Language Models (LLMs)
* Retrieval-Augmented Generation (RAG)
* Vector Databases
* Semantic Search
* AI Application Development
* Flask API Development
* Firebase Authentication
* Frontend-Backend Integration

## Author

**SaiHarini**

