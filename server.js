const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scalable AWS DevOps Web App</title>

    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-[#1a0f12] text-white min-h-screen">

    <!-- Header -->
    <header class="text-center py-12 border-b border-[#4b1f2a] bg-[#2b1118] shadow-lg">
        
        <div class="text-6xl mb-4">🚀</div>

        <h1 class="text-4xl md:text-6xl font-bold text-[#ff4d6d]">
            Scalable AWS DevOps Web App
        </h1>

        <p class="text-gray-300 mt-4 text-lg">
            Built using Node.js • Docker • AWS • ECS • CI/CD
        </p>

    </header>

    <!-- Main Container -->
    <main class="max-w-7xl mx-auto p-6">

        <!-- Status Card -->
        <div class="bg-[#2b1118] border border-[#4b1f2a] rounded-3xl p-8 shadow-2xl text-center mb-10">

            <div class="text-5xl mb-4">✅</div>

            <h2 class="text-3xl font-bold text-green-400 mb-3">
                Application Running Successfully
            </h2>

            <p class="text-gray-300 text-lg">
                Fully automated scalable deployment running on AWS Cloud Infrastructure
            </p>

        </div>

        <!-- Tech Stack -->
        <h2 class="text-3xl font-bold text-center text-[#ff4d6d] mb-8">
            ⚡ Technology Stack
        </h2>

        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">

            <div class="bg-[#2b1118] p-6 rounded-2xl border border-[#4b1f2a] hover:scale-105 transition">
                <div class="text-4xl mb-3">🟢</div>
                <h3 class="text-[#ff758f] font-bold text-xl mb-2">Node.js</h3>
                <p class="text-gray-400 text-sm">Backend Runtime Environment</p>
            </div>

            <div class="bg-[#2b1118] p-6 rounded-2xl border border-[#4b1f2a] hover:scale-105 transition">
                <div class="text-4xl mb-3">⚡</div>
                <h3 class="text-[#ff758f] font-bold text-xl mb-2">Express</h3>
                <p class="text-gray-400 text-sm">Fast Web Framework</p>
            </div>

            <div class="bg-[#2b1118] p-6 rounded-2xl border border-[#4b1f2a] hover:scale-105 transition">
                <div class="text-4xl mb-3">🐳</div>
                <h3 class="text-[#ff758f] font-bold text-xl mb-2">Docker</h3>
                <p class="text-gray-400 text-sm">Containerized Deployment</p>
            </div>

            <div class="bg-[#2b1118] p-6 rounded-2xl border border-[#4b1f2a] hover:scale-105 transition">
                <div class="text-4xl mb-3">☁️</div>
                <h3 class="text-[#ff758f] font-bold text-xl mb-2">AWS</h3>
                <p class="text-gray-400 text-sm">Cloud Infrastructure</p>
            </div>

            <div class="bg-[#2b1118] p-6 rounded-2xl border border-[#4b1f2a] hover:scale-105 transition">
                <div class="text-4xl mb-3">🔄</div>
                <h3 class="text-[#ff758f] font-bold text-xl mb-2">CI/CD</h3>
                <p class="text-gray-400 text-sm">GitHub Actions Automation</p>
            </div>

        </div>

        <!-- Architecture Flow -->
        <div class="bg-[#2b1118] border border-[#4b1f2a] rounded-3xl p-10 shadow-2xl">

            <h2 class="text-4xl font-bold text-center text-[#ff4d6d] mb-10">
                🔥 Deployment Architecture Flow
            </h2>

            <div class="space-y-5 text-center">

                <div class="p-4 bg-[#3a1620] rounded-2xl text-lg font-semibold">
                    📂 GitHub Repository
                </div>

                <div class="text-3xl text-[#ff758f]">⬇️</div>

                <div class="p-4 bg-[#3a1620] rounded-2xl text-lg font-semibold">
                    ⚙️ GitHub Actions CI/CD Pipeline
                </div>

                <div class="text-3xl text-[#ff758f]">⬇️</div>

                <div class="p-4 bg-[#3a1620] rounded-2xl text-lg font-semibold">
                    🐳 Docker Image Build
                </div>

                <div class="text-3xl text-[#ff758f]">⬇️</div>

                <div class="p-4 bg-[#3a1620] rounded-2xl text-lg font-semibold">
                    📦 Amazon ECR Repository
                </div>

                <div class="text-3xl text-[#ff758f]">⬇️</div>

                <div class="p-4 bg-[#3a1620] rounded-2xl text-lg font-semibold">
                    🚀 Amazon ECS Fargate Deployment
                </div>

                <div class="text-3xl text-[#ff758f]">⬇️</div>

                <div class="p-4 bg-[#3a1620] rounded-2xl text-lg font-semibold">
                    ⚖️ Load Balancer Traffic Distribution
                </div>

                <div class="text-3xl text-[#ff758f]">⬇️</div>

                <div class="p-4 bg-[#3a1620] rounded-2xl text-lg font-semibold">
                    🌍 Users Access Application
                </div>

            </div>

        </div>

    </main>

    <!-- Footer -->
    <footer class="text-center text-gray-400 py-8 border-t border-[#4b1f2a] mt-12 bg-[#2b1118]">

        <div class="text-3xl mb-3">❤️ Love You</div>

        <p class="text-lg">
            Deployed using Modern AWS DevOps Architecture
        </p>

        <p class="mt-2 text-sm text-gray-500">
            Scalable • Reliable • Automated • Containerized
        </p>

    </footer>

</body>

</html>
    `);

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});