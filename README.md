# React + TypeScript + Vite


🖼️ Artworks Explorer

A React + TypeScript application built with Vite and PrimeReact, featuring server-side pagination, row selection, and local storage persistence.
This app fetches real-time data from the Art Institute of Chicago API and displays it in an interactive table.

🚀 Tech Stack

React + TypeScript + Vite

PrimeReact (DataTable, OverlayPanel, etc.)

Context API for global state management

Fetch API for data fetching

Local Storage for data persistence

⚙️ Features

🔹 Fetch artworks dynamically from API

🔹 Paginated table view with adjustable rows per page

🔹 Select and store artworks using Context API

🔹 Save selections in Local Storage

🔹 Clean and responsive UI with PrimeReact components

🧩 Folder Structure

src/
 ├── components/
 │   └── Table.tsx          # Displays artworks in paginated DataTable
 ├── Context.tsx            # Holds global state and API logic
 ├── App.tsx                # Main app component
 ├── main.tsx               # React root rendering
 └── index.css              # Global styles

🧠 How It Works

On load, the app fetches artworks from:
https://api.artic.edu/api/v1/artworks?page=1

Pagination is handled through PrimeReact’s DataTable.

Selecting rows saves the artworks in local storage for later access.

You can adjust how many artworks to select using the overlay input field.

🛠️ Getting Started

1.Clone the repo

git clone https://github.com/NiloyRicky/PrimeReact.git
cd PrimeReact

2.Install dependencies
npm install

3.Run in development mode
npm run dev

4.Build for Production
npm run build

🧑‍💻 Author

Niloy Mondal
MERN Develope | React | TypeScript | MERN Stack

Depoyed URL:https://prime-react-niloy.netlify.app/<img width="1920" height="1080" alt="Screenshot 2025-10-31 165349" src="https://github.com/user-attachments/assets/3b8732ab-86fb-447d-a16e-40822ebdd0ee" />
<img width="1920" height="1080" alt="Screenshot 2025-10-31 165408" src="https://github.com/user-attachments/assets/5950acf4-5d6a-4d6c-9c08-b504c10f5094" />
<img width="1920" height="1080" alt="Screenshot 2025-10-31 165423" src="https://github.com/user-attachments/assets/ca0eea6b-65e7-4fbe-9659-3f7e5cee32aa" />


