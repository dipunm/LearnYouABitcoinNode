import './Dashboard.css';

export default function App() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Welcome to the Dashboard</h1>
        </header>
        <section className="content">
          <p>Start adding your content here!</p>
        </section>
      </main>
    </div>
  );
}