import React, {PropTypes} from 'react'
import 'typeface-work-sans'
import 'typeface-butler'
import '../assets/scss/main.scss'
import {EmergeContainer} from 'react-emergence'

import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 500);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <EmergeContainer
          useWindowAsContainer={true}
          args={{
            offsetTop: 90,
            elemCushion: 0.75,
            reset: false
          }}
        >
          {children()}
        </EmergeContainer>
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func
}

export default Template
