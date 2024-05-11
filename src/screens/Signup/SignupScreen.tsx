import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Container, Content } from '../../components';
import LogoHeading from '../../components/SignUpLogIn/LogoHeading';
import TextInput from '../../components/SignUpLogIn/TextInput';
import CommanBtnScreen from '../../components/CommanBtn/index';
import CommanText from '../../components/SignUpLogIn/CommanText';
import GoogleFaceBookBtn from '../../components/SignUpLogIn/GoogleFaceBookBtn';
import styles from './Styles/SignupStyle';
import { Images } from '../../theme';

export interface Props {
  navigation: any;
}
function SignupScreen({ navigation }: any) {
  return (
    <Container>
      <Content hasHeader contentContainerStyle={styles.container}>
        <LogoHeading heading="Sign up" />
        <View style={styles.signupLoginInputGroup}>
          <TextInput
            defaultInput
            placeholder="Full name"
            type="default"
            navigation={navigation}
          />
          <TextInput
            defaultInput
            placeholder="E-mail address"
            type="email-address"
            navigation={navigation}
          />
          <TextInput
            defaultInput
            placeholder="Phone number"
            type="phone-pad"
            navigation={navigation}
          />
          <TextInput
            passwordInput
            placeholder="Password"
            type="default"
            navigation={navigation}
            inputStyle={styles.passwordInputStyle}
            passwordStyle={styles.lastInputStyle}
          />
          <CommanBtnScreen
            btnText="Sign up"
            commanBtnStyle={styles.signUpLogInBtn}
            onBtnPress={() => navigation.navigate('OtpSignUpNumber')}
          />
          <CommanText commanText="Or log in using" />
          <View style={styles.googleFaceBookBtnRow}>
            <GoogleFaceBookBtn
              googleImg
              btnImage={Images.Google}
              btnText="Google"
            />
            <GoogleFaceBookBtn btnImage={Images.Facebook} btnText="Facebook" />
          </View>
          <Text style={styles.bottomAccountText}>
            Already have an account?{' '}
            <Text
              style={styles.loginSignupBtnText}
              onPress={() => navigation.navigate('Login')}>
              Log in
            </Text>
          </Text>
        </View>
      </Content>
    </Container>
  );
}

export default SignupScreen;
