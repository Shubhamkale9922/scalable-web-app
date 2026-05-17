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
    <title>Scalable AWS DevOps Web App</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-slate-950 text-white min-h-screen">

    <!-- Header -->
    <header class="text-center py-10 border-b border-slate-800">
        <h1 class="text-4xl md:text-5xl font-bold text-cyan-400">
            Scalable AWS DevOps Web Application
        </h1>
        <p class="text-slate-400 mt-3 text-lg">
            Built using Node.js • Express • Docker • AWS • CI/CD • Auto Scaling
        </p>
    </header>

    <!-- Main Container -->
    <main class="max-w-6xl mx-auto p-6">

        <!-- Status Card -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg text-center mb-10">
            <h2 class="text-2xl font-semibold text-green-400 mb-2">
                System Status: Running
            </h2>
            <p class="text-slate-400">
                Application is successfully deployed on AWS infrastructure using Docker containers
            </p>
        </div>

        <!-- Tech Stack -->
        <div class="grid md:grid-cols-5 gap-6 mb-10">

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 class="text-cyan-400 font-semibold text-xl mb-2">Node.js</h3>
                <p class="text-slate-400 text-sm">Backend runtime environment</p>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 class="text-cyan-400 font-semibold text-xl mb-2">Express</h3>
                <p class="text-slate-400 text-sm">Web framework for APIs</p>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 class="text-cyan-400 font-semibold text-xl mb-2">Docker</h3>
                <p class="text-slate-400 text-sm">Containerized application deployment</p>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 class="text-cyan-400 font-semibold text-xl mb-2">AWS</h3>
                <p class="text-slate-400 text-sm">Cloud infrastructure (EC2, ASG, NLB)</p>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 class="text-cyan-400 font-semibold text-xl mb-2">CI/CD</h3>
                <p class="text-slate-400 text-sm">GitHub Actions automation</p>
            </div>

        </div>

        <!-- Architecture Flow -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h2 class="text-2xl font-bold text-cyan-400 mb-6 text-center">
                Deployment Architecture Flow
            </h2>

            <div class="space-y-4 text-center text-slate-300">

                <div class="p-3 bg-slate-800 rounded-lg">
                    GitHub Repository (Source Code)
                </div>

                <div class="text-cyan-400">↓</div>

                <div class="p-3 bg-slate-800 rounded-lg">
                    GitHub Actions (CI/CD Pipeline)
                </div>

                <div class="text-cyan-400">↓</div>

                <div class="p-3 bg-slate-800 rounded-lg">
                    Docker Build & Containerization
                </div>

                <div class="text-cyan-400">↓</div>

                <div class="p-3 bg-slate-800 rounded-lg">
                    EC2 Deployment Server (Primary Node)
                </div>

                <div class="text-cyan-400">↓</div>

                <div class="p-3 bg-slate-800 rounded-lg">
                    Auto Scaling Group (Creates/Removes Instances)
                </div>

                <div class="text-cyan-400">↓</div>

                <div class="p-3 bg-slate-800 rounded-lg">
                    Network Load Balancer (Traffic Distribution)
                </div>

                <div class="text-cyan-400">↓</div>

                <div class="p-3 bg-slate-800 rounded-lg">
                    Docker Containers Running Application
                </div>

                <div class="text-cyan-400">↓</div>

                <div class="p-3 bg-slate-800 rounded-lg">
                    Users (Browser Access)
                </div>

            </div>

        </div>

    </main>

    <!-- Footer -->
    <footer class="text-center text-slate-500 py-8 border-t border-slate-800 mt-10">
        Deployed using AWS + Docker DevOps Architecture | Scalable • Reliable • Automated
    </footer>

</body>

</html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});