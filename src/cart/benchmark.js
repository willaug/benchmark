import benchmark from 'benchmark';
import { database } from './database.js';
import { byFor } from './examples/for.js';
import { byReduce } from './examples/reduce.js';
import { byForEach } from './examples/forEach.js';

const suite = new benchmark.Suite();

suite
  .add(byFor.name, () => byFor(database))
  .add(byForEach.name, () => byForEach(database))
  .add(byReduce.name, () => byReduce(database))
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () { console.log(`Fastest: ${this.filter('fastest').map('name')}`); })
  .run();
