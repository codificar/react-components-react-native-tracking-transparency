import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Linking,
} from 'react-native';

export class ModalTracking extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    textButton: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isVisible: false,
    textButton: 'Habilitar',
    description: 'Habilite o tracking para que o app funcione corretamente.',
  };

  constructor(props) {
    super(props);
  }

  openSettings = () => {
    Linking.openSettings();
  };

  render() {
    const { textButton, description, isVisible } = this.props;
    return (
      <Modal isVisible={isVisible}>
        <View style={styles.wrapper}>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.button} onPress={this.openSettings}>
            <Text style={styles.text}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#ddd',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 10,
  },
});

export const Tracking = {
  UNAVAILABLE: 'unavailable',
  DENIED: 'denied',
  AUTHORIZED: 'authorized',
  RESTRICTED: 'restricted',
  NOT_DETERMINED: 'not-determined',
};

import {
  getTrackingStatus,
  requestTrackingPermission,
} from 'react-native-tracking-transparency';

export async function getTrackingStatus() {
  return await getTrackingStatus();
}
export async function requestTrackingPermission(){
  return await requestTrackingPermission();
}