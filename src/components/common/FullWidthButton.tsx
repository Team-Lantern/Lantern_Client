import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../constants/colors';

interface FullWidthButtonProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
}

const FullWidthButton = ({ text, onPress, disabled }: FullWidthButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabled ? styles.disabled : styles.enabled]}
        onPress={onPress}
        disabled={disabled}>
        <Text
          style={[
            styles.text,
            disabled ? styles.textDisabled : styles.textEnabled,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    padding: 40,
  },
  button: {
    width: '100%',
    height: 58,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  enabled: {
    backgroundColor: colors.mainButtonP.default,
  },
  disabled: {
    backgroundColor: colors.mainButtonP.disabled,
  },
  text: {
    fontSize: 16,
    verticalAlign: 'middle',
    margin: 'auto',
  },
  textEnabled: {
    color: colors.textP.default,
  },
  textDisabled: {
    color: colors.textP.disabled,
  },
});

export default FullWidthButton;
