import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface FullWidthButtonProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ImageSourcePropType;
}

const LoginFullWidthButton = ({
  text,
  onPress,
  disabled,
  buttonStyle,
  textStyle,
  icon,
}: FullWidthButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={onPress}
        disabled={disabled}>
        <View style={styles.content}>
          {icon && <Image source={icon} style={styles.icon} />}
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    padding: 32,
  },
  button: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  icon: {
    width: 22,
    height: 20,
    position: 'absolute',
    left: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    flex: 1,
  },
});

export default LoginFullWidthButton;
