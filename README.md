Wimbledon Final API

A simple REST API that returns information about Wimbledon Men’s Singles finals for a given year. Built with Node.js and Express.

API Endpoint

Base URL

https://YOUR-SERVICE-NAME.onrender.com/wimbledon

Example Request
GET /wimbledon?year=2021

Example Response
{
  "year": 2021,
  "champion": "Novak Djokovic",
  "runner_up": "Matteo Berrettini",
  "score": "6–7(4–7), 6–4, 6–4, 6–3",
  "sets": 4,
  "tiebreak": true
}

Supported Years

Data available for 2010–2024

2020: Cancelled due to COVID-19

2024: Placeholder data

Run Locally
git clone https://github.com/kuljeetsinhparmar/wimbledon.git
cd wimbledon
npm install
npm start


Visit:

http://localhost:3000/wimbledon?year=2019

Tech Stack

Node.js
Express
Vercel(deployment)

Express

Render (deployment)
