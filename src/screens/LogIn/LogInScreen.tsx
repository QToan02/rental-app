import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Container, Content } from '../../components';
import LogoHeading from '../../components/SignUpLogIn/LogoHeading';
import TextInput from '../../components/SignUpLogIn/TextInput';
import CommanBtnScreen from '../../components/CommanBtn/index';
import CommanText from '../../components/SignUpLogIn/CommanText';
import GoogleFaceBookBtn from '../../components/SignUpLogIn/GoogleFaceBookBtn';
import styles from './Styles/LogInStyle';
import { Images } from '../../theme';

export interface Props {
  navigation: any;
}
function LogInScreen({ navigation }: any) {
  return (
    <Container>
      <Content
        hasHeader
        contentContainerStyle={styles.container}
        extraScrollHeight={1}>
        <LogoHeading heading="Log in" />
        <View style={styles.signupLoginInputGroup}>
          <TextInput
            defaultInput
            placeholder="Phone number"
            type="number-pad"
            navigation={navigation}
          />
          <TextInput
            passwordInput
            placeholder="Password"
            type="default"
            navigation={navigation}
          />
          <TouchableOpacity
            style={styles.forgotPasswordLink}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>
          <CommanBtnScreen
            btnText="Log in"
            commanBtnStyle={styles.signUpLogInBtn}
            onBtnPress={() => navigation.navigate('Home')}
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
            Don’t have an account yet? {''}
            <Text
              style={styles.loginSignupBtnText}
              onPress={() => navigation.navigate('Signup')}>
              Sign up
            </Text>
          </Text>
        </View>
      </Content>
    </Container>
  );
}

export default LogInScreen;
