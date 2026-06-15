services:
  - type: web
    name: amazon-stock-bot
    runtime: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
