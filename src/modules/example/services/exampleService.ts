import type { ExampleItem } from '../models/interfaces/ExampleItem';

async function getExampleItems(): Promise<ExampleItem[]> {
  return [
    { id: 1, title: 'Example 1' },
    { id: 2, title: 'Example 2' },
  ];
}

export { getExampleItems };
