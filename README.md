# Learn with Jiji – Backend Service

This project implements the backend for **Learn with Jiji**, an AI-style learning companion built to demonstrate backend fundamentals, Supabase usage, and clean API design in a product-led context.

The backend accepts user learning queries, retrieves relevant learning resources from Supabase, and returns a structured response that can be directly consumed by a frontend application.

> **Note:** Real AI/LLM integration is intentionally mocked as per the assignment scope.

---

## Tech Stack

- **Node.js**
- **Express.js**
- **Supabase**
  - PostgreSQL (Database)
  - Auth (mocked)
  - Storage (PPT & Video files)
  - Row Level Security (RLS)
- **REST API**

---

## How to Run Locally

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd jiji-backend
2. Install dependencies
npm install
3. Environment variables
Create a .env file in the project root:

PORT=3000
SUPABASE_URL=https://<project-id>.supabase.co
SUPABASE_ANON_KEY=<your-anon-public-key>
4. Start the server
npm start
The server will run on:

http://localhost:3000
API Endpoints
POST /ask-jiji
Description:
Accepts a user query, fetches relevant learning resources from Supabase, and returns a structured response.

Request Body
{
  "query": "Explain RAG"
}
Response
{
  "answer": "Retrieval-Augmented Generation (RAG) is a method that enhances AI responses using external knowledge sources.",
  "resources": [
    {
      "title": "RAG Introduction Slides",
      "type": "ppt",
      "file_url": "https://..."
    },
    {
      "title": "RAG Explained Video",
      "type": "video",
      "file_url": "https://..."
    }
  ]
}
Database Schema (Supabase)
Tables Used
profiles
Stores basic user profile information.

queries
Stores user-submitted learning queries for tracking and analytics.

resources
Stores learning resources such as PPTs and videos.

Contains metadata and public file URLs from Supabase Storage.

Authentication & RLS
Authentication
Supabase Auth is supported.

For this assignment, authentication is mocked to keep the focus on backend logic and API design.

Row Level Security (RLS)
RLS can be enabled to restrict access based on authenticated users.

Intended design:

Users can only read their own query records.

For demo simplicity, tables are currently unrestricted.

This demonstrates awareness of Supabase security best practices without over-engineering.

Storage Handling
Learning resources (PPTs and videos) are stored in Supabase Storage.

Buckets are configured as public for frontend access.

Only public file URLs are stored in the database.

The backend never directly handles file uploads or downloads.

Basic Security Considerations
No secrets are committed to the repository.

Environment variables are used for sensitive configuration.

Basic input validation is performed on API requests.

Clear separation between API logic, database access, and storage.

One Improvement With More Time
With more time, I would integrate real AI services (such as OpenAI or Claude) along with semantic search using embeddings, enabling intelligent content retrieval instead of keyword-based matching.

Assignment Scope Compliance
Backend-only implementation

Supabase used for Database, Auth, Storage, and RLS

Clean REST API design

Structured responses for frontend consumption

Mocked AI logic as required
