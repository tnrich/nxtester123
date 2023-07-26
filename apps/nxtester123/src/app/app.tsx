// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Zonk } from '@tg/zonk';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Zonk />
      <NxWelcome title="nxtester123" />
    </div>
  );
}

export default App;
