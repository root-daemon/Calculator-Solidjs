import type { Component } from 'solid-js';
import { createEffect, createMemo, createSignal } from 'solid-js';
import { memo } from 'solid-js/web';
import styles from './App.module.css';
import Button from './components/Button';

const App: Component = () => {
  const [input, setInput] = createSignal('0');

  function evaluate() {
    setInput(eval(input()));
  }

  return (
    <div>
      <code class="flex bg-gray-400 p-5">{input()}</code>
      <div class="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(4,1fr)] gap-x-0 gap-y-0">
        {Array(...Array(10)).map(
          (_, num) =>
            num > 0 && (
              <Button
                value={num}
                action={() => setInput(input() + num.toString())}
              />
            )
        )}
        <Button value={'00'} action={() => setInput(input() + '00')} />
        <Button value={0} action={() => setInput(input() + '0')} />
        <Button
          value={'.'}
          action={() => !input().endsWith('.') && input() + '.'}
        />
        <Button value={'='} action={() => evaluate()} />
        <Button
          value={'+'}
          action={() => !input().endsWith('+') && input() + '+'}
        />
        <Button
          value={'-'}
          action={() => !input().endsWith('-') && input() + '-'}
        />
        <Button
          value={'/'}
          action={() => !input().endsWith('+') && input() + '/'}
        />
        <Button
          value={'x'}
          action={() => !input().endsWith('*') && input() + '*'}
        />
      </div>
    </div>
  );
};
export default App;
