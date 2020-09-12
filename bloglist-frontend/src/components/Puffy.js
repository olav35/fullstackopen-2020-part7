import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: lightblue;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Img = styled.img`
  height: 200px;
`

const Warning = styled.div`
  color: red;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
`

const Description = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`

const Puffy = () => {
  return (
    <Container>
      <Img src="https://www.openbsd.org/art/puffy/ppuf1000X907.gif"/>
      <Warning>WARNING</Warning>
      <Description>This site has been secured by smug puffy. Add this component to your website within 6 hours or smug puffy will do it himself.</Description>
    </Container>
  )
}

export default Puffy