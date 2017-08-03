import React, { Component } from 'react';
import styled from 'styled-components/native';

import { Button } from '../components';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

const ButtonContainer = styled.View`
  top: 100;
`

class WelcomeScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Welcome</TitleText>
        <ButtonContainer>
          <Button text="Go to main" onPress={() => this.props.navigation.navigate('Main')} />
        </ButtonContainer>
      </ContainerView>
    );
  }
}

export default WelcomeScreen;
