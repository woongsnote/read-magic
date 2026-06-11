# ReadMagic

Build a clean README draft in seconds.

[Live Demo](https://read-magic.vercel.app) · [Repository](https://github.com/woongsnote/read-magic)

## Overview

ReadMagic is a lightweight README generator that turns a few project details into a reusable Markdown draft.

Enter your project name, description, required Node.js version, and feature list. ReadMagic generates a structured `README.md` draft that you can copy and customize for your project.

The project focuses on providing a quick starting point rather than generating a fully completed README.

## Features

* Generate a README draft from simple project information
* Convert comma-separated features into a Markdown list
* Include commonly used README sections automatically
* Copy the generated Markdown to the clipboard
* Create another draft without returning to the home page
* Support light, dark, and system themes
* Generate and store the draft directly in the browser

## How It Works

1. Enter the project name and description.
2. Specify the required Node.js version.
3. Add project features separated by commas.
4. Select **Generate README**.
5. Review the generated Markdown and copy it to the clipboard.
6. Replace the placeholder repository and contact information before publishing.

The generated draft includes:

* Table of Contents
* Prerequisites
* Installation
* Usage
* Features
* Contributing
* License
* Contact

## Tech Stack

* Next.js 14
* React 18
* TypeScript
* Tailwind CSS
* Radix UI
* next-themes
* Lucide React

## Getting Started

### Prerequisites

* Node.js LTS
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/woongsnote/read-magic.git
```

Move into the project directory:

```bash
cd read-magic
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build.

```bash
npm run lint
```

Checks the project with ESLint.

## Project Structure

```text
read-magic/
├── app/
│   ├── build/
│   ├── result/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── ReadmeDisplay.tsx
│   ├── ReadmeForm.tsx
│   └── ThemeToggle.tsx
├── lib/
│   └── utils.ts
└── public/
```

## Current Scope

ReadMagic currently uses a predefined Markdown template.

The generated README contains placeholder repository and contact information, so the final draft should be reviewed and edited before being published.

Potential future improvements include:

* Customizable README sections
* Additional template options
* Markdown preview
* Repository and author information inputs
* Download as a `README.md` file

## Contributing

Contributions, issues, and suggestions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Jiwoong Moon**

* GitHub: [@woongsnote](https://github.com/woongsnote)
* Blog: [woongsnote.dev](https://woongsnote.dev)
