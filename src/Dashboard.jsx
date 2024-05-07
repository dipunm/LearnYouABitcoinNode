import './Dashboard.css';
import Banner from './components/Banner';

export default function App() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Running Bitcoin</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Banner>
          <h1>Congratulations!</h1>
          <p className="subtitle">Your Bitcoin node is up and ready for setup.</p>
        </Banner>
        <section className="content">
        </section>
      </main>
    </div>
  );
}