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

Deployed URL:https://niloy-prime-react.netlify.app/

<img width="1920" height="1080" alt="Screenshot 2025-10-31 171033" src="https://github.com/user-attachments/assets/0f709e35-c420-452f-a082-6de98d968d74" />
<img width="1920" height="1080" alt="Screenshot 2025-10-31 171018" src="https://github.com/user-attachments/assets/a636a8b7-9db5-4c01-b72d-fc4cd8848cde" />
<img width="1920" height="1080" alt="Screenshot 2025-10-31 171008" src="https://github.com/user-attachments/assets/3496154b-88d4-41ee-bee3-f01a2b90aa38" />
<img width="1920" height="1080" alt="Screenshot 2025-10-31 170955" src="https://github.com/user-attachments/assets/dd870f47-84e7-4b21-ab64-28314d89d7b5" />
<img width="1920" height="1080" alt="Screenshot 2025-10-31 170922" src="https://github.com/user-attachments/assets/807b4d51-0537-451b-8048-2a1acb0b2967" />



