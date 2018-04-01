import React, { Component } from 'react';
import styled from 'styled-components/native';
import { FormattedMessage } from 'react-native-globalize';

import { changeLanguage } from '../actions'
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
        <TitleText>
				  <FormattedMessage
            message="Welcome"
          />
				  </TitleText>
        <ButtonContainer>
          <Button text="Go to main" onPress={() => this.props.navigation.navigate('Main')} />
					<Button text="Set lang to DK - Directly" onPress={() => {changeLanguage('DK')}} />
					<Button text="Set lang to DK - Dispatch" onPress={() => {this.props.navigation.dispatch({type:'change_language'})}} />
        </ButtonContainer>
      </ContainerView>
    );
  }
}

export default WelcomeScreen;
