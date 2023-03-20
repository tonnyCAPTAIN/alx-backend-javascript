export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;//task in not defined
    const task2 = false;//task2 is  not defined
  }

  return [task, task2];
}
