/* eslint-disable no-alert */
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      imageDog: '',
      loading: true,
    };

    this.fetchDog = this.fetchDog.bind(this);
    this.renderDog = this.renderDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const result = !nextState.imageDog.includes('terrier');
    return result;
  }

  componentDidUpdate(_prevProps, prevState) {
    const { imageDog } = this.state;
    if (prevState.imageDog !== imageDog) {
      localStorage.setItem('dogImage', imageDog);
    }
    const raca = imageDog.split('/')[4];
    (raca) ? alert(raca) : null;
  }

  async fetchDog() {
    this.setState({ loading: true },
      async () => {
        const result = await fetch('https://dog.ceo/api/breeds/image/random');
        const resultJson = await result.json();
        const { message } = resultJson;
        this.setState({
          loading: false,
          imageDog: message,
        });
      });
  }

  renderDog() {
    const { imageDog } = this.state;
    return (
      <div>
        <img src={ imageDog } alt="Dog" />
        <button type="button" onClick={ this.fetchDog }>Add Dog</button>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <h1>Exercise Fetch Dogs</h1>
        {loading ? 'Loading' : this.renderDog()}
      </div>
    );
  }
}

export default App;
