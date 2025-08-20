export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // block-scoped shadowing
    const task2 = false; // block-scoped shadowing
  }

  return [task, task2];
}

