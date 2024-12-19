import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../constants/colors';
import TextSection from '../../components/common/TextSection';
import Seperator from '../../components/common/Seperator';

const WomenVerification = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TextSection 
        title={"여성 인증을 위해\n휴대폰 본인 인증이 필요해요"}
        subtitle={"랜턴은 여성들만 이용할 수 있는 공간이에요!\n본인 명의의 휴대폰 번호를 입력해주세요."}
      /> 
      <Seperator margin={40} />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>최소 연령 확인</Text>
        <Text style={styles.underlineText}>왜 17세 이상인가요?</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}></View>
        <Text style={styles.checkboxText}>만 17세 이상이에요.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.mainColor.background
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    color: colors.white.default
  },
  underlineText: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: colors.mainColor.pastel
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.white.w40
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 10,
    color: colors.white.default
  },
});

export default WomenVerification;
