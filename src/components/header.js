import React from 'react'

import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: linear-gradient(
    177deg,
    rgba(3, 109, 205, 1) 0%,
    rgba(68, 227, 220, 1) 100%
  );
`

const TitleContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const HeaderTitle = styled.h1`
  color: white;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TitleContainer>
      <HeaderTitle>{siteTitle}</HeaderTitle>
    </TitleContainer>
  </HeaderContainer>
)

export default Header
