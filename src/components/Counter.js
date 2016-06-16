import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'actions'

const Counter = ({actions, counter}) => (
  <div className='counter'>
    <h3>Count: {counter}</h3>
    {' '}
    <button className='pure-button' onClick={actions.dec}>dec</button>
    {' '}
    <button className='pure-button' onClick={actions.inc}>inc</button>
    {' '}
    <button className='pure-button' onClick={actions.reset}>reset</button>
  </div>
)

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
