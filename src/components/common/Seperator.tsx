import { View, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

interface SeperatorProps {
  margin: number;
}

const Seperator = ({ margin }: SeperatorProps) => {
  return (
    <View style={[styles.separatorContainer, { marginVertical: margin }]}>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 40,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.mainColor.pastel,
  },
});

export default Seperator;