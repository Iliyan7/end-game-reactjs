import React, { SyntheticEvent } from 'react'
import { ALPHABET } from '../../../constants'

type Props = {
  onPickLetter?: (letter: string) => void
}

type State = {
}

class AlphabetFilter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.handleLetterClick = this.handleLetterClick.bind(this)
  }

  handleLetterClick(letter: string, e: SyntheticEvent): void {
    e.preventDefault()

    if (this.props.onPickLetter) {
      this.props.onPickLetter(letter)
    }
  }

  render(): React.ReactNode {
    const alphabet = ALPHABET.split('')

    return (
      <ul className="game-filter">
        {alphabet.map((l, i) => (
          <li key={i}><a href="" onClick={(e) => this.handleLetterClick(l, e)}>{l.toUpperCase()}</a></li>
        ))}
      </ul>
    )
  }
}

export default AlphabetFilter
