import Header from './components/Header/Header';
import Concepts from './components/Concepts/Concepts';

import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';


const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    alt: "Building blocks in a pyramid structure",
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    alt: "A cylindrical shape segmented into four parts",
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    alt: "A loud speaker",
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

const App = () => {
  return (
    <div>
      <Header imgUrl={keyConceptsImage}/>
      <Concepts data={concepts} />
    </div>
  );
}

export default App;
