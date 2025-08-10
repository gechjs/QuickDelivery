import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonWithTitleProps {
  title: string;
  width: number;
  height: number;
  onTap: () => void;
  isNoBg?: boolean;
}

export const ButtonWithTitle: React.FC<ButtonWithTitleProps> = ({ title, width, height, onTap, isNoBg }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width, height, backgroundColor: isNoBg ? 'transparent' : '#f15b5d', borderWidth: isNoBg ? 1 : 0 }]}
      onPress={onTap}
    >
      <Text style={[styles.text, { color: isNoBg ? '#f15b5d' : '#ffffff' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  text: { fontSize: 16, fontWeight: '700' },
});
