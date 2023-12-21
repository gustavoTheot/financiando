import styled from 'styled-components'

export const SelectMonthContainer = styled.div`
  width: 50rem;
  height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  div:first-child {
    width: 90%;
  }

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
    width: 2rem;
    height: 2rem;
    position: absolute;

    fill: #fff;
    cursor: pointer;
    margin-top: 2rem;
  }

  .arrow--left {
    top: 8px;
    left: 5px;
  }

  .arrow--right {
    top: 8px;
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
    background-color: ${(props) => props.theme['purple-normal']};
  }
`
