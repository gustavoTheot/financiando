import styled from 'styled-components'

export const SelectMonthContainer = styled.div`
  width: 20rem;
  height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  div {
    width: 20rem;
  }

  [class^='number-slide'],
  [class*=' number-slide'] {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    border-radius: 10px;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;

    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  .centered-month {
    width: 2rem;
    height: 2rem;
    font-weight: bolder;
    color: ${(props) => props.theme['gray-700']};
    background-color: ${(props) => props.theme['gray-400']};
  }
`
