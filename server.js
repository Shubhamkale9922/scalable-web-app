const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Scalable AWS Web App</title>

        <script src="https://cdn.tailwindcss.com"></script>
    </head>

    <body class="bg-slate-950 text-white min-h-screen flex items-center justify-center p-6">

        <div class="max-w-6xl w-full">

            <div class="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10">

                <div class="text-center">

                    <h1 class="text-5xl font-bold text-cyan-400 mb-5">
                        Scalable AWS Web Application
                    </h1>

                    <p class="text-slate-300 text-lg mb-8">
                        High Availability • Auto Scaling • Load Balancing • CI/CD Pipeline
                    </p>

                    <div class="inline-block bg-green-500/20 border border-green-500 text-green-400 px-6 py-3 rounded-full font-semibold">
                        Application Running Successfully
                    </div>

                </div>

            </div>

        </div>

    </body>

    </html>
    `);

});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});