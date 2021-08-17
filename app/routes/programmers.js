import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Chioke Aarhus', 'Gil Birdsong'];
  }
}
