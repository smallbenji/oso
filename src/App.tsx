import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { App as App1 } from './components/app/app';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <App1 />
            </header>
        </div>
    );
}

export default App;
