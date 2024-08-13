import React from 'react';

// Initialize Component
class Initialize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      clickedStatus: false,
    };
  }

  render() {
    return (
      <div className="bg-[#222831] p-6 rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Initialization</h2>
        <p className="text-[#EEEEEE] leading-relaxed">
          This is the phase in which the component starts its journey by setting up the state and the props. 
          This is usually done inside the constructor method.
        </p>
      </div>
    );
  }
}

// LifeCycle Component
class LifeCycle extends React.Component {
  componentWillMount() {
    console.log('Component will mount!');
  }

  componentDidMount() {
    console.log('Component did mount!');
    this.getList();
  }

  getList = () => {
    // Placeholder function
  }

  render() {
    return (
      <div className="bg-[#31363F] p-6 rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Mounting</h2>
        <p className="text-[#EEEEEE] leading-relaxed">
          The name is self-explanatory. Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM).
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">componentWillMount()</h3>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`componentWillMount() {
  console.log('Component will mount!');
}`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-2">
            This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">componentDidMount()</h3>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`componentDidMount() {
  console.log('Component did mount!');
  this.getList();
}`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-2">
            This method is called after the component gets mounted on the DOM. Like componentWillMount, it is called once in a lifecycle.
          </p>
        </div>
      </div>
    );
  }
}

// UpdatingPhase Component
class UpdatingPhase extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update?', nextProps, nextState);
    return true; // Returning true means it will re-render, false prevents it
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update', prevProps, prevState);
  }

  render() {
    return (
      <div className="bg-[#31363F] p-6 rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-4">Updating</h2>
        <p className="text-[#EEEEEE] leading-relaxed">
          This is the third phase through which our component passes. After the mounting phase, the update phase comes into play, where the component’s state changes, causing a re-render.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">shouldComponentUpdate()</h3>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`shouldComponentUpdate(nextProps, nextState) {
  console.log('Should component update?', nextProps, nextState);
  return true;
}`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-2">
            This method determines whether the component should be updated or not. By default, it returns true.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">componentWillUpdate()</h3>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`componentWillUpdate(nextProps, nextState) {
  console.log('Component will update', nextProps, nextState);
}`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-2">
            This method is called before the re-rendering of the component takes place.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#00ADB5] mb-2">componentDidUpdate()</h3>
          <pre className="bg-[#222831] p-4 rounded-lg text-[#00ADB5] overflow-x-auto">
            <code>
              {`componentDidUpdate(prevProps, prevState) {
  console.log('Component did update', prevProps, prevState);
}`}
            </code>
          </pre>
          <p className="text-[#EEEEEE] mt-2">
            This method is called just after the re-rendering of the component.
          </p>
        </div>
      </div>
    );
  }
}

// Main LifecycleMethods Component
const LifecycleMethods = () => {
  return (
    <div className="min-h-screen bg-[#222831] p-8">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#00ADB5] mb-6">Lifecycle Methods</h1>
        <ul className="list-disc list-inside text-lg text-[#EEEEEE] mb-8">
          <li className="mb-2">Initialization</li>
          <li className="mb-2">Mounting</li>
          <li className="mb-2">Updating</li>
          <li>Unmounting</li>
        </ul>
        <Initialize />
        <LifeCycle />
        <UpdatingPhase />
      </div>
    </div>
  );
}

export default LifecycleMethods;
