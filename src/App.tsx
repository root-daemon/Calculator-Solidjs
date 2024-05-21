import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Button from "./components/Button";

const App: Component = () => {
  const [input, setInput] = createSignal("0");

  function evaluate() {
    if (input().startsWith("0")) setInput(input().replace("0", ""));
    setInput(eval(input()).toString());
  }

  return (
    <div class="flex justify-center items-center h-screen ">
      <div class="flex flex-col w-60 bg-gray-200 p-2 rounded-lg">
        <code class="bg-gray-400 h-10 flex items-center rounded-lg p-5">{input()}</code>
        <div class="flex flex-col">
        <div class="w-full grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(1,1fr)] gap-x-1 gap-y-1">
        <Button
              value={"AC"}
              action={() => setInput('')}
            />
            <Button
              value={"<<"}
              action={() => setInput(input().startsWith("0") ? input().replace("0", "").slice(0, -1) : input().slice(0, -1))}
            />
        <Button
              value={"%"}
              action={() => setInput(input() + '%')}
            />
        
        <Button
              value={"/"}
              action={() => !input().endsWith("/") && setInput(input() + "/")}
            />
            </div>
        <div class="flex flex-row">
          <div class="w-9/12 grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(4,1fr)] gap-x-1 gap-y-1">
            {Array(...Array(10)).map(
              (_, num) =>
                num > 0 && (
                  <Button
                    value={num}
                    action={() => setInput(input() + num.toString())}
                  />
                )
            )}
            <Button value={"00"} action={() => setInput(input() + "00")} />
            <Button value={0} action={() => setInput(input() + "0")} />
            <Button
              value={"."}
              action={() => !input().endsWith(".") && setInput(input() + ".")}
            />
            
          </div>
          <div class="w-3/12 grid grid-rows-[repeat(4,1fr)] gap-x-1 gap-y-1">
            
            <Button
              value={"x"}
              action={() => !input().endsWith("*") && setInput(input() + "*")}
            />
            
            <Button
              value={"+"}
              action={() => !input().endsWith("+") && setInput(input() + "+")}
            />
            <Button
              value={"-"}
              action={() => !input().endsWith("-") && setInput(input() + "-")}
            />
            <Button value={"="} action={() => evaluate()} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default App;
