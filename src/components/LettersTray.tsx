import React from 'react'
import styled from '@emotion/styled'
import { colours } from '../style/shared'

const LettersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px auto;
`

export const Char = styled.button`
  padding: 8px;
  font-weight: bold;
  margin: 2px;
  width: 10%;
  background-color: ${(props) => (props.disabled ? 'white' : colours.pictonBlue)};
  color: ${(props) => (props.disabled ? colours.diamond : 'white')};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  border: 0;
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

export const LettersTray = ({ guessedLetters, onClickHandler }: any) => (
  <LettersContainer>
    {['A', 'B', 'C', 'D', 'E'].map((char, i) => (
      <Char
        onClick={() => onClickHandler(char)}
        key={i}
        value={char}
        disabled={guessedLetters.indexOf(char) > -1}
      >
        {char}
      </Char>
    ))}
  </LettersContainer>
)
