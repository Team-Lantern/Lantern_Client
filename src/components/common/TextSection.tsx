import { Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

interface TextSectionProps {
  title: string;
  subtitle: string;
}

const TextSection = ({ title, subtitle }: TextSectionProps) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 400,
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 80,
    marginBottom: 36,
    color: colors.white.default,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'left',
    marginLeft: 40,
    color: colors.mainColor.pastel,
  },
});

export default TextSection;