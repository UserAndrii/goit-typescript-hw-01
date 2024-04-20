import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  let funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}

export {};

function greeting() {
  return "Hello, world!";
}

type Greeting = ReturnType<typeof greeting>; // 'string'

function multiply(a: number, b: number) {
  return a * b;
}

type MultiplyResult = ReturnType<typeof multiply>; // 'number'

export {};

type InitialFormType = {
  name: string;
  email: string;
  password: string;
};

export type Form = InitialFormType & {
  errors: Partial<Record<keyof InitialFormType, [string]>>;
};

export {};
