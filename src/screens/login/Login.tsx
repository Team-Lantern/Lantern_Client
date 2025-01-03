import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import TextSection from '../../components/common/TextSection';
import LoginFullWidthButton from '../../components/login/LoginFullWidthButton';
import colors from '../../constants/colors';

const Login = () => {
  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 로직 추가
    console.log('카카오 로그인 클릭');
  };

  const handleAppleLogin = () => {
    // TODO: Apple 로그인 로직 추가
    console.log('Apple 로그인 클릭');
  };
  // TODO: 로그인 버튼 디자인 확인 -> apple : font weight, logo 이미지로
  return (
    <SafeAreaView style={styles.container}>
      <TextSection
        title={'랜턴 가입하기'}
        subtitle={
          '여성의 밤을 밝히는 공간, 랜턴에 오신 걸 환영해요!\n랜턴과 함께 최소한의 안전 습관을 만들어가요.'
        }
      />
      <Image
        source={require('../../assets/login/LoginCharacter.png')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <LoginFullWidthButton
          text="카카오 로그인"
          onPress={handleKakaoLogin}
          disabled={false}
          buttonStyle={styles.kakaoButton}
          textStyle={styles.kakaoButtonText}
          icon={require('../../assets/login/icons/KakaoIcon.png')}
        />
        <LoginFullWidthButton
          text="Apple로 로그인"
          onPress={handleAppleLogin}
          disabled={false}
          buttonStyle={styles.appleButton}
          textStyle={styles.appleButtonText}
          icon={require('../../assets/login/icons/KakaoIcon.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.mainColor.background,
  },
  image: {
    width: 325.97,
    height: 373.97,
    marginTop: 59,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 25.03,
    width: '100%',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: {
    color: colors.black.default,
  },
  appleButton: {
    backgroundColor: colors.white.default,
  },
  appleButtonText: {
    color: colors.black.default,
  },
});

export default Login;
