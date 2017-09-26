import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      transparent={visible}
      animationType="slide"
      // android requred to pass in onRequestClose, so we pass in empty function
      onRequestClose={() => {}}
    >
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

export { Confirm };
