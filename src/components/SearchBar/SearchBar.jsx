import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from 'components/styles.module.css';

export default class Searchbar extends Component {
  state = {
    prompt: '',
  };

  handleChange = event => {
    this.setState({
      prompt: event.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.prompt.trim()) {
      toast.warning('Input your request!');
      return;
    }
    this.props.onSubmit(this.state.prompt.trim().toLowerCase());
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}></button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.prompt}
            placeholder="Search images and photos"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
