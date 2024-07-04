import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function generateReadme(
  projectName: string,
  description: string,
  nodeVersion: string,
  features: string
): string {
  const featureList = features
    .split(",")
    .map((feature) => `- ${feature.trim()}`)
    .join("\n");

  return `
# ${projectName}

${description}

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js version ${nodeVersion}
  * You can check your Node.js version by running \`node --version\`
  * If you need to update or install Node.js, visit [the official Node.js website](https://nodejs.org/)

## Installation

Follow these steps to install and set up the project:

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/${projectName}.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd ${projectName}
   \`\`\`

3. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

## Usage

Explain how to use your project. For example:

\`\`\`
npm run dev
\`\`\`

## Features

${featureList}

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/yourusername/${projectName}](https://github.com/yourusername/${projectName})
  `;
}
