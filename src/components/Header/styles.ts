import styled from 'styled-components'

export const Container = styled.div<{
  floating?: boolean;
}>`
  position: ${({ floating }) => floating ? 'fixed' : 'relative'};
  left: 0;
  top: 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background-color: red; */

  margin: 16px 0;
`